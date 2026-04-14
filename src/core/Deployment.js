// ─────────────────────────────────────────────────────────────
// 🚀 MODULE: DEPLOYMENT ENGINE (GitHub & Local Sync)
// ─────────────────────────────────────────────────────────────

function getDeploymentLogic(dc) {
    const { useState, useEffect, useCallback, useRef } = dc;
    const { spawn } = require('child_process');
    const fs = require('fs');
    const path = require('path');

    // Helper: Relativize paths for logs
    const rel = (abs) => {
        try {
            const vaultPath = dc.app.vault.adapter.getBasePath();
            return path.relative(vaultPath, abs);
        } catch (e) { return abs; }
    };

    const handleLocalDeploy = async ({ addLog, setStatus, setIsDeploying, folderPath }) => {
        setIsDeploying(true);
        setStatus("BUNDLING_NATIVE_CORE...");
        addLog("LOCAL_DEPLOY_INIT");

        console.log(`[Deployment] Starting Local Deploy in: ${folderPath}`);
        try {
            const vaultPath = dc.app.vault.adapter.getBasePath();
            // Ensure folderPath is used to resolve componentPath
            const componentPath = path.resolve(vaultPath, folderPath);
            const livePath = path.resolve(vaultPath, ".obsidian/plugins/dossier-os");
            const manifestPath = path.join(componentPath, "manifest.json");
            const nodeModulesPath = path.join(componentPath, "node_modules");

            console.log("[Deployment] Paths Resolved (Relative):", { 
                component: rel(componentPath), 
                live: rel(livePath), 
                manifest: rel(manifestPath) 
            });

            // 1. Version Management
            let currentVersion = "1.0.0";
            if (fs.existsSync(manifestPath)) {
                try {
                    const m = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
                    const parts = m.version.split('.');
                    parts[2] = parseInt(parts[2] || 0) + 1;
                    currentVersion = parts.join('.');
                    m.version = currentVersion;
                    fs.writeFileSync(manifestPath, JSON.stringify(m, null, '\t'));
                    addLog(`BUMP_V${currentVersion}`);
                    console.log(`[Deployment] Version bumped: v${currentVersion}`);
                } catch (e) { 
                    console.error("[Deployment] Version bump error:", e);
                    addLog("VERSION_BUMP_FAILED"); 
                }
            } else {
                console.log("[Deployment] Initializing manifest...");
                const initialManifest = {
                    id: "dossier-os",
                    name: "Dossier OS",
                    version: currentVersion,
                    minAppVersion: "0.15.0",
                    description: "Tactical Dossier Core",
                    author: "BETO",
                    isDesktopOnly: true
                };
                fs.writeFileSync(manifestPath, JSON.stringify(initialManifest, null, '\t'));
                addLog("CREATED_MANIFEST");
            }

            // 2. Build Pipeline (with Self-Contained Dependency Check)
            const hasReact = fs.existsSync(path.join(nodeModulesPath, "react"));
            const installCmd = hasReact ? "echo 'React ready.'" : "echo 'Installing local dependencies...' && npm install react react-dom --no-package-lock";
            
            const cmd = `
                ${installCmd} &&
                mkdir -p "${livePath}" && 
                npx -y esbuild src/native/main.jsx --bundle --outfile="${livePath}/main.js" --platform=browser --minify --define:process.env.NODE_ENV=\\"production\\" --external:obsidian --external:electron --external:child_process --external:fs --external:path --format=cjs --loader:.jsx=jsx --inject:src/native/react-shim.js --jsx-factory=React.createElement --jsx-fragment=React.Fragment && 
                cp "${manifestPath}" "${livePath}/manifest.json" &&
                (obsidian eval code="(async () => { await app.plugins.loadManifests(); if(app.plugins.manifests['dossier-os']) { await app.plugins.disablePlugin('dossier-os'); await app.plugins.enablePlugin('dossier-os'); console.log('Dossier OS Reinitialized'); } else { console.error('Manifest not found after load'); } })()" || true)

            `.trim().replace(/\n/g, '');


            console.log("[Deployment] Executing Pipe (Relative Context)...");

            const child = spawn('/bin/zsh', ['-l', '-c', cmd], { cwd: componentPath });
            
            child.stdout.on('data', d => console.log("[Deployment] [STDOUT]", d.toString()));
            child.stderr.on('data', d => console.error("[Deployment] [STDERR]", d.toString()));

            child.on('close', (code) => {
                setIsDeploying(false);
                if (code === 0) {
                    console.log("[Deployment] Local deploy SUCCESS");
                    setStatus("DEPLOY_SUCCESS v" + currentVersion);
                    addLog("NATIVE_OS_ACTIVE");
                } else {
                    console.error("[Deployment] Local deploy FAILED (Exit Code:", code, ")");
                    setStatus("DEPLOY_FAIL");
                    addLog(`ERROR_CODE_${code}`);
                }
            });
        } catch (e) {
            console.error("[Deployment] Local deploy EXCEPTION:", e);
            setStatus("EXCEPTION_LOGGED");
            addLog(e.message);
            setIsDeploying(false);
        }
    };

    const handlePublish = async ({ repoName, ghToken, addLog, setStatus, setIsPublishing, folderPath }) => {
        setIsPublishing(true);
        setStatus("PREPARING_GITOPS...");
        addLog("PUBLISH_INIT");

        // 🛡️ AUTH HANDSHAKE: Priority Shift (Manual UI -> Native Keychain)
        let activeToken = ghToken;
        let authSource = "UI_MANUAL";

        if (!activeToken) {
            console.log("[Deployment] Manual token empty, attempting NATIVE_GRAB...");
            try {
                const { execSync } = require('child_process');
                const cmd = `security find-generic-password -s "gh:github.com" -w || security find-generic-password -s "github.com" -w || security find-generic-password -s "GitHub" -w`;
                let raw = execSync(cmd, { encoding: 'utf8' }).replace(/[\r\n]/g, '').trim();
                
                if (raw) {
                    if (raw.startsWith('go-keyring-base64:')) {
                        const b64 = raw.split(':')[1].trim();
                        activeToken = (typeof Buffer !== 'undefined')
                            ? Buffer.from(b64, 'base64').toString('utf8').trim()
                            : decodeURIComponent(escape(window.atob(b64))).trim();
                    } else {
                        activeToken = raw;
                    }
                    if (activeToken) {
                        authSource = "NATIVE_KEYCHAIN";
                        addLog("NATIVE_GRAB_SUCCESS");
                    }
                }
            } catch (e) { /* Expected */ }
        }

        if (!activeToken || !repoName) {
            console.error("[Deployment] AUTH_BLOCK: No token or repo defined.");
            setStatus("CONFIG_REQUIRED"); 
            setIsPublishing(false);
            return; 
        }

        console.log(`[Deployment] Starting Public Publish for: ${folderPath}`);
        try {
            const vaultPath = dc.app.vault.adapter.getBasePath();
            const componentPath = path.resolve(vaultPath, folderPath);
            const manifestPath = path.join(componentPath, "manifest.json");
            const req = window.requestUrl || dc.app.requestUrl;

            console.log("[Deployment] Paths Resolved (Relative):", { 
                component: rel(componentPath), 
                manifest: rel(manifestPath) 
            });

            // 0. Auto-Bump Version for Publish
            let pushVersion = "1.0.0";
            if (fs.existsSync(manifestPath)) {
                try {
                    const m = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
                    const parts = m.version.split('.');
                    parts[2] = parseInt(parts[2] || 0) + 1;
                    pushVersion = parts.join('.');
                    m.version = pushVersion;
                    fs.writeFileSync(manifestPath, JSON.stringify(m, null, '\t'));
                    addLog(`PUBLISH_BUMP_V${pushVersion}`);
                    console.log(`[Deployment] Publish Version bump: v${pushVersion}`);
                } catch (e) {
                    console.error("[Deployment] Publish version bump error:", e);
                }
            }

            // 1. GitHub User Discovery
            console.log("[Deployment] Requesting GitHub authentication...");
            const userRes = await req({
                url: 'https://api.github.com/user',
                method: 'GET',
                headers: { 
                    'Authorization': `token ${activeToken}`, 
                    'Accept': 'application/vnd.github.v3+json' 
                }
            });
            
            if (userRes.status !== 200) {
                console.error("[Deployment] Auth FAILED (Status:", userRes.status, ")");
                console.error("[Deployment] Auth Error Details:", userRes.json || userRes.text);
                throw new Error(`AUTH_FAILED_${userRes.status}`);
            }
            const { login } = userRes.json;
            console.log(`[Deployment] Authenticated as: ${login}`);
            
            const authedUrl = `https://${activeToken}@github.com/${login}/${repoName}.git`;
            const tag = `v${pushVersion}`;

            // 2. Git Pipeline
            const cmd = `
                git init && 
                git config user.name "${login}" && 
                git config user.email "${login}@users.noreply.github.com" &&
                git add -A && 
                (git commit -m "Dossier Update [${tag}]" --allow-empty || true) && 
                git branch -M main && 
                (git remote add origin "${authedUrl}" 2>/dev/null || git remote set-url origin "${authedUrl}") && 
                git push -u origin main --force
            `.trim().replace(/\n/g, '');

            console.log("[Deployment] Executing Git Push...");

            const child = spawn('/bin/zsh', ['-l', '-c', cmd], { cwd: componentPath });
            
            child.stdout.on('data', d => console.log("[Deployment] [GIT]", d.toString()));
            child.stderr.on('data', d => console.error("[Deployment] [GIT_ERR]", d.toString()));

            child.on('close', async (code) => {
                if (code !== 0) { 
                    console.error("[Deployment] Git FAILED (Exit Code:", code, ")");
                    setStatus("Push Failed"); 
                    setIsPublishing(false); 
                    return; 
                }
                
                console.log("[Deployment] Git Push SUCCESS. Synchronizing release...");
                setStatus(`Syncing Release ${tag}...`);
                addLog("CREATING_GITHUB_RELEASE");
                
                try {
                    // Create Release
                    const createRes = await req({
                        url: `https://api.github.com/repos/${login}/${repoName}/releases`,
                        method: 'POST',
                        headers: { 
                            'Authorization': `token ${activeToken}`, 
                            'Content-Type': 'application/json' 
                        },
                        body: JSON.stringify({ tag_name: tag, name: `Resume Dossier ${tag}`, body: "Automated Cinematic Export.", draft: false })
                    });
                    
                    if (createRes.status === 201) {
                        console.log(`[Deployment] Release created: ${tag}`);
                        addLog("RELEASE_SUCCESS");
                    } else {
                        console.error("[Deployment] Release FAILED (Status:", createRes.status, ")");
                        addLog(`RELEASE_STATUS_${createRes.status}`);
                    }

                    setStatus("Published " + tag);
                    addLog("PUBLISH_COMPLETE");
                    setIsPublishing(false);
                } catch (err) {
                    console.error("[Deployment] Release EXCEPTION:", err);
                    addLog(`RELEASE_ERR: ${err.message}`);
                    setStatus("Push Success, Release Fail");
                    setIsPublishing(false);
                }
            });
        } catch (e) { 
            console.error("[Deployment] Public sync EXCEPTION:", e);
            setStatus("Error: " + e.message); 
            setIsPublishing(false); 
        }

    };

    return { handleLocalDeploy, handlePublish };
}

const _exports = { getDeploymentLogic };
if (typeof module !== 'undefined' && module.exports) module.exports = _exports;
return _exports;



