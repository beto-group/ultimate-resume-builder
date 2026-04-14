var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/core/Styles.js
var require_Styles = __commonJS({
  "src/core/Styles.js"(exports2, module2) {
    var TOKENS2 = {
      bg: "rgba(5, 5, 5, 1)",
      glassBg: "rgba(10, 10, 15, 0.25)",
      accent: "hsl(265, 89%, 66%)",
      accentCyan: "hsl(190, 90%, 50%)",
      accentAmber: "hsl(45, 100%, 50%)",
      text: "#ffffff",
      textDim: "rgba(255, 255, 255, 0.6)",
      textMuted: "rgba(255, 255, 255, 0.4)",
      border: "rgba(255, 255, 255, 0.1)",
      radius: "16px",
      font: '"Outfit", sans-serif',
      fontMono: '"JetBrains Mono", monospace'
    };
    var GLOBAL_CSS2 = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700;900&family=JetBrains+Mono:wght@400;700&display=swap');

.urb-root {
    --accent: ${TOKENS2.accent};
    position: relative;
    width: 100%; height: 100%;
    background: ${TOKENS2.bg};
    color: ${TOKENS2.text};
    font-family: ${TOKENS2.font};
    overflow: hidden;
    display: flex; flex-direction: column;
}

/* \u{1F9EA} INTEGRATED HUD DRAWER (Expanding Command Plate) */
.urb-hud {
    position: absolute; top: 0; left: 0; width: 100%;
    padding: 10px 20px; z-index: 10000;
    display: flex; flex-direction: column;
    background: rgba(8, 8, 12, 0.4);
    backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid ${TOKENS2.border};
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: all;
    box-shadow: 0 10px 40px rgba(0,0,0,0.6);

    overflow: visible;
}
.urb-hud.hidden { transform: translateY(-100%); opacity: 0; pointer-events: none; }

.urb-hud-drawer {
    transform: translateY(-10px); opacity: 0; pointer-events: none;
    z-index: 9999;
}
.urb-hud-drawer.visible { transform: translateY(0); opacity: 1; pointer-events: auto; }

.urb-settings-panel {
    position: absolute;
    top: 115px; 
    right: 40px;
    width: 420px;
    padding: 30px;
    background: rgba(12, 12, 18, 0.9);
    backdrop-filter: blur(40px);
    border: 1px solid ${TOKENS2.border};
    border-radius: 12px;
    box-shadow: 0 50px 100px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.05);
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 21000;
    pointer-events: auto;
}

.urb-settings-wrapper {
    position: absolute;
    inset: 0;
    z-index: 20999;
    pointer-events: none;
    overflow: hidden;
}



.urb-hud-main {
    width: 100%; height: 48px;
    display: flex; justify-content: space-between; align-items: center;
}

.urb-hud-drawer {
    width: 100%; padding: 20px 0;
    border-top: 1px solid ${TOKENS2.border};
    margin-top: 5px;
    display: flex; flex-direction: column; gap: 20px;
}

.urb-briefing-box {
    background: rgba(255,255,255,0.02);
    padding: 15px; border-radius: 4px; border-left: 2px solid ${TOKENS2.accent};
}
.urb-briefing-text {
    font-size: 10px; line-height: 1.6; color: ${TOKENS2.textDim};
    letter-spacing: 0.5px; margin-top: 10px;
}

.urb-logo-wrap {
    display: flex; flex-direction: column; align-items: flex-start; gap: 4px;
}
.urb-logo-text {
    font-family: ${TOKENS2.fontMono}; font-size: 18px; font-weight: 900;
    color: white; letter-spacing: 2px;
}
.urb-logo-text span {
    font-size: 9px; opacity: 0.5; font-weight: 300; letter-spacing: 4px;
    margin-left: 8px;
}
.urb-hud-badge {
    font-family: ${TOKENS2.fontMono}; font-size: 7px; color: ${TOKENS2.accent};
    background: rgba(168, 85, 247, 0.08); padding: 1px 6px; border-radius: 2px;
    letter-spacing: 2px; border: 1px solid rgba(168, 85, 247, 0.2);
}
.urb-hud-tabs {
    display: none;
}
.urb-nav-acts {
    display: flex; gap: 12px; align-items: center;
}
.urb-act-btn {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.6);
    font-family: ${TOKENS2.fontMono}; font-size: 9px; font-weight: 900;
    padding: 6px 12px; border-radius: 4px; cursor: pointer;
    transition: all 0.2s ease; letter-spacing: 1.5px;
}
.urb-act-btn:hover { background: rgba(255,255,255,0.08); color: white; border-color: rgba(255,255,255,0.2); }
.urb-act-btn.active { background: ${TOKENS2.accent}; color: white; border-color: transparent; }
.urb-act-btn.primary { background: white; color: black; border-color: white; }

.urb-sector-dropdown {
    position: absolute; top: 70px; right: 20px;
    width: 240px; 
    background: rgba(5, 5, 8, 0.85);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 8px; padding: 20px;
    display: flex; flex-direction: column; gap: 4px;
    box-shadow: 0 50px 100px rgba(0,0,0,0.9);
    z-index: 1000; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    transform: translateX(40px); opacity: 0; pointer-events: none;
}
.urb-sector-dropdown.visible { transform: translateX(0); opacity: 1; pointer-events: auto; }
.urb-sector-item {
    padding: 12px 16px; font-family: ${TOKENS2.fontMono}; font-size: 10px;
    color: rgba(255,255,255,0.4); text-align: right; letter-spacing: 2px;
    cursor: pointer; transition: all 0.2s ease; border-radius: 4px;
}
.urb-sector-item:hover { color: white; background: rgba(255,255,255,0.05); }
.urb-sector-item.active { color: ${TOKENS2.accent}; font-weight: 900; background: rgba(168, 85, 247, 0.05); }

.urb-nav-acts { display: flex; gap: 10px; align-items: center; }

.urb-act-btn {
    padding: 6px 14px; border-radius: 4px; border: 1px solid ${TOKENS2.border};
    background: rgba(255,255,255,0.02); color: ${TOKENS2.textDim};
    font-size: 9px; font-weight: 900; letter-spacing: 1.5px;
    cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.urb-act-btn:hover { color: white; background: rgba(255,255,255,0.08); border-color: ${TOKENS2.accent}; }
.urb-act-btn.active { background: ${TOKENS2.accent}; color: white; border-color: transparent; }

/* \u{1F50D} PREVIEW SCALING ENGINE */
.urb-preview-container {
    width: 100%; height: 100%; position: relative;
    overflow-y: auto; overflow-x: hidden;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.1) transparent;
}
.urb-preview-container::-webkit-scrollbar { width: 6px; }
.urb-preview-container::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }

.urb-preview-content {
    width: 100%; transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: top center;
}
.urb-preview-content.scaled { transform: scale(0.4); }
.urb-preview-content.zoomed { transform: scale(1); }

.urb-metadata {
    font-family: ${TOKENS2.fontMono}; font-size: 8px;
    color: ${TOKENS2.textMuted}; line-height: 1.5;
    text-align: right; letter-spacing: 0.5px;
}

.status-bar { display: none !important; }

/* \u{1F9EA} HOVER SENSOR */
.urb-hover-sensor {
    position: absolute; top: 0; left: 0; width: 100%; height: 40px;
    z-index: 10000; cursor: ns-resize;
}

/* \u{1F9EA} ELITE SCROLLBARS */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-thumb { background: ${TOKENS2.accent}; }

.urb-viewport { flex: 1; position: relative; cursor: row-resize; }

/* \u{1F3AD} DUAL-PANEL ORCHESTRATION */
.urb-dual-layout {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 60px;
    box-sizing: border-box;
}

@keyframes urb-drift-left {
    from { opacity: 0; transform: translateX(-60px) scale(0.95); }
    to { opacity: 1; transform: translateX(0) scale(1); }
}

@keyframes urb-drift-right {
    from { opacity: 0; transform: translateX(60px) scale(0.95); }
    to { opacity: 1; transform: translateX(0) scale(1); }
}

.urb-media-pane {
    flex: 1.2;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: urb-drift-left 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.urb-video-frame {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 30px 60px rgba(0,0,0,0.8);
    background: #000;
}

.urb-video-frame video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.urb-intel-pane {
    flex: 0.8;
    padding: 50px;
    background: rgba(10, 10, 15, 0.4);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    box-shadow: 0 40px 100px rgba(0,0,0,0.9);
    animation: urb-drift-right 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
}

.urb-intel-header { 
    font-size: 10px; 
    color: var(--urb-print-accent, #a855f7); 
    font-weight: 900; 
    letter-spacing: 4px; 
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.urb-intel-title {
    font-size: 42px;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 25px;
    color: white;
    letter-spacing: -2px;
}

.urb-intel-body {
    font-size: 18px;
    line-height: 1.6;
    color: rgba(255,255,255,0.8);
    font-weight: 300;
}

.urb-mission-loop {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
}

.urb-mission-item {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 14px;
    font-weight: 600;
}

@keyframes urb-fade-in {
    from { 
        opacity: 0; 
        transform: translateY(10px) scale(0.99);
    }
    to { 
        opacity: 1; 
        transform: translateY(0) scale(1);
    }
}
.fade-in { animation: urb-fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

@keyframes urb-float {
    0% { transform: translateY(calc(0px)); }
    50% { transform: translateY(calc(-10px)); }
    100% { transform: translateY(calc(0px)); }
}
.urb-float { animation: urb-float 6s ease-in-out infinite; }

.cinematic-stage { 
    perspective: 1200px; 
    transform-style: preserve-3d;
}

@keyframes urb-breathing {
    0% { transform: rotateX(0deg) rotateY(0deg) scale(1.0); }
    25% { transform: rotateX(2deg) rotateY(-1deg) scale(1.01); }
    50% { transform: rotateX(0deg) rotateY(-3deg) scale(1.02); }
    75% { transform: rotateX(-2deg) rotateY(-1deg) scale(1.01); }
    100% { transform: rotateX(0deg) rotateY(0deg) scale(1.0); }
}
.urb-breathing { 
    animation: urb-breathing 8s ease-in-out infinite; 
    transform-style: preserve-3d;
}
@keyframes urb-pulse {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
}
.urb-pulse { animation: urb-pulse 2s infinite; }

.urb-mini-terminal {
    font-family: ${TOKENS2.fontMono};
    font-size: 9px;
    background: rgba(0,0,0,0.4);
    border: 1px solid ${TOKENS2.border};
    border-radius: 4px;
    padding: 10px;
    overflow-y: auto;
    color: ${TOKENS2.textDim};
    line-height: 1.5;
}

.urb-mini-terminal::-webkit-scrollbar { width: 3px; }
.urb-mini-terminal::-webkit-scrollbar-thumb { background: ${TOKENS2.accent}44; }

/* \u2622\uFE0F NUCLEAR EXTRACTION: DOM HOISTING OVERRIDES */
@media print {
    @page { size: A4; margin: 0; }

    body.urb-is-printing > *:not(.urb-print-area) { 
        display: none !important; 
        visibility: hidden !important; 
    }
    
    body.urb-is-printing .urb-print-area {
        display: block !important;
        visibility: visible !important;
        position: absolute !important;
        top: 0 !important; left: 0 !important;
        width: 100% !important;
        height: 100vh !important;
        max-height: 297mm !important;
        overflow: hidden !important;
        break-inside: avoid !important;
        z-index: 9999999 !important;
        transform-origin: top left;
        transform: scale(0.96); /* Surgical scale to ensure 1-page fit */
    }

    /* \u{1F3A8} THEME: DARK_DOSSIER (Cinematic) */
    body.urb-theme-dark { 
        --urb-print-bg: #050508; 
        --urb-print-text: #ffffff; 
        --urb-print-accent: #a855f7;
        background-color: var(--urb-print-bg) !important; color: var(--urb-print-text) !important; 
    }
    body.urb-theme-dark .urb-print-area { background-color: var(--urb-print-bg) !important; }
    
    /* \u{1F3A8} THEME: LIGHT_MANIFEST (Standard) */
    body.urb-theme-light { 
        --urb-print-bg: #ffffff; 
        --urb-print-text: #000000; 
        --urb-print-accent: #6b21a8;
        background-color: var(--urb-print-bg) !important; color: var(--urb-print-text) !important; 
    }
    body.urb-theme-light .urb-print-area { background-color: var(--urb-print-bg) !important; }
    body.urb-theme-light * { 
        color: var(--urb-print-text) !important; 
        border-color: rgba(0,0,0,0.1) !important; 
    }
    body.urb-theme-light .urb-print-grid { background-color: transparent !important; }
}

`;
    var _exports = { TOKENS: TOKENS2, GLOBAL_CSS: GLOBAL_CSS2 };
    if (typeof module2 !== "undefined" && module2.exports) module2.exports = _exports;
    return _exports;
  }
});

// src/core/Parser.js
var require_Parser = __commonJS({
  "src/core/Parser.js"(exports2, module2) {
    function parseResumeMarkdown2(text) {
      const lines = text.split("\n");
      const data = {
        groups: [{ name: "IDENTITY", items: [] }],
        nodes: []
      };
      let currentEntry = null;
      for (const raw of lines) {
        const line = raw.trim();
        if (!line) continue;
        const h1 = line.match(/^#\s+(\d+)\s+::\s+(.+)/);
        if (h1) {
          const title = h1[2].trim().toUpperCase();
          currentEntry = {
            id: `node-${h1[1]}`,
            order: parseInt(h1[1]),
            title,
            desc: "",
            media: [],
            bullets: [],
            groupName: "DOSSIER",
            panelVideo: null,
            panelText: "",
            trigger: null,
            epochs: [],
            milestones: []
          };
          data.nodes.push(currentEntry);
          data.groups[0].items.push(currentEntry);
          continue;
        }
        const bullet = line.match(/^[*-]\s+(.+)/);
        if (bullet && currentEntry) {
          const content = bullet[1].trim();
          const cleanContent = content.replace(/\*\*/g, "").trim();
          if (cleanContent.toUpperCase().startsWith("PANEL_VIDEO:")) {
            const videoMatch = content.match(/!\[\[(.+?)\]\]/);
            if (videoMatch) {
              currentEntry.panelVideo = videoMatch[1];
            }
          } else if (cleanContent.toUpperCase().startsWith("PANEL_TEXT:")) {
            const val = cleanContent.substring(cleanContent.indexOf(":") + 1).trim();
            currentEntry.panelText = val;
            currentEntry.desc = val;
          } else if (cleanContent.toUpperCase().startsWith("TRIGGER:")) {
            const val = cleanContent.substring(cleanContent.indexOf(":") + 1).trim();
            currentEntry.trigger = val;
            if (val.includes("Globe")) currentEntry.showGlobe = true;
          } else if (cleanContent.toUpperCase().startsWith("PANEL_TYPE:")) {
            const val = cleanContent.substring(cleanContent.indexOf(":") + 1).trim();
            currentEntry.panelType = val;
          } else if (cleanContent.toUpperCase().startsWith("MISSION:")) {
            const val = cleanContent.substring(cleanContent.indexOf(":") + 1).trim();
            currentEntry.mission = val;
          } else if (cleanContent.toUpperCase().startsWith("CHRONOS_DATA:")) {
            const val = cleanContent.substring(cleanContent.indexOf(":") + 1).trim();
            currentEntry.chronosData = val;
          } else if (cleanContent.toUpperCase().startsWith("EPOCH:")) {
            const val = cleanContent.substring(cleanContent.indexOf(":") + 1).trim();
            currentEntry.epochs.push(val);
          } else if (cleanContent.toUpperCase().startsWith("MILESTONE:")) {
            const val = cleanContent.substring(cleanContent.indexOf(":") + 1).trim();
            currentEntry.milestones.push(val);
          } else if (cleanContent.toUpperCase().startsWith("EVENT_DATA:")) {
            const val = cleanContent.substring(cleanContent.indexOf(":") + 1).trim();
            currentEntry.eventData = val;
          } else {
            currentEntry.bullets.push(content);
          }
        }
      }
      data.nodes.sort((a, b) => a.order - b.order);
      data.nodes.forEach((n, idx) => {
        n.index = idx;
        n.isLast = idx === data.nodes.length - 1;
        if (idx === 0) data.about = { ...n, items: [n] };
      });
      if (!data.about) data.about = { name: "BETO" };
      return data;
    }
    var _exports = { parseResumeMarkdown: parseResumeMarkdown2 };
    if (typeof module2 !== "undefined" && module2.exports) module2.exports = _exports;
    return _exports;
  }
});

// src/core/Deployment.js
var require_Deployment = __commonJS({
  "src/core/Deployment.js"(exports2, module2) {
    var fs = require("fs");
    var path = require("path");
    var { exec } = require("child_process");
    function getDeploymentLogic2(dc) {
      const rel = (p) => p.split("DATACORE/")[1] || p;
      const handleLocalDeploy = async ({ addLog, setStatus, setIsDeploying, folderPath }) => {
        setIsDeploying(true);
        setStatus("COMPILING...");
        addLog("DEPLOY_INIT");
        try {
          const vault = dc.app.vault;
          const adapter = vault.adapter;
          const vaultPath = adapter.getBasePath();
          const componentPath = path.resolve(vaultPath, folderPath);
          const pluginPath = path.join(vaultPath, ".obsidian", "plugins", "dossier-os");
          const mainJsPath = path.join(pluginPath, "main.js");
          const manifestPath = path.join(pluginPath, "manifest.json");
          console.log("[Deployment] Paths Resolved:", {
            component: rel(componentPath),
            plugin: rel(pluginPath)
          });
          if (!fs.existsSync(pluginPath)) {
            fs.mkdirSync(pluginPath, { recursive: true });
            console.log("[Deployment] Created plugin directory.");
          }
          const componentManifest = path.join(componentPath, "manifest.json");
          if (fs.existsSync(componentManifest)) {
            fs.copyFileSync(componentManifest, manifestPath);
            console.log("[Deployment] Manifest Synced.");
            addLog("MANIFEST_SYNCED");
          }
          const sourceMain = path.join(componentPath, "main.js");
          if (fs.existsSync(sourceMain)) {
            fs.copyFileSync(sourceMain, mainJsPath);
          } else {
            const srcPath = path.join(componentPath, "src", "index.jsx");
            if (fs.existsSync(srcPath)) {
              fs.copyFileSync(srcPath, mainJsPath);
            }
          }
          console.log("[Deployment] Bundle Injected to Dossier OS.");
          addLog("BUNDLE_INJECTED");
          if (dc.app.plugins) {
            const pluginId = "dossier-os";
            await dc.app.plugins.disablePlugin(pluginId);
            await dc.app.plugins.enablePlugin(pluginId);
            console.log("[Deployment] Dossier OS Reinitialized");
            addLog("PLUGIN_RELOADED");
          }
          setStatus("IDLE");
          setIsDeploying(false);
          addLog("DEPLOY_SUCCESS");
        } catch (e) {
          console.error("[Deployment] Local deploy FAILED:", e);
          setStatus("DEPLOY_ERROR");
          setIsDeploying(false);
          addLog("DEPLOY_CRASH");
        }
      };
      const handlePublish = async ({ repoName, ghToken, addLog, setStatus, setIsPublishing, folderPath }) => {
        setIsPublishing(true);
        setStatus("PREPARING_GITOPS...");
        addLog("PUBLISH_INIT");
        let activeToken = ghToken;
        let authSource = "UI_MANUAL";
        if (!activeToken) {
          console.log("[Deployment] Manual token empty, attempting NATIVE_GRAB...");
          try {
            const { execSync } = require("child_process");
            const cmd = `security find-generic-password -s "gh:github.com" -w || security find-generic-password -s "github.com" -w || security find-generic-password -s "GitHub" -w`;
            let raw = execSync(cmd, { encoding: "utf8" }).replace(/[\r\n]/g, "").trim();
            if (raw) {
              if (raw.startsWith("go-keyring-base64:")) {
                const b64 = raw.split(":")[1].trim();
                activeToken = typeof Buffer !== "undefined" ? Buffer.from(b64, "base64").toString("utf8").trim() : decodeURIComponent(escape(window.atob(b64))).trim();
              } else {
                activeToken = raw;
              }
              if (activeToken) {
                authSource = "NATIVE_KEYCHAIN";
                addLog("NATIVE_GRAB_SUCCESS");
              }
            }
          } catch (e) {
          }
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
          const getRel = (p) => path.relative(vaultPath, p);
          console.log("[Deployment] Paths Resolved (Relative):", {
            component: getRel(componentPath),
            manifest: getRel(manifestPath)
          });
          let pushVersion = "1.0.0";
          const distPath = path.join(componentPath, "main.js");
          const nativeEntry = path.join(componentPath, "src", "native", "main.jsx");
          console.log("[Deployment] Orchestrating Native Build (esbuild)...");
          if (fs.existsSync(nativeEntry)) {
            try {
              const { execSync } = require("child_process");
              const buildCmd = `/bin/zsh -l -c "npx esbuild ${nativeEntry} --bundle --outfile=${distPath} --platform=node --external:obsidian --external:electron --external:react --external:react-dom --format=cjs --loader:.jsx=jsx"`;
              console.log("[Deployment] Running Build Command...");
              execSync(buildCmd, { cwd: componentPath });
              if (fs.existsSync(distPath)) {
                console.log("[Deployment] ESBUILD_SUCCESS: Native bundle generated.");
                addLog("AUTO_BUNDLING_SUCCESS");
              }
            } catch (e) {
              console.error("[Deployment] ESBUILD_FAILED:", e.message);
              addLog("AUTO_BUNDLING_FAILED");
              const srcPath = path.join(componentPath, "src", "index.jsx");
              if (fs.existsSync(srcPath)) fs.copyFileSync(srcPath, distPath);
            }
          } else {
            console.warn("[Deployment] NATIVE_ENTRY_MISSING: Falling back to source copy.");
            const srcPath = path.join(componentPath, "src", "index.jsx");
            if (fs.existsSync(srcPath)) fs.copyFileSync(srcPath, distPath);
          }
          if (fs.existsSync(manifestPath)) {
            try {
              const m = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
              const parts = m.version.split(".");
              parts[2] = parseInt(parts[2] || 0) + 1;
              pushVersion = parts.join(".");
              m.version = pushVersion;
              fs.writeFileSync(manifestPath, JSON.stringify(m, null, "	"));
              addLog(`PUBLISH_BUMP_V${pushVersion}`);
              console.log(`[Deployment] Publish Version bump: v${pushVersion}`);
            } catch (e) {
              console.error("[Deployment] Publish version bump error:", e);
            }
          }
          console.log("[Deployment] Requesting GitHub authentication...");
          const userRes = await req({
            url: "https://api.github.com/user",
            method: "GET",
            headers: {
              "Authorization": `token ${activeToken}`,
              "Accept": "application/vnd.github.v3+json"
            }
          });
          if (userRes.status !== 200) {
            console.error("[Deployment] Auth FAILED (Status:", userRes.status, ")");
            console.error("[Deployment] Auth Error Details:", userRes.json || userRes.text);
            throw new Error(`AUTH_FAILED_${userRes.status}`);
          }
          const { login } = userRes.json;
          console.log(`[Deployment] Authenticated as: ${login}`);
          console.log(`[Deployment] Verifying repository: ${login}/${repoName}`);
          let needsCreation = false;
          try {
            const repoCheckRes = await req({
              url: `https://api.github.com/repos/${login}/${repoName}`,
              method: "GET",
              headers: {
                "Authorization": `token ${activeToken}`,
                "Accept": "application/vnd.github.v3+json"
              }
            });
            if (repoCheckRes.status === 404) needsCreation = true;
            else if (repoCheckRes.status !== 200) {
              console.warn("[Deployment] Repo check warning (Status:", repoCheckRes.status, ")");
            }
          } catch (e) {
            if (e.message?.includes("404") || e.status === 404) {
              console.log("[Deployment] 404 Signal Caught (Repo Missing)");
              needsCreation = true;
            } else {
              console.error("[Deployment] Repo check CRASH:", e);
              throw e;
            }
          }
          if (needsCreation) {
            console.log(`[Deployment] Repo missing. Auto-provisioning: ${repoName}...`);
            addLog("PROVISIONING_REPO");
            const createRepoRes = await req({
              url: "https://api.github.com/user/repos",
              method: "POST",
              headers: {
                "Authorization": `token ${activeToken}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                name: repoName,
                description: "Cinematic Dossier OS // Generated by Ultimate Resume Builder.",
                private: false,
                has_issues: true,
                has_projects: false,
                has_wiki: false
              })
            });
            if (createRepoRes.status !== 201) {
              console.error("[Deployment] Repo creation FAILED:", createRepoRes.json);
              throw new Error("PROVISIONING_FAILED");
            }
            console.log("[Deployment] Repository Created successfully.");
            addLog("PROVISION_SUCCESS");
          }
          const authedUrl = `https://${activeToken}@github.com/${login}/${repoName}.git`;
          const tag = `v${pushVersion}`;
          const cmd = `
                git init && 
                git checkout -b main || git checkout main &&
                git remote add origin ${authedUrl} || git remote set-url origin ${authedUrl} && 
                git add -A && 
                git commit -m "Dossier Update [v${pushVersion}]" && 
                git tag v${pushVersion} &&
                git push -u origin main --force &&
                git push origin --tags
            `;
          console.log("[Deployment] Executing Git Push...");
          setStatus("GITOPS_PUSHING...");
          addLog("GIT_START");
          const child = exec(cmd, { cwd: componentPath });
          child.stdout.on("data", (d) => console.log("[Deployment] [STDOUT]", d));
          child.stderr.on("data", (d) => console.warn("[Deployment] [STDERR]", d));
          child.on("close", async (code) => {
            if (code === 0) {
              console.log("[Deployment] Git Push SUCCESS");
              addLog("GIT_SUCCESS");
              try {
                const tag2 = `v${pushVersion}`;
                console.log(`[Deployment] Syncing Release Assets for ${tag2}...`);
                const checkRes = await req({
                  url: `https://api.github.com/repos/${login}/${repoName}/releases/tags/${tag2}?t=${Date.now()}`,
                  headers: {
                    "Authorization": `token ${activeToken}`,
                    "Accept": "application/vnd.github.v3+json",
                    "Cache-Control": "no-cache"
                  },
                  throw: false
                });
                let release;
                if (checkRes.status === 200) {
                  release = checkRes.json;
                  console.log("[Deployment] Existing release found. Updating assets...");
                } else {
                  console.log("[Deployment] Creating new release...");
                  const createRes = await req({
                    url: `https://api.github.com/repos/${login}/${repoName}/releases`,
                    method: "POST",
                    headers: {
                      "Authorization": `token ${activeToken}`,
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      tag_name: tag2,
                      name: `Resume Dossier ${tag2}`,
                      body: "Automated Resilient Release (Native Grab).",
                      draft: false
                    }),
                    throw: false
                  });
                  release = createRes.json;
                }
                if (!release || !release.upload_url) throw new Error("Could not find release target.");
                const uploadUrl = release.upload_url.split("{")[0];
                if (release.assets && release.assets.length > 0) {
                  const targets = ["main.js", "manifest.json", "styles.css"];
                  for (const asset of release.assets) {
                    if (targets.includes(asset.name)) {
                      console.log(`[Deployment] Purging stale asset: ${asset.name}`);
                      try {
                        await req({
                          url: `https://api.github.com/repos/${login}/${repoName}/releases/assets/${asset.id}`,
                          method: "DELETE",
                          headers: { "Authorization": `token ${activeToken}` }
                        });
                      } catch (e) {
                      }
                    }
                  }
                }
                const assets = [
                  { name: "main.js", path: path.join(componentPath, "main.js") },
                  { name: "manifest.json", path: path.join(componentPath, "manifest.json") }
                ];
                for (const asset of assets) {
                  if (fs.existsSync(asset.path)) {
                    console.log(`[Deployment] Uploading binary asset: ${asset.name}`);
                    addLog(`UPLOAD_${asset.name.toUpperCase()}`);
                    const fileData = fs.readFileSync(asset.path);
                    const uploadRes = await req({
                      url: `${uploadUrl}?name=${asset.name}`,
                      method: "POST",
                      headers: {
                        "Authorization": `token ${activeToken}`,
                        "Content-Type": "application/octet-stream"
                      },
                      body: new Uint8Array(fileData).buffer
                    });
                    if (uploadRes.status === 201) {
                      console.log(`[Deployment] Asset ${asset.name} uploaded successfully.`);
                    }
                  }
                }
                addLog("RELEASE_READY");
              } catch (e) {
                console.error("[Deployment] Release Asset Sync FAILED:", e);
                addLog("RELEASE_SYNC_FAILED");
              }
              setStatus("IDLE");
              setIsPublishing(false);
              addLog("PUBLISH_COMPLETE");
            } else {
              console.error("[Deployment] Git FAILED (Exit Code:", code, ")");
              setStatus("GIT_ERROR");
              setIsPublishing(false);
              addLog("GIT_FAILURE");
            }
          });
        } catch (e) {
          console.error("[Deployment] Public sync EXCEPTION:", e);
          setStatus("SYNC_ERROR");
          setIsPublishing(false);
          addLog("PUBLISH_CRASH");
        }
      };
      return { handleLocalDeploy, handlePublish };
    }
    var _exports = { getDeploymentLogic: getDeploymentLogic2 };
    if (typeof module2 !== "undefined" && module2.exports) module2.exports = _exports;
    return _exports;
  }
});

// src/core/PlatformAdapter.js
var require_PlatformAdapter = __commonJS({
  "src/core/PlatformAdapter.js"(exports2, module2) {
    var createAdapter2 = (dc, modules) => {
      const isDataCore = !!dc;
      const isNative = !!window.app && !isDataCore;
      const isWeb = !window.app && !isDataCore;
      const TOKENS2 = modules?.TOKENS || {};
      const requireAsset = async (path) => {
        if (isDataCore) return await dc.require(path);
        if (isNative) {
          const fs = window.require("fs");
          const electron = window.require("electron");
          return null;
        }
        return null;
      };
      const getVaultData = async (filePath) => {
        if (isDataCore) return await dc.app.vault.adapter.read(filePath);
        if (isNative) return await window.app.vault.adapter.read(filePath);
        if (isWeb) {
          const res = await fetch(`/api/vault?path=${encodeURIComponent(filePath)}`);
          return await res.json();
        }
      };
      const deploy = async (target, payload) => {
        console.log(`[Adapter] [DEPLOY] Target: ${target}`);
      };
      return {
        isDataCore,
        isNative,
        isWeb,
        TOKENS: TOKENS2,
        requireAsset,
        getVaultData,
        deploy
      };
    };
    var _exports = { createAdapter: createAdapter2 };
    if (typeof module2 !== "undefined" && module2.exports) module2.exports = _exports;
    return _exports;
  }
});

// src/core/utils/loadScript.js
var require_loadScript = __commonJS({
  "src/core/utils/loadScript.js"(exports2, module2) {
    async function loadScript2(dc, src, options = {}) {
      const { globalName = null } = options;
      if (globalName && window[globalName]) return Promise.resolve(window[globalName]);
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => {
          if (globalName) resolve(window[globalName]);
          else resolve(script);
        };
        script.onerror = (e) => {
          console.error(`[URB_LoadScript] Error loading ${src}:`, e);
          reject(new Error(`Failed to load script: ${src}`));
        };
        document.head.appendChild(script);
      });
    }
    var _exports = { loadScript: loadScript2 };
    if (typeof module2 !== "undefined" && module2.exports) module2.exports = _exports;
    return _exports;
  }
});

// src/App.jsx
var require_App = __commonJS({
  "src/App.jsx"(exports2, module2) {
    function App2({ dc, modules, folderPath, onExport }) {
      const { useState: useState2, useEffect: useEffect2, useRef: useRef2, useCallback: useCallback2, useMemo: useMemo2 } = dc;
      const { TOKENS: TOKENS2, GLOBAL_CSS: GLOBAL_CSS2, parseResumeMarkdown: parseResumeMarkdown2, NodeGraph: NodeGraph2, GeometricParticles: GeometricParticles2, CinematicViewer: CinematicViewer2, FloatingScene: FloatingScene2, PrintLayout: PrintLayout2, DeployBridge: DeployBridge2, MCPBridge: MCPBridge2 } = modules;
      const adapter = useMemo2(() => modules.createAdapter(dc, modules), [dc, modules]);
      const containerRef = useRef2(null);
      const nodeGraphControlRef = useRef2(null);
      const [resumeData, setResumeData] = useState2(null);
      const [focusedNode, setFocusedNode] = useState2(null);
      const [activeIndex, setActiveIndex] = useState2(0);
      const [modulesReady, setModulesReady] = useState2(false);
      const modulesRef = useRef2({ THREE: null, gsap: null });
      const hudTimeoutRef = useRef2(null);
      const [isHudVisible, setIsHudVisible] = useState2(true);
      const [exportMode, setExportMode] = useState2(false);
      const [isZoomed, setIsZoomed] = useState2(false);
      const [showSettings, setShowSettings] = useState2(false);
      const [showSystemMenu, setShowSystemMenu] = useState2(false);
      const [showSectorsMenu, setShowSectorsMenu] = useState2(false);
      const [activeNode, setActiveNode] = useState2(null);
      const [isAutoPlay, setIsAutoPlay] = useState2(false);
      const [globalScroll, setGlobalScroll] = useState2(0);
      const [printTheme, setPrintTheme] = useState2("dark");
      useEffect2(() => {
        if (exportMode && resumeData?.about?.name) {
          const oldTitle = document.title;
          const themeLabel = printTheme.toUpperCase();
          const timestamp = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10).replace(/-/g, "_");
          const userName = resumeData.about.name.toUpperCase().replace(/\s+/g, "_");
          document.title = `CLASSIFIED_DOSSIER_${userName}_[${themeLabel}]_${timestamp}`;
          console.log(`[URB_HOIST] Filename Synced: ${document.title}`);
          return () => {
            document.title = oldTitle;
          };
        }
      }, [exportMode, printTheme, resumeData]);
      const [status, setStatus] = useState2("IDLE");
      const [activeTab, setActiveTab] = useState2("IDENTITY");
      const [isDeploying, setIsDeploying] = useState2(false);
      const [isPublishing, setIsPublishing] = useState2(false);
      const [logs, setLogs] = useState2([]);
      const [repoName, setRepoName] = useState2(localStorage.getItem("urb_repo_name") || "ultimate-resume-builder");
      const [ghToken, setGhToken] = useState2("");
      const deploymentLogic = useMemo2(() => modules.getDeploymentLogic(dc), [modules, dc]);
      const addLog = useCallback2((m) => setLogs((p) => [m, ...p].slice(0, 5)), []);
      const updateToken = async (val) => {
        setGhToken(val);
        const storage = dc.app.secretStorage || window.app?.secretStorage;
        if (storage && typeof storage.setSecret === "function") await storage.setSecret("urb-github-token", val);
      };
      const handleDeploy = useCallback2(async () => {
        console.log("%c[App] COMMAND: COMPILE_LOCAL", "background: #f59e0b; color: #000; font-weight: bold; padding: 2px 5px; border-radius: 2px;");
        if (!deploymentLogic) {
          console.error("[App] deploymentLogic MISSING");
          return;
        }
        await deploymentLogic.handleLocalDeploy({
          addLog,
          setStatus,
          setIsDeploying,
          folderPath
        });
      }, [deploymentLogic, addLog, setStatus, folderPath]);
      const handlePublish = useCallback2(async () => {
        console.log("%c[App] COMMAND: PUBLISH_WEB", "background: #10b981; color: #fff; font-weight: bold; padding: 2px 5px; border-radius: 2px;");
        await deploymentLogic.handlePublish({
          repoName,
          ghToken,
          addLog,
          setStatus,
          setIsPublishing,
          folderPath
        });
      }, [deploymentLogic, repoName, ghToken, addLog, setStatus, folderPath]);
      const showHud = useCallback2(() => {
        if (hudTimeoutRef.current) clearTimeout(hudTimeoutRef.current);
        setIsHudVisible(true);
      }, []);
      const hideHud = useCallback2((force = false) => {
        if (hudTimeoutRef.current) clearTimeout(hudTimeoutRef.current);
        if (showSettings && !force) return;
        hudTimeoutRef.current = setTimeout(() => {
          setIsHudVisible(false);
        }, 600);
      }, [showSettings]);
      useEffect2(() => {
        return () => {
          if (hudTimeoutRef.current) clearTimeout(hudTimeoutRef.current);
        };
      }, []);
      const handleNodeFocus = useCallback2((node) => {
        if (!node) return;
        setFocusedNode(node);
        if (resumeData?.nodes) {
          const idx = resumeData.nodes.findIndex((n) => n.id === node.id);
          if (idx !== -1) setActiveIndex(idx);
        }
        setActiveNode(node);
      }, [resumeData]);
      const handleWheel = useCallback2((e) => {
        if (!resumeData?.nodes || exportMode || showSettings) return;
        if (e.target.closest(".cinematic-frame")) return;
        e.preventDefault();
        if (nodeGraphControlRef.current) {
          const clampedDelta = Math.max(-400, Math.min(400, e.deltaY));
          nodeGraphControlRef.current.spin(clampedDelta);
          if (isAutoPlay) setIsAutoPlay(false);
        }
      }, [resumeData, isAutoPlay, exportMode, showSettings]);
      useEffect2(() => {
        let active = true;
        async function init() {
          try {
            const T = await modules.loadScript(dc, "https://unpkg.com/three@0.149.0/build/three.min.js", { globalName: "THREE" });
            const G = await modules.loadScript(dc, "https://unpkg.com/gsap@3.12.5/dist/gsap.min.js", { globalName: "gsap" });
            if (active) {
              modulesRef.current.THREE = T;
              modulesRef.current.gsap = G;
              setModulesReady(true);
            }
          } catch (e) {
            console.error("[URB] Dependency load failed:", e);
          }
          const storage = dc.app.secretStorage || window.app?.secretStorage;
          let token = "";
          let source = "NONE";
          if (storage && typeof storage.getSecret === "function") {
            const cached = await storage.getSecret("urb-github-token") || await storage.getSecret("dc-github-token");
            if (cached) {
              token = cached.trim();
              source = "MANUAL_UI";
            }
          }
          if (!token) {
            try {
              const { execSync } = require("child_process");
              const cmd = `security find-generic-password -s "gh:github.com" -w || security find-generic-password -s "github.com" -w || security find-generic-password -s "GitHub" -w`;
              let raw = execSync(cmd, { encoding: "utf8" }).replace(/[\r\n]/g, "").trim();
              if (raw) {
                if (raw.startsWith("go-keyring-base64:")) {
                  try {
                    const b64 = raw.split(":")[1].trim();
                    if (typeof Buffer !== "undefined") {
                      token = Buffer.from(b64, "base64").toString("utf8").trim();
                    } else {
                      token = decodeURIComponent(escape(window.atob(b64))).trim();
                    }
                  } catch (e) {
                    console.error("[App] Keychain decode failed:", e);
                  }
                } else {
                  token = raw;
                }
                if (token) source = "NATIVE_KEYCHAIN";
              }
            } catch (e) {
            }
          }
          if (active && token) {
            console.log(`%c[App] AUTH_READY [Source: ${source}]: prefix=${token.slice(0, 4)}, len=${token.length}`, "color: #10b981; font-weight: bold;");
            setGhToken(token);
          }
        }
        init();
        return () => {
          active = false;
        };
      }, []);
      useEffect2(() => {
        async function loadData() {
          try {
            const vault = dc.app.vault;
            const path = `_RESOURCES/DATACORE/142_UltimateResumeBuilder/_resources/data/resume.md`;
            let text = "";
            if (await vault.adapter.exists(path)) text = await vault.adapter.read(path);
            if (text) {
              const data = parseResumeMarkdown2(text);
              setResumeData(data);
              if (data.nodes?.length > 0) {
                setFocusedNode(data.nodes[0]);
                setActiveIndex(0);
                if (data.groups?.[0]) setActiveTab(data.groups[0].name);
              }
            }
          } catch (e) {
            console.error("[URB] Data Load Error:", e);
          }
        }
        loadData();
      }, [folderPath]);
      useEffect2(() => {
        const el = containerRef.current;
        if (el) el.addEventListener("wheel", handleWheel, { passive: false });
        return () => el?.removeEventListener("wheel", handleWheel);
      }, [handleWheel]);
      useEffect2(() => {
        const settleTimeout = setTimeout(() => {
          console.log("[URB] Initiating FullTab Reparenting...");
          if (!containerRef.current) return;
          const container = containerRef.current;
          let leaf = container.closest(".workspace-leaf") || document.querySelector(".workspace-leaf.mod-active");
          if (!leaf) {
            console.warn("[URB] No active leaf found for reparenting.");
            return;
          }
          const wrapper = leaf.querySelector(".view-content");
          if (!wrapper) {
            console.warn("[URB] No .view-content found in leaf.");
            return;
          }
          if (window.getComputedStyle(wrapper).position === "static") wrapper.style.position = "relative";
          wrapper.style.overflow = "hidden";
          wrapper.appendChild(container);
          Object.assign(container.style, { position: "absolute", inset: "0px", zIndex: "9998", display: "flex" });
          console.log("[URB] FullTab Reparenting SUCCESS. Managed by BETO.SKILL.");
        }, 800);
        return () => clearTimeout(settleTimeout);
      }, []);
      const handleExtraction = async () => {
        console.log(`[URB_HOIST] Initiating Manifest (Theme: ${printTheme})...`);
        const printArea = document.querySelector(".urb-print-area");
        if (!printArea) {
          console.error("[URB_HOIST] CRITICAL_FAILURE: Manifest target not found.");
          return;
        }
        const originalParent = printArea.parentElement;
        const originalNextSibling = printArea.nextSibling;
        try {
          console.log("[URB_HOIST] Reparenting Manifest to Document Root...");
          document.body.appendChild(printArea);
          document.body.classList.add("urb-is-printing");
          document.body.classList.add(`urb-theme-${printTheme}`);
          console.log("[URB_HOIST] Handover to Browser Manifest Engine...");
          window.print();
          setTimeout(() => {
            console.log("[URB_HOIST] Restoring Manifest to Orbital Position...");
            if (originalNextSibling) originalParent.insertBefore(printArea, originalNextSibling);
            else originalParent.appendChild(printArea);
            document.body.classList.remove("urb-is-printing");
            document.body.classList.remove(`urb-theme-dark`);
            document.body.classList.remove(`urb-theme-light`);
            setStatus("IDLE");
          }, 600);
        } catch (err) {
          console.error("[URB_HOIST] Extraction Crash:", err);
          document.body.classList.remove("urb-is-printing");
          setStatus("ERROR_HOIST");
        }
      };
      if (!resumeData) return /* @__PURE__ */ React.createElement("div", { style: { color: "white", padding: 20 } }, "Initializing Elite Resume Interface...");
      return /* @__PURE__ */ React.createElement("div", { ref: containerRef, className: `urb-root ${exportMode ? "urb-print-mode" : ""}`, style: { height: "100vh", display: "flex", flexDirection: "column", position: "relative", background: "#050508" } }, /* @__PURE__ */ React.createElement("style", null, GLOBAL_CSS2 + `
                    @media print {
                        @page { margin: 1cm; size: auto; }
                        
                        /* \u{1F6F0}\uFE0F STANDARD RESTORATION: Hide HUD, Show Manifest */
                        .urb-hud-overlay, .urb-hover-sensor, .cinematic-immersion-stage, .urb-viewport { display: none !important; }
                        
                        .urb-root { height: auto !important; min-height: 100vh !important; background: #050508 !important; visibility: visible !important; position: static !important; }
                        
                        .urb-export-modal { 
                            position: absolute !important; inset: 0 !important; 
                            display: flex !important; visibility: visible !important;
                            background: #050508 !important; z-index: 99999 !important;
                        }
                        
                        .cinematic-frame { width: 100% !important; height: auto !important; margin: 0 !important; border: none !important; box-shadow: none !important; background: #050508 !important; }
                        .urb-export-glass { background: #050508 !important; backdrop-filter: none !important; border: none !important; }
                        .urb-export-header { display: none !important; }
                        .urb-preview-container { height: auto !important; overflow: visible !important; }
                        .urb-preview-content { transform: none !important; width: 100% !important; visibility: visible !important; }
                        
                        body, html { background: #050508 !important; margin: 0 !important; padding: 0 !important; overflow: visible !important; }
                    }
            `), /* @__PURE__ */ React.createElement("div", { className: "urb-hover-sensor", onMouseEnter: showHud }), /* @__PURE__ */ React.createElement("div", { className: "urb-viewport fade-in", style: {
        height: "100%",
        position: "relative",
        overflow: "hidden",
        background: "#050508"
      } }, /* @__PURE__ */ React.createElement("div", { style: {
        opacity: focusedNode?.panelType === "TIMELINE" ? 0.2 : 1,
        transition: "opacity 1s ease"
      } }, /* @__PURE__ */ React.createElement(GeometricParticles2, { dc, modules, TOKENS: TOKENS2 })), /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        inset: 0,
        zIndex: 100,
        pointerEvents: "none",
        opacity: focusedNode?.panelType === "TIMELINE" ? 0.15 : 1,
        transition: "opacity 1s ease"
      } }, /* @__PURE__ */ React.createElement(
        NodeGraph2,
        {
          data: resumeData,
          dc,
          modules,
          focusedNode,
          onNodeFocus: handleNodeFocus,
          onScrollChange: setGlobalScroll,
          TOKENS: TOKENS2,
          controlRef: nodeGraphControlRef
        }
      )), /* @__PURE__ */ React.createElement("div", { className: "cinematic-immersion-stage", style: { position: "absolute", inset: 0, zIndex: 200, pointerEvents: "none" } }, modulesReady && /* @__PURE__ */ React.createElement(
        FloatingScene2,
        {
          node: focusedNode,
          scroll: globalScroll,
          activeTab,
          isAutoPlay,
          dc,
          modules: { ...modules, ...modulesRef.current },
          TOKENS: TOKENS2
        }
      ))), exportMode && /* @__PURE__ */ React.createElement("div", { className: "urb-export-modal fade-in", style: { position: "absolute", inset: 0, zIndex: 20002, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.85)", backdropFilter: "none" } }, /* @__PURE__ */ React.createElement("div", { className: "cinematic-frame fade-in", style: { width: "90%", height: "85vh", maxWidth: "1000px", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { className: "urb-export-glass", style: {
        position: "relative",
        width: "100%",
        height: "100%",
        background: TOKENS2.glassBg,
        borderRadius: "8px",
        overflow: "hidden",
        border: `1px solid ${TOKENS2.border}`,
        boxShadow: "0 60px 120px rgba(0,0,0,0.95)",
        backdropFilter: "none",
        display: "flex",
        flexDirection: "column"
      } }, /* @__PURE__ */ React.createElement("div", { className: "urb-export-header", style: {
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid rgba(255,255,255,0.08)`,
        background: "rgba(255,255,255,0.02)"
      } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: TOKENS2.textDim, fontFamily: TOKENS2.fontMono, letterSpacing: 2 } }, "MANIFEST://CLASSIFIED_DOSSIER_", resumeData?.about?.name?.toUpperCase() || "BETO", "_2026.pdf")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("button", { className: `urb-act-btn ${printTheme === "dark" ? "active" : ""}`, onClick: () => setPrintTheme("dark"), style: { fontSize: 7, padding: "4px 8px" } }, "DARK_DOSSIER"), /* @__PURE__ */ React.createElement("button", { className: `urb-act-btn ${printTheme === "light" ? "active" : ""}`, onClick: () => setPrintTheme("light"), style: { fontSize: 7, padding: "4px 8px" } }, "LIGHT_MANIFEST")), /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 20, background: "rgba(255,255,255,0.1)", margin: "0 5px" } }), /* @__PURE__ */ React.createElement("button", { className: "urb-act-btn primary", onClick: handleExtraction }, "MANIFEST_PHYSICAL"), /* @__PURE__ */ React.createElement("button", { className: "urb-act-btn", onClick: () => setExportMode(false) }, "CLOSE")), /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "urb-preview-container",
          onMouseEnter: () => setIsZoomed(true),
          onMouseLeave: () => setIsZoomed(false),
          style: {
            overflowY: isZoomed ? "auto" : "hidden",
            cursor: isZoomed ? "crosshair" : "zoom-in"
          }
        },
        /* @__PURE__ */ React.createElement("div", { className: `urb-preview-content ${isZoomed ? "zoomed" : "scaled"}`, style: {
          transform: isZoomed ? "scale(1)" : "scale(0.32)"
        } }, /* @__PURE__ */ React.createElement("div", { className: "urb-print-area" }, /* @__PURE__ */ React.createElement(PrintLayout2, { data: resumeData, TOKENS: TOKENS2, dc })))
      )))), resumeData && /* @__PURE__ */ React.createElement(
        "div",
        {
          id: "urb-hud-stack",
          onMouseEnter: showHud,
          onMouseLeave: () => hideHud(),
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 2e4,
            display: "flex",
            flexDirection: "column",
            padding: "30px 40px 60px 40px",
            background: "linear-gradient(to bottom, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.4) 40%, transparent 100%)",
            backdropFilter: "blur(25px) saturate(180%)",
            borderBottom: `1px solid ${TOKENS2.border}`,
            // 🛰️ INTERACTIVITY STABILIZATION
            opacity: isHudVisible ? 1 : 0,
            pointerEvents: isHudVisible ? "auto" : "none",
            transform: `translateY(${isHudVisible ? "0" : "-10px"})`,
            transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 24, fontWeight: 900, letterSpacing: -1, color: "white", fontFamily: TOKENS2.font, display: "flex", alignItems: "baseline", gap: 10 } }, "BETO.PORTFOLIO ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: 9, opacity: 0.4, color: TOKENS2.accent, fontWeight: 900, letterSpacing: 3 } }, "SYSTEM_CORE")), /* @__PURE__ */ React.createElement("div", { style: {
          fontSize: 9,
          color: TOKENS2.accent,
          fontWeight: 900,
          letterSpacing: 2,
          border: `1px solid ${TOKENS2.accent}33`,
          padding: "4px 10px",
          borderRadius: 2,
          background: "rgba(168, 85, 247, 0.05)",
          display: "inline-block",
          alignSelf: "flex-start"
        } }, "PROTOCOL_DOSSIER // USER: ", String(resumeData?.about?.name || "BETO").toUpperCase())), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "center" } }, status !== "IDLE" && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: TOKENS2.accent, marginRight: 15, fontFamily: TOKENS2.fontMono, opacity: 0.8, animation: "urb-pulse 2s infinite" } }, "[SYSTEM_STATUS: ", status, "]"), /* @__PURE__ */ React.createElement("button", { className: "urb-act-btn", onClick: () => setExportMode(true), style: { padding: "10px 18px" } }, "PDF_PROTO"), /* @__PURE__ */ React.createElement(
          "button",
          {
            className: `urb-act-btn ${isDeploying ? "active" : ""}`,
            onClick: handleDeploy,
            disabled: isDeploying || isPublishing,
            style: { padding: "10px 18px" },
            title: "Compile & Deploy to Obsidian"
          },
          /* @__PURE__ */ React.createElement(dc.Icon, { icon: isDeploying ? "loader" : "zap", style: { width: 12, marginRight: isDeploying ? 0 : 6 } }),
          !isDeploying && "COMPILE"
        ), /* @__PURE__ */ React.createElement(
          "button",
          {
            className: `urb-act-btn ${isPublishing ? "active" : ""}`,
            onClick: handlePublish,
            disabled: isPublishing || isDeploying,
            style: { border: `1px solid ${TOKENS2.accent}44`, padding: "10px 18px" },
            title: "One-Click Publish to GitHub"
          },
          /* @__PURE__ */ React.createElement(dc.Icon, { icon: isPublishing ? "loader" : "github", style: { width: 12, marginRight: isPublishing ? 0 : 6 } }),
          !isPublishing && "PUBLISH"
        ), /* @__PURE__ */ React.createElement(
          "button",
          {
            className: `urb-act-btn ${showSettings ? "active" : ""}`,
            onClick: () => {
              console.log("%c[App] COMMAND: SETTINGS_TOGGLE", "background: #a855f7; color: #fff; font-weight: bold; padding: 2px 5px; border-radius: 2px;");
              setShowSettings(!showSettings);
            },
            style: { padding: "10px 14px" }
          },
          /* @__PURE__ */ React.createElement(dc.Icon, { icon: "settings", style: { width: 14 } })
        ), /* @__PURE__ */ React.createElement(
          "button",
          {
            className: "urb-act-btn",
            onClick: () => {
              console.log("%c[App] COMMAND: EXIT_CLEANUP", "background: #ef4444; color: #fff; font-weight: bold; padding: 2px 5px; border-radius: 2px;");
              dc.app.workspace.activeLeaf?.detach();
            },
            style: { padding: "10px 18px" }
          },
          "EXIT"
        ))),
        /* @__PURE__ */ React.createElement(MCPBridge2, { folderPath, dc, modules, onReload: () => dc.app.workspace.activeLeaf?.rebuildView?.() })
      ), showSettings && resumeData && /* @__PURE__ */ React.createElement("div", { className: "urb-settings-wrapper" }, /* @__PURE__ */ React.createElement("div", { className: "urb-settings-panel fade-in" }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 900, color: TOKENS2.accent, letterSpacing: 2, marginBottom: 10 } }, "[ SYSTEM_CONFIGURATION ]"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 15 } }, /* @__PURE__ */ React.createElement("input", { className: "urb-input", placeholder: "DEPLOY_REPO_ID", value: repoName, onChange: (e) => setRepoName(e.target.value) }), /* @__PURE__ */ React.createElement("input", { className: "urb-input", type: "password", placeholder: "GH_AUTH_TOKEN_ACTIVE", value: ghToken, onChange: (e) => updateToken(e.target.value) }), /* @__PURE__ */ React.createElement("button", { className: "urb-act-btn", style: {
        padding: "10px",
        background: "rgba(16, 185, 129, 0.1)",
        border: "1px solid #10b98144",
        color: "#10b981",
        fontSize: 9,
        fontWeight: 900,
        letterSpacing: 1
      }, onClick: () => {
        const url = `https://github.com/beto-group/${repoName}`;
        window.open(url, "_blank");
      } }, /* @__PURE__ */ React.createElement(dc.Icon, { icon: "github", style: { width: 10, marginRight: 6 } }), "VISIT_REPOSITORY"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10 } }, /* @__PURE__ */ React.createElement(
        DeployBridge2,
        {
          TOKENS: TOKENS2,
          isDeploying,
          isPublishing,
          handleDeploy,
          handlePublish,
          logs,
          status
        }
      ))))));
    }
    var _exports = { App: App2 };
    if (typeof module2 !== "undefined" && module2.exports) module2.exports = _exports;
    return _exports;
  }
});

// src/components/NodeGraph.jsx
var require_NodeGraph = __commonJS({
  "src/components/NodeGraph.jsx"(exports2, module2) {
    function NodeGraph2({ data, dc, modules, focusedNode, onNodeFocus, onScrollChange, TOKENS: TOKENS2, controlRef }) {
      const { useEffect: useEffect2, useRef: useRef2, useState: useState2, useMemo: useMemo2 } = dc;
      const { THREE, gsap } = modules;
      const canvasRef = useRef2(null);
      const containerRef = useRef2(null);
      const [dimensions, setDimensions] = useState2({ width: 0, height: 0 });
      const rotationRef = useRef2(0);
      const targetRotationRef = useRef2(0);
      const corePulseRef = useRef2(0);
      const lastFocusIdRef = useRef2(null);
      const locationRef = useRef2("BETO_CORE");
      const threeRefs = useRef2({ scene: null, camera: null, renderer: null, instancedHubs: null, orbits: [] });
      useEffect2(() => {
        if (!THREE || !containerRef.current) return;
        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3e3);
        camera.position.z = 800;
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.insertBefore(renderer.domElement, container.firstChild);
        renderer.domElement.style.position = "absolute";
        renderer.domElement.style.inset = "0";
        renderer.domElement.style.zIndex = "1";
        threeRefs.current = { scene, camera, renderer, instancedHubs: null, orbits: [] };
        const animate = () => {
          threeRefs.current.animationId = requestAnimationFrame(animate);
          if (threeRefs.current.instancedHubs) {
          }
          renderer.render(scene, camera);
        };
        animate();
        return () => {
          cancelAnimationFrame(threeRefs.current.animationId);
          renderer.dispose();
          if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
        };
      }, [THREE]);
      const items = useMemo2(() => {
        const { width, height } = dimensions;
        if (!height || !width) return { yearSegments: [], monthHubs: [], itemHubs: [], radii: {} };
        const s = Math.max(0.7, Math.min(1.3, height / 900)) * 0.9;
        const R_YEAR = 90 * s, R_MONTH = 220 * s, R_ITEM = 430 * s;
        const ITEM_GAP = 0.35, GROUP_GAP = 0.2, YEAR_GAP = 0.69;
        let curAng = 0;
        const ySegs = [], mHubs = [], iHubs = [];
        const virtualYear = "ARCHIVE";
        const startAng = curAng;
        data?.groups?.forEach((g) => {
          g.items.forEach((it, idx) => {
            const ang = curAng;
            iHubs.push({ ...it, angle: ang, year: virtualYear, parentId: `m-${virtualYear}-${g.name}` });
            curAng += ITEM_GAP;
          });
          curAng += GROUP_GAP;
          mHubs.push({ id: `m-${virtualYear}-${g.name}`, angle: iHubs[iHubs.length - 1]?.angle || curAng, name: g.name.toUpperCase(), year: virtualYear });
        });
        ySegs.push({ year: virtualYear, start: startAng, end: curAng - YEAR_GAP });
        if (threeRefs.current.scene) {
          const { scene } = threeRefs.current;
          if (threeRefs.current.instancedHubs) scene.remove(threeRefs.current.instancedHubs);
          threeRefs.current.orbits.forEach((o) => scene.remove(o));
          threeRefs.current.orbits = [];
          const createOrbit = (r) => {
            const geometry = new THREE.BufferGeometry();
            const points = [];
            for (let i = 0; i <= 64; i++) {
              const a = i / 64 * Math.PI * 2;
              points.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, 0));
            }
            geometry.setFromPoints(points);
            const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 16777215, transparent: true, opacity: 0.1 }));
            scene.add(line);
            threeRefs.current.orbits.push(line);
          };
          createOrbit(R_MONTH);
          createOrbit(R_ITEM);
          const hubGeo = new THREE.CircleGeometry(5, 12);
          const hubMat = new THREE.MeshBasicMaterial({ color: 16777215, transparent: true, opacity: 0.5 });
          const instancedHubs = new THREE.InstancedMesh(hubGeo, hubMat, iHubs.length);
          scene.add(instancedHubs);
          threeRefs.current.instancedHubs = instancedHubs;
        }
        return { yearSegments: ySegs, monthHubs: mHubs, itemHubs: iHubs, radii: { R_YEAR, R_MONTH, R_ITEM }, scaleFactor: s };
      }, [data, dimensions]);
      useEffect2(() => {
        if (controlRef) {
          controlRef.current = {
            spin: (delta) => {
              let nextRot = targetRotationRef.current - delta * 6e-4;
              const totalItems = items.itemHubs || [];
              if (totalItems.length > 0) {
                const minAng = 0;
                const maxAng = totalItems[totalItems.length - 1].angle;
                nextRot = Math.max(minAng, Math.min(maxAng, nextRot));
              }
              targetRotationRef.current = nextRot;
              corePulseRef.current = Math.min(1, corePulseRef.current + 0.1);
            }
          };
        }
      }, [controlRef, items]);
      useEffect2(() => {
        if (focusedNode && focusedNode.angle !== void 0) {
          targetRotationRef.current = focusedNode.angle;
        }
      }, [focusedNode]);
      useEffect2(() => {
        if (!focusedNode) return;
        corePulseRef.current = 1.8;
        targetRotationRef.current += Math.random() > 0.5 ? 0.05 : -0.05;
      }, [focusedNode?.id]);
      useEffect2(() => {
        const container = containerRef.current;
        if (!container) return;
        const obs = new ResizeObserver((entries) => {
          if (!entries[0]) return;
          const { width, height } = entries[0].contentRect;
          setDimensions({ width, height });
          if (threeRefs.current.renderer) {
            threeRefs.current.renderer.setSize(width, height);
            threeRefs.current.camera.aspect = width / height;
            threeRefs.current.camera.updateProjectionMatrix();
          }
        });
        obs.observe(container);
        return () => {
          obs.disconnect();
        };
      }, []);
      useEffect2(() => {
        const canvas = canvasRef.current;
        if (!canvas || !dimensions.width) return;
        const ctx = canvas.getContext("2d"), { width, height } = dimensions;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        const render = () => {
          const time = Date.now() * 6e-4;
          const { yearSegments, monthHubs, itemHubs, radii, scaleFactor: s } = items;
          const { R_YEAR, R_MONTH, R_ITEM } = radii || {};
          rotationRef.current += (targetRotationRef.current - rotationRef.current) * 0.1;
          const scroll = rotationRef.current;
          corePulseRef.current *= 0.95;
          if (typeof onScrollChange === "function") onScrollChange(scroll);
          if (threeRefs.current.instancedHubs) {
            const matrix = new THREE.Matrix4();
            const pivotX = -width / 2 - 150 * s;
            const pivotY = height / 2 - height * 0.12;
            itemHubs.forEach((ih, i) => {
              const ang = (ih.angle - scroll) % 6.28;
              const d = Math.abs(ang > Math.PI ? ang - 6.28 : ang < -Math.PI ? ang + 6.28 : ang);
              const op = Math.pow(Math.max(0, 1 - d * 2.5), 2);
              const isF = focusedNode?.id === ih.id;
              matrix.makeTranslation(Math.cos(ang) * R_ITEM + pivotX, Math.sin(ang) * R_ITEM + pivotY, 0);
              threeRefs.current.instancedHubs.setMatrixAt(i, matrix);
              threeRefs.current.instancedHubs.setColorAt(i, new THREE.Color(isF ? TOKENS2.accent : 16777215));
            });
            threeRefs.current.instancedHubs.instanceMatrix.needsUpdate = true;
            if (threeRefs.current.instancedHubs.instanceColor) threeRefs.current.instancedHubs.instanceColor.needsUpdate = true;
          }
          const getPos = (ang) => {
            let d = (ang - scroll) % 6.28;
            if (d > 3.14) d -= 6.28;
            if (d < -3.14) d += 6.28;
            return { ang: d, x: Math.cos(d), y: Math.sin(d), dist: d };
          };
          let fItem = null, minDist = 999;
          itemHubs.forEach((ih) => {
            const pos = getPos(ih.angle);
            if (Math.abs(pos.dist) < minDist) {
              minDist = Math.abs(pos.dist);
              fItem = ih;
            }
          });
          ctx.clearRect(0, 0, width, height);
          ctx.save();
          ctx.translate(0, height * 0.1);
          ctx.save();
          const cr = (55 + corePulseRef.current * 25) * s;
          ctx.rotate(time * 0.3);
          ctx.strokeStyle = `rgba(255,255,255,${0.15 + corePulseRef.current * 0.4})`;
          ctx.lineWidth = (1 + corePulseRef.current * 1.5) * s;
          for (let i = 0; i < 8; i++) {
            const a = i / 8 * Math.PI;
            ctx.beginPath();
            ctx.ellipse(0, 0, cr, cr * Math.abs(Math.sin(time + a)), time + a, 0, 6.28);
            ctx.stroke();
          }
          ctx.beginPath();
          ctx.arc(0, 0, (15 + corePulseRef.current * 10) * s, 0, 6.28);
          ctx.fillStyle = `rgba(255,255,255,${0.4 + corePulseRef.current * 0.6})`;
          ctx.fill();
          ctx.restore();
          ctx.save();
          ctx.strokeStyle = "rgba(255,255,255,0.06)";
          ctx.lineWidth = 1 * s;
          [R_MONTH, R_ITEM].forEach((r) => {
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, 6.28);
            ctx.stroke();
          });
          ctx.strokeStyle = "rgba(168,85,247,0.12)";
          ctx.setLineDash([5 * s, 15 * s]);
          ctx.beginPath();
          ctx.arc(0, 0, R_YEAR * 1.5, 0, 6.28);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.restore();
          yearSegments.forEach((seg) => {
            const sa = getPos(seg.start), ea = getPos(seg.end);
            if (Math.abs(sa.dist) > 2.5 && Math.abs(ea.dist) > 2.5) return;
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.1})`;
            ctx.lineWidth = 3 * s;
            ctx.beginPath();
            ctx.arc(-150 * s, 0, R_YEAR, sa.ang, ea.ang);
            ctx.stroke();
            const lp = getPos(seg.start + 0.15);
            ctx.save();
            ctx.translate(lp.x * R_YEAR - 150 * s, lp.y * R_YEAR);
            ctx.rotate(0);
            ctx.fillStyle = focusedNode ? "rgba(168, 85, 247, 0.4)" : TOKENS2.accent;
            ctx.font = `900 ${18 * s}px ${TOKENS2.font}`;
            ctx.textAlign = "center";
            ctx.fillText(seg.year, 0, 0);
            ctx.strokeStyle = "rgba(255,255,255,0.15)";
            ctx.lineWidth = 1 * s;
            ctx.beginPath();
            ctx.moveTo(-30 * s, 25 * s);
            ctx.lineTo(30 * s, 25 * s);
            ctx.stroke();
            ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
            ctx.font = `700 ${10 * s}px ${TOKENS2.fontMono}`;
            ctx.fillText("\u25B6 SYSTEM_MANIFEST", 0, 45 * s);
            ctx.restore();
          });
          itemHubs.forEach((ih) => {
            const pos = getPos(ih.angle);
            const d = Math.abs(pos.dist);
            if (d > 1.2) return;
            const isF = focusedNode?.id === ih.id;
            const op = isF ? 1 : Math.pow(Math.max(0, 1 - d * 2.5), 2);
            const ix = pos.x * R_ITEM, iy = pos.y * R_ITEM;
            if (isF && d < 0.5) {
              ctx.beginPath();
              ctx.moveTo(0, 0);
              ctx.lineTo(ix, iy);
              ctx.strokeStyle = `rgba(168, 85, 247, ${op * 0.3})`;
              ctx.lineWidth = 0.5 * s;
              ctx.stroke();
              ctx.fillStyle = `rgba(168, 85, 247, ${op * 0.8})`;
              ctx.font = `900 ${7 * s}px monospace`;
              for (let i = 0; i < 8; i++) {
                const t = (i / 8 + time * 1.8) % 1;
                ctx.fillText(i % 2 === 0 ? "1" : "0", ix * t, iy * t);
              }
            }
            ctx.beginPath();
            ctx.arc(ix, iy, (isF ? 18 : 8) * s, 0, 6.28);
            ctx.fillStyle = isF ? TOKENS2.accent : `rgba(168, 85, 247, ${op * 0.6})`;
            ctx.fill();
            if (d < 0.25) {
              ctx.save();
              ctx.translate(ix, iy);
              ctx.rotate(pos.ang);
              const titleStr = (ih.title || "").toUpperCase();
              const lenScale = titleStr.length > 12 ? Math.max(0.5, 1 - (titleStr.length - 12) * 0.05) : 1;
              const textOp = isF ? focusedNode ? 0.4 : 0.8 : op * 0.15;
              ctx.fillStyle = `rgba(255,255,255,${textOp})`;
              ctx.font = `${isF ? 900 : 400} ${isF ? 24 * s * lenScale : 14 * s * lenScale}px ${TOKENS2.font}`;
              const yOffset = isF && titleStr.length > 10 ? 10 * s : 5 * s;
              ctx.fillText(titleStr, (isF ? 28 : 16) * s, yOffset);
              ctx.restore();
            }
          });
          ctx.restore();
          const hs = s * 0.8, rm = 60 * hs;
          ctx.textAlign = "right";
          let activeYear = fItem?.year || "2025";
          const labelText = "DOSSIER";
          ctx.fillStyle = TOKENS2.accent;
          ctx.font = `900 ${12 * hs}px ${TOKENS2.fontMono}`;
          ctx.fillText("BETO_OS", width - rm, 45 * hs);
          ctx.fillStyle = "rgba(255,255,255,1)";
          ctx.font = `900 ${72 * hs}px ${TOKENS2.font}`;
          ctx.fillText(labelText, width - rm, 105 * hs);
          ctx.fillStyle = "rgba(255,255,255,0.3)";
          ctx.font = `700 ${11 * hs}px ${TOKENS2.fontMono}`;
          for (let i = 0; i < 3; i++) {
            const seed = Math.floor(time * 10) + i;
            const code = "D.q.0x" + (seed * 1337 % 65535).toString(16).toUpperCase().padStart(4, "0");
            ctx.fillText(`\u2022 ${code}`, width - rm, 125 * hs + i * 18 * hs);
          }
          ctx.fillStyle = "rgba(255,255,255,0.5)";
          ctx.font = `900 ${10 * hs}px ${TOKENS2.fontMono}`;
          ctx.fillText(locationRef.current, width - rm, 65 * hs);
          if (fItem && minDist < 0.28) {
            if (lastFocusIdRef.current !== fItem.id) {
              lastFocusIdRef.current = fItem.id;
              corePulseRef.current = 1;
              if (onNodeFocus) onNodeFocus(fItem);
              if (fItem.location) locationRef.current = fItem.location.toUpperCase();
            }
          } else if (minDist > 0.4 && lastFocusIdRef.current) {
          }
          frameId = requestAnimationFrame(render);
        };
        let frameId = requestAnimationFrame(render);
        return () => cancelAnimationFrame(frameId);
      }, [items, dimensions, focusedNode, onNodeFocus]);
      return /* @__PURE__ */ React.createElement("div", { ref: containerRef, style: { width: "100%", height: "100%", position: "relative", overflow: "hidden", pointerEvents: "none" } }, /* @__PURE__ */ React.createElement("canvas", { ref: canvasRef, style: { width: "100%", height: "100%", display: "block" } }));
    }
    var _exports = { NodeGraph: NodeGraph2 };
    if (typeof module2 !== "undefined" && module2.exports) module2.exports = _exports;
    return _exports;
  }
});

// src/components/Visuals.jsx
var require_Visuals = __commonJS({
  "src/components/Visuals.jsx"(exports2, module2) {
    var PARTICLE_VERTEX = `
    varying vec2 vUv;
    varying float vOpacity;
    uniform float uTime;
    attribute float aSize;
    attribute float aSpeed;
    attribute float aOffset;

    void main() {
        vUv = uv;
        vec3 pos = position;
        float angle = uTime * aSpeed + aOffset;
        pos.x += cos(angle) * 20.0;
        pos.y += sin(angle) * 20.0;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = aSize * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
        vOpacity = 0.1 + sin(uTime * aSpeed + aOffset) * 0.1;
    }
`;
    var PARTICLE_FRAGMENT = `
    varying float vOpacity;
    uniform vec3 uColor;

    void main() {
        float d = distance(gl_PointCoord, vec2(0.5));
        if (d > 0.5) discard;
        gl_FragColor = vec4(uColor, vOpacity * (1.0 - d * 2.0));
    }
`;
    function GeometricParticles2({ dc, modules, TOKENS: TOKENS2 }) {
      const { useEffect: useEffect2, useRef: useRef2 } = dc;
      const { THREE } = modules;
      const containerRef = useRef2(null);
      useEffect2(() => {
        if (!THREE || !containerRef.current) return;
        const container = containerRef.current;
        const width = container.clientWidth, height = container.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1e3);
        camera.position.z = 500;
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);
        const count = 200;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        const speeds = new Float32Array(count);
        const offsets = new Float32Array(count);
        for (let i = 0; i < count; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 2e3;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 2e3;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 1e3;
          sizes[i] = 1 + Math.random() * 4;
          speeds[i] = 0.1 + Math.random() * 0.5;
          offsets[i] = Math.random() * Math.PI * 2;
        }
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
        geometry.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));
        geometry.setAttribute("aOffset", new THREE.BufferAttribute(offsets, 1));
        const material = new THREE.ShaderMaterial({
          uniforms: {
            uTime: { value: 0 },
            uColor: { value: new THREE.Color(TOKENS2.accent) }
          },
          vertexShader: PARTICLE_VERTEX,
          fragmentShader: PARTICLE_FRAGMENT,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });
        const points = new THREE.Points(geometry, material);
        scene.add(points);
        let animationId;
        const render = (time) => {
          material.uniforms.uTime.value = time * 1e-3;
          points.rotation.y = time * 5e-5;
          renderer.render(scene, camera);
          animationId = requestAnimationFrame(render);
        };
        render(0);
        return () => {
          cancelAnimationFrame(animationId);
          renderer.dispose();
          if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
        };
      }, [THREE]);
      return /* @__PURE__ */ React.createElement("div", { ref: containerRef, style: { width: "100%", height: "100%", position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.6 } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "radial-gradient(circle, transparent 40%, #000 100%)", zIndex: 1 } }));
    }
    function TravelGlobeWidget2({ dc, modules, travelData, TOKENS: TOKENS2 }) {
      const { useEffect: useEffect2, useRef: useRef2, useState: useState2 } = dc;
      const containerRef = useRef2(null);
      const canvasRef = useRef2(null);
      const [ready, setReady] = useState2(false);
      useEffect2(() => {
        let active = true;
        async function init() {
          try {
            await Promise.all([
              modules.loadScript(dc, "https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js", { globalName: "d3" }),
              modules.loadScript(dc, "https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js", { globalName: "topojson" })
            ]);
            if (active) setReady(true);
          } catch (e) {
            console.error("[URB Globe] Resources failed:", e);
          }
        }
        init();
        return () => {
          active = false;
        };
      }, []);
      useEffect2(() => {
        if (!ready || !containerRef.current || !window.d3) return;
        const canvas = canvasRef.current, ctx = canvas.getContext("2d"), d3 = window.d3;
        const dpr = window.devicePixelRatio || 1;
        let width, height, animId;
        const projection = d3.geoOrthographic().clipAngle(90);
        const path = d3.geoPath(projection, ctx);
        const updateSize = () => {
          width = containerRef.current.clientWidth;
          height = containerRef.current.clientHeight;
          canvas.width = width * dpr;
          canvas.height = height * dpr;
          ctx.scale(dpr, dpr);
        };
        updateSize();
        fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then((r) => r.json()).then((world) => {
          const countries = window.topojson.feature(world, world.objects.countries);
          const render = () => {
            ctx.clearRect(0, 0, width, height);
            projection.rotate([Date.now() * 0.012, -20]);
            projection.scale(Math.min(width, height) * 0.42).translate([width / 2, height / 2]);
            ctx.beginPath();
            path({ type: "Sphere" });
            ctx.fillStyle = "rgba(168, 85, 247, 0.05)";
            ctx.fill();
            ctx.beginPath();
            path({ type: "Sphere" });
            ctx.fillStyle = "rgba(10,10,10,0.9)";
            ctx.fill();
            ctx.strokeStyle = "rgba(168,85,247,0.4)";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.beginPath();
            path(countries);
            ctx.fillStyle = "rgba(255,255,255,0.02)";
            ctx.fill();
            ctx.strokeStyle = "rgba(255,255,255,0.15)";
            ctx.lineWidth = 0.5;
            ctx.stroke();
            animId = requestAnimationFrame(render);
          };
          render();
        });
        return () => cancelAnimationFrame(animId);
      }, [ready]);
      return /* @__PURE__ */ React.createElement("div", { ref: containerRef, className: "urb-globe-shell fade-in", style: { position: "absolute", inset: 0, pointerEvents: "none", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("canvas", { ref: canvasRef, style: { width: "100%", height: "100%" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: "15%", left: "50%", transform: "translateX(-50%)", textAlign: "center", width: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 7, color: TOKENS2.accent, fontWeight: 900, letterSpacing: 4, marginBottom: 8 } }, "TACTICAL_DEPLOYMENT: TRAVEL_LOG"), /* @__PURE__ */ React.createElement("h2", { style: { fontSize: 24, fontWeight: 900, margin: 0, letterSpacing: -1, color: "white", lineHeight: 1.1 } }, travelData?.title?.toUpperCase()), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 40, marginTop: 30, justifyContent: "center" } }, travelData?.bullets?.map((b, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { border: `1px solid ${TOKENS2.border}`, padding: "15px 25px", borderRadius: 4, background: "rgba(0,0,0,0.5)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: TOKENS2.textMuted, marginBottom: 5 } }, "LOCATION_DATA"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 700, color: "white" } }, b))))));
    }
    var _exports = { GeometricParticles: GeometricParticles2, TravelGlobeWidget: TravelGlobeWidget2 };
    if (typeof module2 !== "undefined" && module2.exports) module2.exports = _exports;
    return _exports;
  }
});

// src/components/Content.jsx
var require_Content = __commonJS({
  "src/components/Content.jsx"(exports2, module2) {
    function IntroSlide2({ dc, data, TOKENS: TOKENS2 }) {
      return /* @__PURE__ */ React.createElement("div", { className: "urb-hero-content fade-in", style: { position: "relative", zIndex: 10 } }, /* @__PURE__ */ React.createElement("div", { className: "urb-hero-tagline" }, data?.about?.tagline || "CREATING FACTOTUMS"), /* @__PURE__ */ React.createElement("div", { className: "urb-hero-name", style: { fontSize: "12vw", fontWeight: 900, letterSpacing: -10 } }, data?.about?.name || "BETO"), /* @__PURE__ */ React.createElement("div", { style: { color: TOKENS2.textDim, marginTop: 12 } }, data?.about?.title || "Engineer & Technologist"));
    }
    function CardShell({ children, TOKENS: TOKENS2 }) {
      return /* @__PURE__ */ React.createElement("div", { className: "cinematic-frame fade-in urb-float", style: {
        width: "85%",
        maxHeight: "82vh",
        maxWidth: "1200px",
        pointerEvents: "auto",
        display: "flex",
        flexDirection: "column"
      } }, /* @__PURE__ */ React.createElement("div", { style: {
        position: "relative",
        width: "100%",
        height: "100%",
        background: TOKENS2.glassBg,
        borderRadius: TOKENS2.radius,
        overflow: "hidden",
        border: `1px solid ${TOKENS2.border}`,
        boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
        display: "flex",
        flexDirection: "column"
      } }, children, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 0, left: 0, width: "100%", height: 4, background: TOKENS2.accent, opacity: 0.8 } })));
    }
    function CardHeader({ node, TOKENS: TOKENS2 }) {
      const titleLen = node?.title?.length || 0;
      const fontSize = titleLen > 14 ? "clamp(32px, 5vw, 42px)" : "clamp(42px, 8vw, 64px)";
      return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 30 } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: TOKENS2.accent, fontWeight: 900, letterSpacing: 4 } }, "ENTRY_TYPE: NODEGRAPH_DATA"), /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 1, background: TOKENS2.border } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: TOKENS2.textMuted, fontWeight: 700 } }, "VERIFIED_SECURE")), /* @__PURE__ */ React.createElement("h2", { style: {
        fontSize,
        fontWeight: 900,
        margin: 0,
        letterSpacing: "-0.04em",
        lineHeight: 1.05,
        overflowWrap: "break-word",
        hyphens: "auto",
        color: "white",
        maxWidth: "95%"
      } }, node?.title?.toUpperCase()), /* @__PURE__ */ React.createElement("div", { style: {
        fontSize: 18,
        color: TOKENS2.textDim,
        fontStyle: "italic",
        marginTop: 18,
        maxWidth: "90%",
        lineHeight: 1.5,
        fontWeight: 300
      } }, node?.desc)), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", fontSize: 10, color: TOKENS2.textMuted, opacity: 0.6, fontFamily: TOKENS2.fontMono, lineSpacing: 1.5 } }, /* @__PURE__ */ React.createElement("div", { style: { color: TOKENS2.accent } }, "// REF_ID: ", node?.id?.toUpperCase()), /* @__PURE__ */ React.createElement("div", null, "STATUS: ACTIVE_NODE"), /* @__PURE__ */ React.createElement("div", null, "TIMESTAMP: ", (/* @__PURE__ */ new Date()).toISOString().slice(0, 10))));
    }
    function CardBody({ node, TOKENS: TOKENS2 }) {
      if (!node?.bullets) return null;
      return /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "minmax(300px, 1fr) 1fr", gap: 50, marginTop: "auto" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 24 } }, node.bullets.slice(0, 3).map((b, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
        fontSize: 17,
        color: "white",
        display: "flex",
        gap: 20,
        borderLeft: `3px solid ${TOKENS2.accent}`,
        paddingLeft: 24,
        lineHeight: 1.5,
        fontWeight: 400
      } }, /* @__PURE__ */ React.createElement("span", null, b)))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 18 } }, node.bullets.slice(3).map((b, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
        fontSize: 13,
        color: TOKENS2.textDim,
        background: "rgba(255,255,255,0.03)",
        padding: "18px 25px",
        borderRadius: 12,
        lineHeight: 1.4,
        border: "1px solid rgba(255,255,255,0.05)"
      } }, /* @__PURE__ */ React.createElement("span", { style: { color: TOKENS2.accent, marginRight: 8 } }, "\u25B9"), b))));
    }
    function DualPanelSlide({ node, dc, TOKENS: TOKENS2 }) {
      const { useEffect: useEffect2, useState: useState2, useRef: useRef2 } = dc;
      const [videoUrl, setVideoUrl] = useState2(null);
      useEffect2(() => {
        if (node?.panelVideo && window.app) {
          const file = window.app.vault.getFiles().find((f) => f.name === node.panelVideo);
          if (file) {
            const url = window.app.vault.getResourcePath(file);
            setVideoUrl(url);
          }
        }
      }, [node?.panelVideo]);
      const hasMission = !!node.mission;
      const missionParts = node.mission ? node.mission.split("\u2794").map((s) => s.trim()).filter(Boolean) : [];
      return /* @__PURE__ */ React.createElement("div", { className: "urb-intel-pane", key: `intel-${node.id}`, style: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
        width: "100%",
        height: "100%",
        paddingBottom: 40
      } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: TOKENS2.accent, fontWeight: 900, letterSpacing: 3, display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: TOKENS2.accent } }), "D.q.ACTIVE_SECTOR // REF: ", node.id.toUpperCase()), /* @__PURE__ */ React.createElement("h2", { style: { fontSize: 38, margin: 0, letterSpacing: -1, lineHeight: 1, color: "white", fontWeight: 900 } }, node.title.toUpperCase()), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 17, lineHeight: 1.6, opacity: 0.85, color: "white" } }, node.panelText || node.desc), hasMission && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, borderTop: "1px solid rgba(168,85,247,0.15)", paddingTop: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: TOKENS2.accent, fontWeight: 900, letterSpacing: 2, marginBottom: 15 } }, "SYSTEM_MISSION_SEQUENCE"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, missionParts.map((part, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { fontSize: 15, fontWeight: 600, display: "flex", gap: 12, color: "white" } }, /* @__PURE__ */ React.createElement("span", { style: { color: TOKENS2.accent } }, "\u2794"), " ", part)))), node.trigger && /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 8, fontFamily: TOKENS2.fontMono, color: TOKENS2.textMuted } }, "TRIGGER_EVENT:"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, fontFamily: TOKENS2.fontMono, color: TOKENS2.accent, fontWeight: 700 } }, node.trigger.toUpperCase())));
    }
    function CinematicViewer2({ node, TOKENS: TOKENS2, dc }) {
      if (!node) return null;
      if (node.panelVideo || node.panelText) {
        return /* @__PURE__ */ React.createElement(DualPanelSlide, { node, dc, TOKENS: TOKENS2 });
      }
      return /* @__PURE__ */ React.createElement(CardShell, { TOKENS: TOKENS2 }, /* @__PURE__ */ React.createElement("div", { style: { padding: "70px 90px", flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement(CardHeader, { node, TOKENS: TOKENS2 }), /* @__PURE__ */ React.createElement(CardBody, { node, TOKENS: TOKENS2 })));
    }
    function PrintLayout2({ data, TOKENS: TOKENS2, dc }) {
      if (!data) return null;
      const { useMemo: useMemo2 } = dc;
      const nodes = data.nodes || [];
      const experience = useMemo2(() => nodes.filter((n) => n.groupName?.toUpperCase().includes("EXPERIENCE") || n.groupName?.toUpperCase().includes("HISTORY")), [nodes]);
      const projects = useMemo2(() => nodes.filter((n) => n.groupName?.toUpperCase().includes("SHOWCASE") || n.groupName?.toUpperCase().includes("PROJECTS") || n.groupName?.toUpperCase().includes("RESOURCES")), [nodes]);
      const travels = useMemo2(() => nodes.filter((n) => n.groupName?.toUpperCase().includes("TRAVEL") || n.groupName?.toUpperCase().includes("NODES")), [nodes]);
      return /* @__PURE__ */ React.createElement("div", { className: "urb-print-area urb-print-layout", style: {
        width: "100%",
        padding: "60px",
        color: "var(--urb-print-text, white) !important",
        fontFamily: TOKENS2.font,
        display: "flex",
        flexDirection: "column",
        background: "var(--urb-print-bg, #050508) !important",
        minHeight: "100vh",
        visibility: "visible !important"
      } }, /* @__PURE__ */ React.createElement("header", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 50, borderBottom: `2px solid rgba(255,255,255,0.08)`, paddingBottom: 30 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: "var(--urb-print-accent)", fontWeight: 900, letterSpacing: 6, marginBottom: 12 } }, "MASTER_CLASSIFICATION_PROTOCOL://", data.about?.name?.toUpperCase() || "ANONYMOUS"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: TOKENS2.fontMono, fontSize: 36, fontWeight: 900, color: "var(--urb-print-text)", letterSpacing: 2 } }, "BETO", /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16, opacity: 0.5, letterSpacing: 8 } }, ".PORTFOLIO"))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", fontSize: 10, color: "var(--urb-print-text)", opacity: 0.6, fontFamily: TOKENS2.fontMono, lineHeight: 2 } }, /* @__PURE__ */ React.createElement("div", { style: { color: "var(--urb-print-accent)", fontWeight: 900 } }, "[ EXTRACTION_STATUS: READY ]"), /* @__PURE__ */ React.createElement("div", null, "LOC://", data.about?.location?.toUpperCase() || "UNIDENTIFIED"), /* @__PURE__ */ React.createElement("div", null, "DATE://", (/* @__PURE__ */ new Date()).toISOString().split("T")[0].toUpperCase()))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "280px 1fr 280px", gap: 50, flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 40 } }, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 900, color: "var(--urb-print-accent)", marginBottom: 15, letterSpacing: 3, borderLeft: `2px solid var(--urb-print-accent)`, paddingLeft: 10 } }, "\u25C6 CORE_IDENTITY"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, lineHeight: 1.7, color: "var(--urb-print-text)", opacity: 0.9, background: "rgba(255,255,255,0.02)", padding: 20, borderRadius: 2 } }, data.about?.tagline || "IDENTITY_VERIFIED")), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 900, color: "var(--urb-print-accent)", marginBottom: 15, letterSpacing: 3, borderLeft: `2px solid var(--urb-print-accent)`, paddingLeft: 10 } }, "\u25C6 SYSTEM_SPECS"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 10 } }, ["Typescript", "React", "Three.js", "DirectX", "Vulkan", "Node.js", "Architecture"].map((s) => /* @__PURE__ */ React.createElement("div", { key: s, style: { fontSize: 9, padding: "5px 10px", background: "rgba(255,255,255,0.03)", border: `1px solid rgba(255,255,255,0.1)`, color: "var(--urb-print-text)", opacity: 0.6, borderRadius: 2 } }, s.toUpperCase())))), /* @__PURE__ */ React.createElement("section", { style: { marginTop: "auto" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, fontFamily: TOKENS2.fontMono, color: "var(--urb-print-text)", opacity: 0.4, lineHeight: 2 } }, /* @__PURE__ */ React.createElement("div", null, "SYSLOG_0X8F: AUTHENTICATED"), /* @__PURE__ */ React.createElement("div", null, "ENCRYPTION: AES-256_STABLE"), /* @__PURE__ */ React.createElement("div", null, "NETWORK: MESH_UP"), /* @__PURE__ */ React.createElement("div", null, "LOC://", data.about?.location?.toUpperCase())))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 25 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 900, color: "var(--urb-print-accent)", marginBottom: 15, letterSpacing: 3, borderLeft: `2px solid var(--urb-print-accent)`, paddingLeft: 10 } }, "\u25C6 OPERATIONAL_HISTORY_LOG"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 30 } }, experience.map((it, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { borderBottom: `1px solid rgba(255,255,255,0.05)`, paddingBottom: 25 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 900, fontSize: 18, color: "var(--urb-print-text)", letterSpacing: -0.5 } }, it.title?.toUpperCase()), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontFamily: TOKENS2.fontMono, color: "var(--urb-print-accent)", background: "rgba(168, 85, 247, 0.1)", padding: "2px 8px", borderRadius: 4 } }, it.date || "2024_ACTIVE")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "var(--urb-print-text)", opacity: 0.7, lineHeight: 1.6, marginBottom: 15 } }, it.desc), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, it.bullets?.slice(0, 4).map((b, j) => /* @__PURE__ */ React.createElement("div", { key: j, style: { fontSize: 12, color: "var(--urb-print-text)", display: "flex", gap: 12, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "var(--urb-print-accent)", fontWeight: 900 } }, "\u25B9"), /* @__PURE__ */ React.createElement("span", { style: { opacity: 0.9 } }, b.toUpperCase())))))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 40 } }, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 900, color: "var(--urb-print-accent)", marginBottom: 15, letterSpacing: 3, borderLeft: `2px solid var(--urb-print-accent)`, paddingLeft: 10 } }, "\u25C6 PROJECT_SHOWCASE"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 20 } }, projects.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: p.id || i, style: { background: "rgba(168, 85, 247, 0.03)", padding: 15, borderRadius: 4, border: `1px solid rgba(168, 85, 247, 0.15)` } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 900, fontSize: 12, marginBottom: 6, color: "var(--urb-print-text)", letterSpacing: 1 } }, p.title?.toUpperCase()), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--urb-print-text)", opacity: 0.6, lineHeight: 1.5 } }, p.desc?.substring(0, 100), "..."))))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, fontWeight: 900, color: "var(--urb-print-accent)", marginBottom: 15, letterSpacing: 3, borderLeft: `2px solid var(--urb-print-accent)`, paddingLeft: 10 } }, "\u25C6 TRAVEL_CHART"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12, background: "rgba(255,255,255,0.01)", padding: 15, borderRadius: 4 } }, travels.slice(0, 6).map((t, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { fontSize: 10, color: "var(--urb-print-text)", opacity: 0.4, display: "flex", justifyContent: "space-between", borderBottom: `1px solid rgba(255,255,255,0.03)`, paddingBottom: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { letterSpacing: 1 } }, t.title?.toUpperCase()), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--urb-print-accent)", fontFamily: TOKENS2.fontMono } }, t.id?.toUpperCase() || "0X_ACTIVE"))))))), /* @__PURE__ */ React.createElement("footer", { style: { marginTop: 50, paddingTop: 40, borderTop: `2px solid rgba(255,255,255,0.08)`, textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "var(--urb-print-text)", opacity: 0.4, fontFamily: TOKENS2.fontMono, letterSpacing: 6 } }, "END_OF_TRANSMISSION // BETO.portfolio_SECURE_EXTRACT")));
    }
    var _exports = { IntroSlide: IntroSlide2, CinematicViewer: CinematicViewer2, PrintLayout: PrintLayout2 };
    if (typeof module2 !== "undefined" && module2.exports) module2.exports = _exports;
    return _exports;
  }
});

// src/components/FloatingScene.jsx
var require_FloatingScene = __commonJS({
  "src/components/FloatingScene.jsx"(exports2, module2) {
    function FloatingScene2({ node, nodes, scroll, activeTab, isAutoPlay, dc, modules, TOKENS: TOKENS2 }) {
      const { useEffect: useEffect2, useRef: useRef2, useState: useState2, useMemo: useMemo2 } = dc;
      const { THREE, gsap, TravelGlobeWidget: TravelGlobeWidget2 } = modules;
      const containerRef = useRef2(null);
      const sceneRefs = useRef2({
        scene: null,
        camera: null,
        renderer: null,
        stage: null,
        layers: [],
        animationId: null,
        mouse: { x: 0, y: 0 },
        targetMouse: { x: 0, y: 0 },
        lastScroll: 0
      }).current;
      const [isSceneReady, setIsSceneReady] = useState2(false);
      const [mousePos, setMousePos] = useState2({ x: 0, y: 0 });
      const dashRef = useRef2(null);
      useEffect2(() => {
        if (!THREE || !containerRef.current) return;
        const container = containerRef.current;
        const width = container.clientWidth;
        const height = container.clientHeight;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3e3);
        camera.position.z = 600;
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);
        const stage = new THREE.Group();
        scene.add(stage);
        sceneRefs.scene = scene;
        sceneRefs.camera = camera;
        sceneRefs.renderer = renderer;
        sceneRefs.stage = stage;
        setIsSceneReady(true);
        const onMouseMove = (e) => {
          const rect = container.getBoundingClientRect();
          sceneRefs.targetMouse.x = (e.clientX - rect.left) / width * 2 - 1;
          sceneRefs.targetMouse.y = -((e.clientY - rect.top) / height) * 2 + 1;
        };
        window.addEventListener("mousemove", onMouseMove);
        const animate = () => {
          sceneRefs.animationId = requestAnimationFrame(animate);
          sceneRefs.mouse.x += (sceneRefs.targetMouse.x - sceneRefs.mouse.x) * 0.012;
          sceneRefs.mouse.y += (sceneRefs.targetMouse.y - sceneRefs.mouse.y) * 0.012;
          setMousePos({ x: sceneRefs.mouse.x, y: sceneRefs.mouse.y });
          if (stage) {
            stage.rotation.y = -sceneRefs.lastScroll;
            sceneRefs.layers.forEach((mesh) => {
              const wf = mesh.userData?.wiggle || 1;
              mesh.position.x = mesh.userData.originX + sceneRefs.mouse.x * 12 * wf;
              mesh.position.y = mesh.userData.originY + sceneRefs.mouse.y * 12 * wf;
            });
          }
          renderer.render(scene, camera);
        };
        animate();
        return () => {
          window.removeEventListener("mousemove", onMouseMove);
          if (sceneRefs.animationId) cancelAnimationFrame(sceneRefs.animationId);
          renderer.dispose();
          if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
        };
      }, [THREE]);
      useEffect2(() => {
        sceneRefs.lastScroll = scroll || 0;
      }, [scroll]);
      useEffect2(() => {
        if (!isSceneReady || !node || !gsap) return;
        const { stage, layers } = sceneRefs;
        layers.forEach((l) => stage.remove(l));
        layers.length = 0;
        const createLayer = (contentFn, zOffset, x = 0, y = 0, sizeW = 120, sizeH = 120, wiggle = 1) => {
          const canvas = document.createElement("canvas");
          canvas.width = 1024;
          canvas.height = 1024;
          const ctx = canvas.getContext("2d");
          contentFn(ctx);
          const texture = new THREE.CanvasTexture(canvas);
          const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide });
          const mesh = new THREE.Mesh(new THREE.PlaneGeometry(sizeW, sizeH), material);
          mesh.position.set(x, y, zOffset);
          mesh.userData = { originX: x, originY: y, originZ: zOffset, wiggle };
          stage.add(mesh);
          layers.push(mesh);
          return mesh;
        };
        createLayer((ctx) => {
          ctx.fillStyle = "rgba(255,255,255,0.01)";
          ctx.font = "900 120px Inter";
          ctx.textAlign = "center";
          const label = typeof node?.groupName === "string" ? node.groupName : node?.label || "DOSSIER";
          ctx.fillText(String(label).toUpperCase(), 512, 512);
        }, -150, 0, 0, 600, 600, 0.4);
        layers.forEach((mesh, i) => {
          gsap.fromTo(mesh.material, { opacity: 0 }, { opacity: 1, duration: 3, delay: i * 0.3, ease: "power2.out" });
        });
      }, [node, isSceneReady]);
      const isInitialMount = dc.useRef(true);
      const lastNodeId = dc.useRef(null);
      useEffect2(() => {
        if (!dashRef.current || !gsap) return;
        const isNewNode = node?.id !== lastNodeId.current;
        if (!isNewNode && !isInitialMount.current) return;
        lastNodeId.current = node?.id;
        const container = dashRef.current;
        if (!container) return;
        const leftWrapper = container.querySelectorAll(".urb-entrance-buffer")[0];
        const rightWrapper = container.querySelectorAll(".urb-entrance-buffer")[1];
        const bullets = Array.from(container.querySelectorAll(".urb-content-scroll > div"));
        const targets = [leftWrapper, rightWrapper].filter(Boolean);
        if (targets.length > 0) gsap.killTweensOf([...targets, ...bullets]);
        const duration = isInitialMount.current ? 3.2 : 0.8;
        const stagger = isInitialMount.current ? 0.15 : 0.05;
        const yOffset = isInitialMount.current ? 150 : 40;
        const tl = gsap.timeline({
          onComplete: () => {
            isInitialMount.current = false;
          }
        });
        if (targets.length > 0) {
          gsap.set(targets, {
            opacity: 0,
            y: yOffset,
            scale: isInitialMount.current ? 0.8 : 0.98,
            rotationX: isInitialMount.current ? 20 : 5
          });
          if (leftWrapper) tl.to(leftWrapper, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration,
            ease: "power4.out"
          }, 0.1);
          if (rightWrapper) tl.to(rightWrapper, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: duration * 1.1,
            ease: "power4.out"
          }, 0.2);
        }
        if (bullets.length > 0) {
          tl.fromTo(
            bullets,
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              stagger,
              duration: duration * 0.7,
              ease: "power2.out"
            },
            `-=${duration * 0.8}`
          );
        }
      }, [node?.id, activeTab, isAutoPlay, gsap]);
      useEffect2(() => {
        if (!containerRef.current) return;
        const obs = new ResizeObserver((entries) => {
          const { width, height } = entries[0].contentRect;
          console.log(`%c \u{1F4DF} [DASHBOARD_DIMENSIONS] W: ${Math.round(width)}px | H: ${Math.round(height)}px `, "background: #111; color: #a855f7; font-weight: bold; border: 1px solid #331f4d; padding: 2px 8px; border-radius: 4px;");
        });
        obs.observe(containerRef.current);
        return () => obs.disconnect();
      }, []);
      const showGlobe = activeTab === "TRAVEL" || node?.showGlobe || node?.layout === "tactical";
      const isAbout = node.groupName === "IDENTITY" || node.groupName === "ABOUT";
      const panelStyle = {
        background: "rgba(5, 5, 10, 0.15)",
        border: `1px solid ${TOKENS2.border}`,
        borderRadius: "4px",
        color: "white",
        boxShadow: "0 40px 100px rgba(0,0,0,0.95)",
        transition: "transform 0.1s ease-out",
        pointerEvents: "auto"
      };
      return /* @__PURE__ */ React.createElement("div", { ref: containerRef, style: { width: "100%", height: "100%", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, opacity: 0.8 } }), /* @__PURE__ */ React.createElement("div", { ref: dashRef, style: {
        position: "absolute",
        inset: 0,
        zIndex: 20,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "120px",
        paddingBottom: "60px",
        overflow: "hidden"
      } }, node.panelType === "TIMELINE" && modules.TimelineSlide ? /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: "100%", pointerEvents: "auto" } }, /* @__PURE__ */ React.createElement(modules.TimelineSlide, { node, dc, modules, TOKENS: TOKENS2 })) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "20px", alignItems: "center", justifyContent: "center", width: "100%", maxWidth: "1100px", padding: "40px 20px 0 20px" } }, /* @__PURE__ */ React.createElement("div", { className: "urb-entrance-buffer", style: { flex: "1 1 0", minWidth: 0, padding: "40px 24px 24px 24px", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { ...panelStyle, flex: 1, display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "24px", flex: 1, display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 9, color: TOKENS2.accent, fontWeight: 900, letterSpacing: 3, marginBottom: 8 } }, "ARCHIVE_VISUAL_0x00"), /* @__PURE__ */ React.createElement("h2", { style: { fontSize: 24, margin: 0, color: "white", fontWeight: 900, letterSpacing: -1 } }, "SECTOR.DOSSIER")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "320px" } }, showGlobe && TravelGlobeWidget2 ? /* @__PURE__ */ React.createElement("div", { style: { width: "320px", height: "320px", position: "relative" } }, /* @__PURE__ */ React.createElement(TravelGlobeWidget2, { dc, modules, travelData: node, TOKENS: TOKENS2 })) : /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: TOKENS2.textMuted, letterSpacing: 8, opacity: 0.15 } }, "[ SIDE_VISUAL_OFFLINE ]"))))), /* @__PURE__ */ React.createElement("div", { className: "urb-entrance-buffer", style: { flex: "1 1 0", minWidth: 0, maxWidth: "500px", padding: "40px 24px 24px 24px", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: {
        ...panelStyle,
        flex: 1,
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      } }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { color: TOKENS2.accent, fontSize: "10px", fontWeight: 900, fontFamily: TOKENS2.fontMono, letterSpacing: 3, marginBottom: "8px" } }, "\u25C6 DOSSIER_INTEL // SYNC_0x", node.id?.slice(-4).toUpperCase() || "AX"), /* @__PURE__ */ React.createElement("h1", { style: { margin: 0, fontSize: "32px", fontWeight: 900, fontFamily: TOKENS2.font, letterSpacing: -1, lineHeight: 1, color: "white" } }, node.title.toUpperCase())), /* @__PURE__ */ React.createElement("div", { style: {
        flex: 1,
        overflowY: "auto",
        maxHeight: "55vh",
        paddingRight: "20px",
        msOverflowStyle: "none",
        scrollbarWidth: "none"
      } }, /* @__PURE__ */ React.createElement("style", null, `
                                        .urb-content-scroll::-webkit-scrollbar { width: 0; background: transparent; }
                                    `), /* @__PURE__ */ React.createElement("div", { className: "urb-content-scroll", style: { paddingBottom: "40px" } }, (node.panelText || node.desc) && /* @__PURE__ */ React.createElement("div", { style: {
        fontSize: "17px",
        fontWeight: 400,
        fontFamily: TOKENS2.font,
        lineHeight: 1.6,
        color: "white",
        marginBottom: "35px",
        borderRight: `1px solid rgba(255,255,255,0.05)`,
        paddingRight: "20px",
        opacity: 0.9
      } }, node.panelText || node.desc), node.mission && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "35px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: TOKENS2.accent, fontWeight: 900, fontFamily: TOKENS2.fontMono, letterSpacing: 4, marginBottom: "18px", opacity: 0.8 } }, "SYSTEM_MISSION_SEQUENCE"), node.mission.split("\u2794").map((s) => s.trim()).filter(Boolean).map((part, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: "20px", marginBottom: "15px", fontSize: "15px", fontWeight: 600, color: "white" } }, /* @__PURE__ */ React.createElement("span", { style: { color: TOKENS2.accent } }, "\u2794"), " ", part))), node.bullets?.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "40px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: TOKENS2.textMuted, letterSpacing: 3, marginBottom: "20px" } }, "SUPPLEMENTARY_DATA_STREAM"), node.bullets.map((b, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "15px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: TOKENS2.accent, fontWeight: 900, fontSize: "13px" } }, ">>"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "14px", fontWeight: 400, fontFamily: TOKENS2.font, lineHeight: 1.5, color: "rgba(255,255,255,0.4)" } }, b.toUpperCase())))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingTop: "25px", borderTop: "1px solid rgba(255,255,255,0.08)" } }, /* @__PURE__ */ React.createElement("div", null, node.trigger && /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", fontFamily: TOKENS2.fontMono, color: TOKENS2.textMuted, letterSpacing: 2 } }, "TRIGGER: ", /* @__PURE__ */ React.createElement("span", { style: { color: TOKENS2.accent, fontWeight: 900 } }, node.trigger.toUpperCase())), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: TOKENS2.textMuted, marginTop: "4px", letterSpacing: 1 } }, "SYSTEM_AUTO_SAFE: ON")), /* @__PURE__ */ React.createElement("div", { className: "fade-in", style: { padding: "12px 24px", color: "white", background: TOKENS2.accent, fontSize: "10px", fontWeight: 900, fontFamily: TOKENS2.fontMono, letterSpacing: 3, border: `1px solid white`, boxShadow: `0 10px 30px ${TOKENS2.accent}44` } }, isAbout ? "LOGIN_SUCCESS" : "DATA_STABLE")))))))), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(168, 85, 247, 0.08) 0%, transparent 85%)", pointerEvents: "none" } }));
    }
    var _exports = { FloatingScene: FloatingScene2 };
    if (typeof module2 !== "undefined" && module2.exports) module2.exports = _exports;
    return _exports;
  }
});

// src/components/DeployBridge.jsx
var require_DeployBridge = __commonJS({
  "src/components/DeployBridge.jsx"(exports2, module2) {
    function DeployBridge2({ TOKENS: TOKENS2, isDeploying, isPublishing, handleDeploy, handlePublish, logs, status }) {
      return /* @__PURE__ */ React.createElement("div", { className: "deploy-bridge-panel fade-in", style: {
        padding: "20px",
        background: "rgba(5,5,8,0.4)",
        border: `1px solid ${TOKENS2.border}44`,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        gap: 15
      } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: TOKENS2.accent, fontWeight: 900, letterSpacing: 2 } }, "TACTICAL_BRIDGE_v2.0"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 8, color: status === "IDLE" ? TOKENS2.textDim : TOKENS2.accent, opacity: 0.8 } }, status)), /* @__PURE__ */ React.createElement("div", { className: "urb-mini-terminal", style: {
        height: 100,
        overflowY: "auto",
        background: "rgba(0,0,0,0.3)",
        padding: 10,
        borderRadius: 2,
        border: `1px solid ${TOKENS2.border}22`,
        fontSize: 9,
        fontFamily: "monospace",
        color: TOKENS2.textDim
      } }, logs.length > 0 ? logs.map((log, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { marginBottom: 4, opacity: i === 0 ? 1 : 0.5 } }, `> ${log}`)) : /* @__PURE__ */ React.createElement("div", { style: { opacity: 0.3 } }, "Awaiting packet transmission...")));
    }
    var _exports = { DeployBridge: DeployBridge2 };
    if (typeof module2 !== "undefined" && module2.exports) module2.exports = _exports;
    return _exports;
  }
});

// src/components/HyperScroll.jsx
var require_HyperScroll = __commonJS({
  "src/components/HyperScroll.jsx"(exports2, module2) {
    function HyperScroll2({ dc, nodes, node, TOKENS: TOKENS2 }) {
      const { useRef: useRef2, useEffect: useEffect2 } = dc;
      const containerRef = useRef2(null);
      const worldRef = useRef2(null);
      const viewportRef = useRef2(null);
      const engineRef = useRef2({
        animationId: null,
        lastTime: 0,
        items: [],
        state: {
          scroll: 0,
          velocity: 0,
          targetSpeed: 2.5,
          // Constant auto-scroll speed
          mouseX: 0,
          mouseY: 0
        },
        CONFIG: {
          itemCount: 25,
          zGap: 600,
          loopSize: 0,
          camSpeed: 1.5,
          accent: TOKENS2.accent
        }
      });
      useEffect2(() => {
        let isActive = true;
        const { state, CONFIG, items } = engineRef.current;
        const world = worldRef.current;
        const viewport = viewportRef.current;
        if (!world || !viewport) return;
        world.innerHTML = "";
        items.length = 0;
        CONFIG.loopSize = CONFIG.itemCount * CONFIG.zGap;
        for (let i = 0; i < CONFIG.itemCount; i++) {
          const el = document.createElement("div");
          el.className = "urb-hs-item";
          const card = document.createElement("div");
          card.className = "urb-hs-card";
          const bullet = node.bullets[i % node.bullets.length] || "ARCHIVE_ENTRY_SYNCED";
          const id = Math.floor(Math.random() * 9999).toString(16).toUpperCase();
          card.innerHTML = `
                <div class="urb-hs-header">
                    <span style="color:${TOKENS2.accent}; font-weight:900;">\u25C6 [0x${id}]</span>
                    <span style="opacity:0.4; font-size:9px;">ARCHIVE_OS_V1.42</span>
                </div>
                <div class="urb-hs-body">${bullet.toUpperCase()}</div>
                <div class="urb-hs-footer">
                    <span>SECTOR_${i}</span>
                    <span>STATUS:STABLE</span>
                </div>
            `;
          el.appendChild(card);
          const angle = i / CONFIG.itemCount * Math.PI * 4;
          const x = Math.cos(angle) * 300 + (Math.random() - 0.5) * 100;
          const y = Math.sin(angle) * 300 + (Math.random() - 0.5) * 100;
          const rot = (Math.random() - 0.5) * 20;
          items.push({ el, x, y, rot, baseZ: -i * CONFIG.zGap });
          world.appendChild(el);
        }
        const styleId = "urb-hs-styles";
        if (!document.getElementById(styleId)) {
          const style = document.createElement("style");
          style.id = styleId;
          style.innerHTML = `
                .urb-hs-item {
                    position: absolute;
                    left: 50%; top: 50%;
                    transform-style: preserve-3d;
                    pointer-events: none;
                }
                .urb-hs-card {
                    width: 280px;
                    padding: 25px;
                    background: rgba(5, 5, 10, 0.95);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-left: 4px solid ${TOKENS2.accent};
                    backdrop-filter: none;
                    color: white;
                    font-family: ${TOKENS2.font};
                    transform: translate(-50%, -50%);
                    box-shadow: 0 20px 50px rgba(0,0,0,0.8);
                }
                .urb-hs-header { display: flex; justify-content: space-between; font-size: 10px; margin-bottom: 20px; font-family: ${TOKENS2.fontMono}; letter-spacing: 1px; }
                .urb-hs-body { font-size: 14px; font-weight: 600; line-height: 1.5; opacity: 0.9; min-height: 60px; }
                .urb-hs-footer { margin-top: 20px; display: flex; justify-content: space-between; font-size: 8px; font-family: ${TOKENS2.fontMono}; opacity: 0.3; }
            `;
          document.head.appendChild(style);
        }
        function raf(time) {
          if (!isActive) return;
          const delta = time - engineRef.current.lastTime;
          engineRef.current.lastTime = time;
          state.velocity += (state.targetSpeed - state.velocity) * 0.05;
          state.scroll += state.velocity;
          const cameraZ = state.scroll * CONFIG.camSpeed;
          const modC = CONFIG.loopSize;
          items.forEach((item) => {
            let relZ = item.baseZ + cameraZ;
            let vizZ = (relZ % modC + modC) % modC;
            if (vizZ > 500) vizZ -= modC;
            let alpha = 1;
            if (vizZ < -2500) alpha = 0;
            else if (vizZ < -1500) alpha = (vizZ + 2500) / 1e3;
            if (vizZ > 100) alpha = 1 - (vizZ - 100) / 400;
            if (alpha < 0) alpha = 0;
            item.el.style.opacity = alpha;
            if (alpha > 0) {
              item.el.style.transform = `translate3d(${item.x}px, ${item.y}px, ${vizZ}px) rotateZ(${item.rot}deg)`;
            }
          });
          engineRef.current.animationId = requestAnimationFrame(raf);
        }
        engineRef.current.animationId = requestAnimationFrame(raf);
        return () => {
          isActive = false;
          cancelAnimationFrame(engineRef.current.animationId);
        };
      }, [node.id]);
      return /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" } }, /* @__PURE__ */ React.createElement("div", { ref: viewportRef, style: { position: "absolute", inset: 0, perspective: "1000px" } }, /* @__PURE__ */ React.createElement("div", { ref: worldRef, style: { position: "absolute", top: "50%", left: "50%", transformStyle: "preserve-3d" } })));
    }
    var _exports = { HyperScroll: HyperScroll2 };
    if (typeof module2 !== "undefined" && module2.exports) module2.exports = _exports;
    return _exports;
  }
});

// src/components/TimelineSlide.jsx
var require_TimelineSlide = __commonJS({
  "src/components/TimelineSlide.jsx"(exports2, module2) {
    function TimelineSlide2({ node, dc, modules, TOKENS: TOKENS2 }) {
      const { useEffect: useEffect2, useRef: useRef2, useState: useState2, useMemo: useMemo2 } = dc;
      const { gsap } = modules;
      const containerRef = useRef2(null);
      const scrollRef = useRef2(null);
      const contentRef = useRef2(null);
      const [hoveredItem, setHoveredItem] = useState2(null);
      const START_YEAR = 1999;
      const END_YEAR = 2026;
      const TOTAL_YEARS = END_YEAR - START_YEAR + 1;
      const YEAR_WIDTH = 80;
      const TRACK_HEIGHT = 80;
      const TRACKS = {
        "LIFE": 0,
        "EDUCATION": 1,
        "PROFESSIONAL": 2,
        "INNOVATION": 3
      };
      const epochs = useMemo2(() => {
        return (node.epochs || []).map((e) => {
          const parts = e.replace(/[\[\]]/g, "").split("|").map((s) => s.trim());
          const [years, title, trackLabel, desc] = parts;
          const [start, end] = years.split("-").map((s) => parseInt(s.trim()));
          return {
            start,
            end,
            title,
            desc: desc || "VERIFIED_RECORD",
            track: TRACKS[trackLabel] ?? 0,
            color: trackLabel === "PROFESSIONAL" ? TOKENS2.accent : "rgba(255,255,255,0.4)"
          };
        });
      }, [node.epochs]);
      const milestones = useMemo2(() => {
        return (node.milestones || []).map((m) => {
          const parts = m.replace(/[\[\]]/g, "").split("|").map((s) => s.trim());
          const [year, title, media, quote] = parts;
          return {
            year: parseInt(year),
            title,
            media: media.replace(/!\[\[|\]\]/g, ""),
            quote: quote.replace(/^"|"$/g, "")
          };
        });
      }, [node.milestones]);
      const isUserInteracting = useRef2(false);
      useEffect2(() => {
        if (!gsap || !contentRef.current || !scrollRef.current) return;
        const scroller = scrollRef.current;
        let targetX = scroller.scrollLeft;
        let isDragging = false;
        let lastX = 0;
        const syncScroll = (delta) => {
          isUserInteracting.current = true;
          targetX += delta;
          const max = scroller.scrollWidth - scroller.clientWidth;
          targetX = Math.max(0, Math.min(max, targetX));
          gsap.to(scroller, {
            scrollLeft: targetX,
            duration: 0.9,
            // Increased duration for deep inertia
            ease: "power2.out",
            overwrite: "auto"
          });
        };
        const handleWheel = (e) => {
          if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            syncScroll(e.deltaX * 1.5);
          }
        };
        const handlePointerDown = (e) => {
          isDragging = true;
          lastX = e.pageX;
          scroller.style.cursor = "grabbing";
          targetX = scroller.scrollLeft;
        };
        const handlePointerMove = (e) => {
          if (!isDragging) return;
          e.preventDefault();
          const x = e.pageX;
          const delta = lastX - x;
          lastX = x;
          syncScroll(delta * 1.5);
        };
        const handlePointerUp = () => {
          isDragging = false;
          scroller.style.cursor = "grab";
        };
        scroller.addEventListener("wheel", handleWheel, { passive: true });
        scroller.addEventListener("pointerdown", handlePointerDown);
        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerup", handlePointerUp);
        const tl = gsap.timeline({
          delay: 0.5,
          onUpdate: () => {
            if (isUserInteracting.current) tl.kill();
          }
        });
        tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2 });
        tl.to(".origin-overlay", { opacity: 0.9, duration: 1 }, "-=0.2");
        const totalWidth = TOTAL_YEARS * YEAR_WIDTH;
        const viewportWidth = scroller.clientWidth || 1e3;
        const centerOffset = viewportWidth / 2 - YEAR_WIDTH / 2;
        const maxScroll = Math.max(0, totalWidth - viewportWidth);
        if (maxScroll > 0) {
          tl.set(scroller, { scrollLeft: -centerOffset });
          tl.to(scroller, { scrollLeft: -centerOffset, duration: 0.4 });
          const center2017 = (2017 - START_YEAR) * YEAR_WIDTH - centerOffset;
          tl.to(scroller, {
            scrollLeft: Math.min(center2017, maxScroll),
            duration: 1,
            ease: "power4.inOut",
            onStart: () => {
              gsap.to(contentRef.current, { scale: 0.99, duration: 0.5, yoyo: true, repeat: 1 });
              gsap.to(".origin-overlay", { opacity: 0, duration: 0.6 });
            }
          });
          tl.to(scroller, {
            scrollLeft: maxScroll,
            duration: 8.5,
            // Further accelerated to 8.5s for optimal responsiveness
            ease: "none",
            onStart: () => {
              gsap.to(".epoch-node", {
                boxShadow: `0 0 30px ${TOKENS2.accent}88`,
                opacity: 1,
                duration: 0.6,
                stagger: 0.05
              });
            }
          });
        }
        return () => {
          tl.kill();
          scroller.removeEventListener("wheel", handleWheel);
          scroller.removeEventListener("pointerdown", handlePointerDown);
          window.removeEventListener("pointermove", handlePointerMove);
          window.removeEventListener("pointerup", handlePointerUp);
        };
      }, [gsap, TOTAL_YEARS, YEAR_WIDTH]);
      return /* @__PURE__ */ React.createElement("div", { ref: containerRef, style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "transparent",
        color: "white",
        overflow: "hidden",
        padding: "60px 0",
        opacity: 1
        // Ensure base visibility
      } }, /* @__PURE__ */ React.createElement("div", { className: "origin-overlay", style: {
        position: "absolute",
        top: "150px",
        right: "60px",
        padding: "12px 24px",
        background: `rgba(15, 15, 20, 0.9)`,
        border: `1px solid ${TOKENS2.accent}44`,
        backdropFilter: "none",
        color: TOKENS2.accent,
        fontSize: "10px",
        fontWeight: 900,
        zIndex: 2e3,
        pointerEvents: "none",
        fontFamily: TOKENS2.fontMono,
        opacity: 0,
        letterSpacing: 2,
        boxShadow: `0 20px 50px rgba(0,0,0,0.8)`
      } }, "[ ARCHIVE_ORIGIN_SYNC // DEC_1999 ]", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "7px", opacity: 0.5, letterSpacing: 1 } }, "DECODING_BIOLOGICAL_INITIATIVE... [SUCCESS]")), /* @__PURE__ */ React.createElement("div", { style: {
        padding: "20px 60px",
        marginBottom: "40px",
        zIndex: 100,
        background: "linear-gradient(to bottom, rgba(5,5,8,0.8), transparent)",
        backdropFilter: "none"
      } }, /* @__PURE__ */ React.createElement("div", { style: { color: TOKENS2.accent, fontSize: "9px", fontWeight: 900, fontFamily: TOKENS2.fontMono, letterSpacing: 4, marginBottom: "6px" } }, "PROTOCOL_CHRONOS // SYSTEM_ARCHIVE_v5.2"), /* @__PURE__ */ React.createElement("h1", { style: { margin: 0, fontSize: "32px", fontWeight: 900, fontFamily: TOKENS2.font, letterSpacing: -1 } }, "BIOGRAPHICAL_TRAJECTORY")), /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: scrollRef,
          onMouseDown: () => isUserInteracting.current = true,
          onPointerDown: () => isUserInteracting.current = true,
          style: {
            height: "680px",
            width: "100%",
            overflowX: "auto",
            overflowY: "hidden",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            position: "relative",
            cursor: "grab",
            zIndex: 9999
          }
        },
        /* @__PURE__ */ React.createElement("style", null, ` .timeline-scroll-container::-webkit-scrollbar { display: none; } `),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            ref: contentRef,
            style: {
              width: `${TOTAL_YEARS * YEAR_WIDTH}px`,
              height: "100%",
              position: "relative",
              padding: "20px 0",
              zIndex: 9999
            }
          },
          Array.from({ length: TOTAL_YEARS }).map((_, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
            position: "absolute",
            left: i * YEAR_WIDTH,
            top: 0,
            bottom: 0,
            width: "1px",
            background: "rgba(255,255,255,0.05)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "20px",
            zIndex: 1
          } }, /* @__PURE__ */ React.createElement("div", { style: {
            fontSize: "10px",
            color: (START_YEAR + i) % 5 === 0 ? TOKENS2.accent : "rgba(255,255,255,0.1)",
            fontFamily: TOKENS2.fontMono,
            transform: "rotate(-90deg) translateX(-10px)",
            opacity: (START_YEAR + i) % 5 === 0 ? 1 : 0.2
          } }, START_YEAR + i))),
          /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: "100%", zIndex: 10 } }, epochs.map((e, i) => {
            const x = (e.start - START_YEAR) * YEAR_WIDTH;
            const w = (e.end - e.start + 1) * YEAR_WIDTH;
            const y = e.track * TRACK_HEIGHT + 20;
            return /* @__PURE__ */ React.createElement(
              "div",
              {
                key: i,
                className: "epoch-node fade-in",
                style: {
                  position: "absolute",
                  left: x,
                  top: y,
                  width: w - 10,
                  height: "30px",
                  background: hoveredItem === e ? "rgba(168, 85, 247, 0.2)" : "rgba(5, 5, 8, 0.6)",
                  backdropFilter: "none",
                  border: `1px solid ${hoveredItem === e ? TOKENS2.accent : e.color + "44"}`,
                  borderRadius: "4px",
                  padding: "0 12px",
                  display: "flex",
                  alignItems: "center",
                  transition: "all 0.3s ease",
                  cursor: "help",
                  opacity: hoveredItem && hoveredItem !== e ? 0.4 : 1,
                  zIndex: hoveredItem === e ? 100 : 10
                },
                onMouseEnter: () => setHoveredItem(e),
                onMouseLeave: () => setHoveredItem(null)
              },
              /* @__PURE__ */ React.createElement("div", { style: { width: "4px", height: "100%", background: e.color, position: "absolute", left: 0 } }),
              /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: 900, fontFamily: TOKENS2.fontMono, color: "white", letterSpacing: 1 } }, e.title.toUpperCase()),
              /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 10, fontSize: "8px", color: TOKENS2.textMuted, opacity: 0.5 } }, e.start === e.end ? e.start : `${e.start} - ${e.end}`)
            );
          }), milestones.map((m, i) => {
            const x = (m.year - START_YEAR) * YEAR_WIDTH + YEAR_WIDTH / 2;
            const y = 3.5 * TRACK_HEIGHT;
            return /* @__PURE__ */ React.createElement(
              "div",
              {
                key: i,
                style: { position: "absolute", left: x, top: y, display: "flex", flexDirection: "column", alignItems: "center" }
              },
              /* @__PURE__ */ React.createElement("div", { style: { width: "1px", height: "60px", background: `linear-gradient(to top, ${TOKENS2.accent}, transparent)` } }),
              /* @__PURE__ */ React.createElement(
                "div",
                {
                  className: "milestone-pin",
                  style: {
                    padding: "12px",
                    background: "rgba(10, 10, 15, 0.9)",
                    border: `1px solid ${hoveredItem === m ? TOKENS2.accent : TOKENS2.accent + "88"}`,
                    borderRadius: "4px",
                    width: "150px",
                    boxShadow: `0 10px 30px rgba(0,0,0,0.5)`,
                    transition: "all 0.3s ease",
                    cursor: "help",
                    opacity: hoveredItem && hoveredItem !== m ? 0.4 : 1,
                    transform: hoveredItem === m ? "scale(1.05)" : "scale(1)"
                  },
                  onMouseEnter: () => setHoveredItem(m),
                  onMouseLeave: () => setHoveredItem(null)
                },
                /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: TOKENS2.accent, fontWeight: 900, marginBottom: "6px" } }, m.year, " // ", m.title),
                /* @__PURE__ */ React.createElement("div", { style: {
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.7)",
                  fontStyle: "italic",
                  position: "relative",
                  paddingLeft: "15px"
                } }, /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: 0, color: TOKENS2.accent } }, '"'), m.quote),
                m.media && /* @__PURE__ */ React.createElement("div", { style: {
                  marginTop: "12px",
                  width: "100%",
                  height: "110px",
                  background: "black",
                  borderRadius: "4px",
                  overflow: "hidden",
                  border: `1px solid rgba(255,255,255,0.1)`,
                  position: "relative"
                } }, /* @__PURE__ */ React.createElement(
                  "video",
                  {
                    src: m.media,
                    autoPlay: true,
                    muted: true,
                    loop: true,
                    playsInline: true,
                    style: { width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }
                  }
                ), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 5, right: 8, fontSize: "7px", color: TOKENS2.accent, opacity: 0.5 } }, "LIVE_FEED"))
              )
            );
          }))
        )
      ), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(90deg, #050508 0%, transparent 100%)", zIndex: 100, pointerEvents: "none" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(-90deg, #050508 0%, transparent 100%)", zIndex: 100, pointerEvents: "none" } }), hoveredItem && /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "fade-in",
          style: {
            position: "absolute",
            bottom: "60px",
            left: "60px",
            width: "500px",
            padding: "40px",
            background: "rgba(5, 5, 8, 0.98)",
            border: `1px solid ${TOKENS2.accent}`,
            borderRadius: "4px",
            zIndex: 1e4,
            pointerEvents: "none",
            boxShadow: `0 20px 60px rgba(0,0,0,0.9)`
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: TOKENS2.accent, fontWeight: 900, fontFamily: TOKENS2.fontMono, letterSpacing: 3, marginBottom: "12px" } }, "INTELLIGENCE_REPORT // ", hoveredItem.year || `${hoveredItem.start}-${hoveredItem.end}`),
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: "20px", fontWeight: 900, color: "white", marginBottom: "8px", letterSpacing: -0.5 } }, hoveredItem.title.toUpperCase()),
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, fontFamily: TOKENS2.fontMono } }, hoveredItem.desc || hoveredItem.quote || "ARCHIVE_DETAILS_ENCRYPTED"),
        /* @__PURE__ */ React.createElement("div", { style: { marginTop: "16px", display: "flex", gap: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: TOKENS2.accent, background: "rgba(168, 85, 247, 0.1)", padding: "2px 8px", borderRadius: "2px", border: `1px solid ${TOKENS2.accent}33` } }, hoveredItem.start ? "EPOCH_ACTIVE" : "MILESTONE_VERIFIED"))
      ));
    }
    var _exports = { TimelineSlide: TimelineSlide2 };
    if (typeof module2 !== "undefined" && module2.exports) module2.exports = _exports;
    return _exports;
  }
});

// src/components/MCPBridge.jsx
var require_MCPBridge = __commonJS({
  "src/components/MCPBridge.jsx"(exports2, module2) {
    function MCPBridge2({ folderPath, dc, onReload, modules }) {
      const { useEffect: useEffect2, useRef: useRef2 } = dc;
      const COMMAND_FILE = folderPath + "/mcp_commands.json";
      useEffect2(() => {
        const adapter = dc.app.vault.adapter;
        const checkCommands = async () => {
          try {
            if (!await adapter.exists(COMMAND_FILE)) return;
            const content = await adapter.read(COMMAND_FILE);
            let cmdData;
            try {
              cmdData = JSON.parse(content);
            } catch (e) {
              return;
            }
            if (cmdData && cmdData.executed === false) {
              console.log("\u{1F916} MCP BRIDGE: Executing action:", cmdData.action);
              let result = "Success";
              const ALLOWED_ACTIONS = ["reload", "screenshot", "devtools", "ping", "open_settings"];
              if (!ALLOWED_ACTIONS.includes(cmdData.action)) throw new Error(`Unauthorized: ${cmdData.action}`);
              if (cmdData.action === "reload") {
                await onReload();
              } else if (cmdData.action === "screenshot") {
                try {
                  const remote = require("@electron/remote") || require("electron").remote;
                  const webContents = remote.getCurrentWebContents();
                  const image = await webContents.capturePage();
                  const b64 = image.toDataURL();
                  const snapshotPath = folderPath + "/mcp_snapshot.txt";
                  await adapter.write(snapshotPath, b64);
                  result = `Snapshot captured to ${snapshotPath}`;
                } catch (e) {
                  result = "Snapshot failed: " + e.message;
                }
              } else if (cmdData.action === "devtools") {
                try {
                  const remote = require("@electron/remote") || require("electron").remote;
                  remote.getCurrentWebContents().openDevTools();
                  result = "DevTools opened";
                } catch (e) {
                  result = "DevTools error: " + e.message;
                }
              } else if (cmdData.action === "open_settings") {
                dc.app.setting.open();
              }
              cmdData.executed = true;
              cmdData.executedAt = (/* @__PURE__ */ new Date()).toISOString();
              cmdData.result = result;
              await adapter.write(COMMAND_FILE, JSON.stringify(cmdData, null, 2));
            }
          } catch (e) {
            console.error("[MCP Bridge] Error:", e);
          }
        };
        const interval = setInterval(checkCommands, 1e3);
        return () => clearInterval(interval);
      }, []);
      return null;
    }
    var _exports = { MCPBridge: MCPBridge2 };
    if (typeof module2 !== "undefined" && module2.exports) module2.exports = _exports;
    return _exports;
  }
});

// src/native/main.jsx
var main_exports = {};
__export(main_exports, {
  default: () => DossierPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var React2 = __toESM(require("react"));
var ReactDOM = __toESM(require("react-dom/client"));
var Styles_Pkg = require_Styles();
var Styles_M = Styles_Pkg.default || Styles_Pkg;
var TOKENS = Styles_M.TOKENS;
var GLOBAL_CSS = Styles_M.GLOBAL_CSS;
var Parser_Pkg = require_Parser();
var Parser_M = Parser_Pkg.default || Parser_Pkg;
var parseResumeMarkdown = Parser_M.parseResumeMarkdown;
var Deployment_Pkg = require_Deployment();
var Deployment_M = Deployment_Pkg.default || Deployment_Pkg;
var getDeploymentLogic = Deployment_M.getDeploymentLogic;
var Adapter_Pkg = require_PlatformAdapter();
var Adapter_M = Adapter_Pkg.default || Adapter_Pkg;
var createAdapter = Adapter_M.createAdapter;
var LoadScript_Pkg = require_loadScript();
var LoadScript_M = LoadScript_Pkg.default || LoadScript_Pkg;
var loadScript = LoadScript_M.loadScript;
var App_Pkg = require_App();
var App = App_Pkg.App || App_Pkg.default?.App || App_Pkg.default || App_Pkg;
var NodeGraph_Pkg = require_NodeGraph();
var NodeGraph = NodeGraph_Pkg.NodeGraph || NodeGraph_Pkg.default?.NodeGraph || NodeGraph_Pkg.default || NodeGraph_Pkg;
var Visuals_Pkg = require_Visuals();
var Visuals_M = Visuals_Pkg.default || Visuals_Pkg;
var GeometricParticles = Visuals_M.GeometricParticles;
var TravelGlobeWidget = Visuals_M.TravelGlobeWidget;
var Content_Pkg = require_Content();
var Content_M = Content_Pkg.default || Content_Pkg;
var IntroSlide = Content_M.IntroSlide;
var CinematicViewer = Content_M.CinematicViewer;
var PrintLayout = Content_M.PrintLayout;
var FloatingScene_Pkg = require_FloatingScene();
var FloatingScene = FloatingScene_Pkg.FloatingScene || FloatingScene_Pkg.default?.FloatingScene || FloatingScene_Pkg.default || FloatingScene_Pkg;
var DeployBridge_Pkg = require_DeployBridge();
var DeployBridge = DeployBridge_Pkg.DeployBridge || DeployBridge_Pkg.default?.DeployBridge || DeployBridge_Pkg.default || DeployBridge_Pkg;
var HyperScroll_Pkg = require_HyperScroll();
var HyperScroll = HyperScroll_Pkg.HyperScroll || HyperScroll_Pkg.default?.HyperScroll || HyperScroll_Pkg.default || HyperScroll_Pkg;
var TimelineSlide_Pkg = require_TimelineSlide();
var TimelineSlide = TimelineSlide_Pkg.TimelineSlide || TimelineSlide_Pkg.default?.TimelineSlide || TimelineSlide_Pkg.default || TimelineSlide_Pkg;
var MCPBridge_Pkg = require_MCPBridge();
var MCPBridge = MCPBridge_Pkg.MCPBridge || MCPBridge_Pkg.default?.MCPBridge || MCPBridge_Pkg.default || MCPBridge_Pkg;
var VIEW_TYPE_DOSSIER = "dossier-os-view";
var DossierView = class extends import_obsidian.ItemView {
  constructor(leaf) {
    super(leaf);
  }
  getViewType() {
    return VIEW_TYPE_DOSSIER;
  }
  getDisplayText() {
    return "Dossier OS";
  }
  async onOpen() {
    const container = this.containerEl.children[1];
    container.empty();
    const Icon = ({ icon, style }) => {
      const icons = {
        zap: "\u26A1",
        github: "\u{1F310}",
        settings: "\u2699\uFE0F",
        loader: "\u23F3",
        target: "\u{1F3AF}",
        terminal: "\u{1F4DF}",
        activity: "\u{1F4C8}",
        database: "\u{1F5C4}\uFE0F"
      };
      return /* @__PURE__ */ React2.createElement("span", { style: { ...style, display: "inline-flex", alignItems: "center", justifyContent: "center" } }, icons[icon] || "\u25C6");
    };
    const dc = {
      useState: React2.useState,
      useEffect: React2.useEffect,
      useRef: React2.useRef,
      useCallback: React2.useCallback,
      useMemo: React2.useMemo,
      app: window.app,
      Icon
    };
    const modules = {
      App,
      TOKENS,
      GLOBAL_CSS,
      parseResumeMarkdown,
      getDeploymentLogic,
      createAdapter,
      loadScript,
      NodeGraph,
      GeometricParticles,
      TravelGlobeWidget,
      IntroSlide,
      CinematicViewer,
      PrintLayout,
      FloatingScene,
      DeployBridge,
      HyperScroll,
      TimelineSlide,
      MCPBridge
    };
    const requiredKeys = [
      "App",
      "NodeGraph",
      "IntroSlide",
      "CinematicViewer",
      "PrintLayout",
      "FloatingScene",
      "TimelineSlide",
      "HyperScroll",
      "MCPBridge",
      "DeployBridge",
      "GeometricParticles",
      "TravelGlobeWidget",
      "getDeploymentLogic",
      "createAdapter"
    ];
    const missing = requiredKeys.filter((k) => !modules[k]);
    const nonFunctions = requiredKeys.filter((k) => modules[k] && typeof modules[k] !== "function");
    if (missing.length > 0) {
      console.error(`[Dossier OS] CRITICAL_FAILURE: Missing Modules: ${missing.join(", ")}`);
    } else if (nonFunctions.length > 0) {
      console.error(`[Dossier OS] TYPE_FAILURE: Non-Function Modules detected: ${nonFunctions.join(", ")}`);
      nonFunctions.forEach((k) => console.log(`[Dossier OS] Improper Value (${k}):`, modules[k]));
    } else {
      console.log(`[Dossier OS] SYSTEM_HEALTH: All 14 core modules verified as valid functions.`);
    }
    const projectPath = "_RESOURCES/DATACORE/142_UltimateResumeBuilder";
    const root = ReactDOM.createRoot(container);
    root.render(/* @__PURE__ */ React2.createElement(App, { dc, modules, folderPath: projectPath }));
  }
};
var DossierPlugin = class extends import_obsidian.Plugin {
  async onload() {
    this.registerView(VIEW_TYPE_DOSSIER, (leaf) => new DossierView(leaf));
    this.addCommand({
      id: "open-dossier-os",
      name: "Open Dossier OS",
      callback: () => this.activateView()
    });
    this.addRibbonIcon("target", "Dossier OS", () => this.activateView());
  }
  async activateView() {
    const { workspace } = this.app;
    let leaf = workspace.getLeavesOfType(VIEW_TYPE_DOSSIER)[0];
    if (!leaf) {
      leaf = workspace.getLeaf("tab");
      await leaf.setViewState({ type: VIEW_TYPE_DOSSIER, active: true });
    }
    workspace.revealLeaf(leaf);
  }
};
