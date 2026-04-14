var Ze=Object.defineProperty;var qt=Object.getOwnPropertyDescriptor;var Xt=Object.getOwnPropertyNames;var Jt=Object.prototype.hasOwnProperty;var oe=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),Zt=(e,n)=>{for(var f in n)Ze(e,f,{get:n[f],enumerable:!0})},Qt=(e,n,f,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let a of Xt(n))!Jt.call(e,a)&&a!==f&&Ze(e,a,{get:()=>n[a],enumerable:!(i=qt(n,a))||i.enumerable});return e};var Kt=e=>Qt(Ze({},"__esModule",{value:!0}),e);var at=oe((qo,Ee)=>{var N={bg:"rgba(5, 5, 5, 1)",glassBg:"rgba(10, 10, 15, 0.25)",accent:"hsl(265, 89%, 66%)",accentCyan:"hsl(190, 90%, 50%)",accentAmber:"hsl(45, 100%, 50%)",text:"#ffffff",textDim:"rgba(255, 255, 255, 0.6)",textMuted:"rgba(255, 255, 255, 0.4)",border:"rgba(255, 255, 255, 0.1)",radius:"16px",font:'"Outfit", sans-serif',fontMono:'"JetBrains Mono", monospace'},eo=`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700;900&family=JetBrains+Mono:wght@400;700&display=swap');

.urb-root {
    --accent: ${N.accent};
    position: relative;
    width: 100%; height: 100%;
    background: ${N.bg};
    color: ${N.text};
    font-family: ${N.font};
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
    border-bottom: 1px solid ${N.border};
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
    border: 1px solid ${N.border};
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
    border-top: 1px solid ${N.border};
    margin-top: 5px;
    display: flex; flex-direction: column; gap: 20px;
}

.urb-briefing-box {
    background: rgba(255,255,255,0.02);
    padding: 15px; border-radius: 4px; border-left: 2px solid ${N.accent};
}
.urb-briefing-text {
    font-size: 10px; line-height: 1.6; color: ${N.textDim};
    letter-spacing: 0.5px; margin-top: 10px;
}

.urb-logo-wrap {
    display: flex; flex-direction: column; align-items: flex-start; gap: 4px;
}
.urb-logo-text {
    font-family: ${N.fontMono}; font-size: 18px; font-weight: 900;
    color: white; letter-spacing: 2px;
}
.urb-logo-text span {
    font-size: 9px; opacity: 0.5; font-weight: 300; letter-spacing: 4px;
    margin-left: 8px;
}
.urb-hud-badge {
    font-family: ${N.fontMono}; font-size: 7px; color: ${N.accent};
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
    font-family: ${N.fontMono}; font-size: 9px; font-weight: 900;
    padding: 6px 12px; border-radius: 4px; cursor: pointer;
    transition: all 0.2s ease; letter-spacing: 1.5px;
}
.urb-act-btn:hover { background: rgba(255,255,255,0.08); color: white; border-color: rgba(255,255,255,0.2); }
.urb-act-btn.active { background: ${N.accent}; color: white; border-color: transparent; }
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
    padding: 12px 16px; font-family: ${N.fontMono}; font-size: 10px;
    color: rgba(255,255,255,0.4); text-align: right; letter-spacing: 2px;
    cursor: pointer; transition: all 0.2s ease; border-radius: 4px;
}
.urb-sector-item:hover { color: white; background: rgba(255,255,255,0.05); }
.urb-sector-item.active { color: ${N.accent}; font-weight: 900; background: rgba(168, 85, 247, 0.05); }

.urb-nav-acts { display: flex; gap: 10px; align-items: center; }

.urb-act-btn {
    padding: 6px 14px; border-radius: 4px; border: 1px solid ${N.border};
    background: rgba(255,255,255,0.02); color: ${N.textDim};
    font-size: 9px; font-weight: 900; letter-spacing: 1.5px;
    cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.urb-act-btn:hover { color: white; background: rgba(255,255,255,0.08); border-color: ${N.accent}; }
.urb-act-btn.active { background: ${N.accent}; color: white; border-color: transparent; }

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
    font-family: ${N.fontMono}; font-size: 8px;
    color: ${N.textMuted}; line-height: 1.5;
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
::-webkit-scrollbar-thumb { background: ${N.accent}; }

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
    font-family: ${N.fontMono};
    font-size: 9px;
    background: rgba(0,0,0,0.4);
    border: 1px solid ${N.border};
    border-radius: 4px;
    padding: 10px;
    overflow-y: auto;
    color: ${N.textDim};
    line-height: 1.5;
}

.urb-mini-terminal::-webkit-scrollbar { width: 3px; }
.urb-mini-terminal::-webkit-scrollbar-thumb { background: ${N.accent}44; }

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

`,rt={TOKENS:N,GLOBAL_CSS:eo};typeof Ee<"u"&&Ee.exports&&(Ee.exports=rt);return rt});var lt=oe((Xo,Ie)=>{function to(e){let n=e.split(`
`),f={groups:[{name:"IDENTITY",items:[]}],nodes:[]},i=null;for(let a of n){let g=a.trim();if(!g)continue;let u=g.match(/^#\s+(\d+)\s+::\s+(.+)/);if(u){let d=u[2].trim().toUpperCase();i={id:`node-${u[1]}`,order:parseInt(u[1]),title:d,desc:"",media:[],bullets:[],groupName:"DOSSIER",panelVideo:null,panelText:"",trigger:null,epochs:[],milestones:[]},f.nodes.push(i),f.groups[0].items.push(i);continue}let p=g.match(/^[*-]\s+(.+)/);if(p&&i){let d=p[1].trim(),s=d.replace(/\*\*/g,"").trim();if(s.toUpperCase().startsWith("PANEL_VIDEO:")){let c=d.match(/!\[\[(.+?)\]\]/);c&&(i.panelVideo=c[1])}else if(s.toUpperCase().startsWith("PANEL_TEXT:")){let c=s.substring(s.indexOf(":")+1).trim();i.panelText=c,i.desc=c}else if(s.toUpperCase().startsWith("TRIGGER:")){let c=s.substring(s.indexOf(":")+1).trim();i.trigger=c,c.includes("Globe")&&(i.showGlobe=!0)}else if(s.toUpperCase().startsWith("PANEL_TYPE:")){let c=s.substring(s.indexOf(":")+1).trim();i.panelType=c}else if(s.toUpperCase().startsWith("MISSION:")){let c=s.substring(s.indexOf(":")+1).trim();i.mission=c}else if(s.toUpperCase().startsWith("CHRONOS_DATA:")){let c=s.substring(s.indexOf(":")+1).trim();i.chronosData=c}else if(s.toUpperCase().startsWith("EPOCH:")){let c=s.substring(s.indexOf(":")+1).trim();i.epochs.push(c)}else if(s.toUpperCase().startsWith("MILESTONE:")){let c=s.substring(s.indexOf(":")+1).trim();i.milestones.push(c)}else if(s.toUpperCase().startsWith("EVENT_DATA:")){let c=s.substring(s.indexOf(":")+1).trim();i.eventData=c}else i.bullets.push(d)}}return f.nodes.sort((a,g)=>a.order-g.order),f.nodes.forEach((a,g)=>{a.index=g,a.isLast=g===f.nodes.length-1,g===0&&(f.about={...a,items:[a]})}),f.about||(f.about={name:"BETO"}),f}var st={parseResumeMarkdown:to};typeof Ie<"u"&&Ie.exports&&(Ie.exports=st);return st});var pt=oe((Jo,Re)=>{var Q=require("fs"),K=require("path"),{exec:oo}=require("child_process");function no(e){let n=a=>a.split("DATACORE/")[1]||a;return{handleLocalDeploy:async({addLog:a,setStatus:g,setIsDeploying:u,folderPath:p})=>{u(!0),g("COMPILING..."),a("DEPLOY_INIT");try{let c=e.app.vault.adapter.getBasePath(),m=K.resolve(c,p),o=K.join(c,".obsidian","plugins","dossier-os"),E=K.join(o,"main.js"),S=K.join(o,"manifest.json");console.log("[Deployment] Paths Resolved:",{component:n(m),plugin:n(o)}),Q.existsSync(o)||(Q.mkdirSync(o,{recursive:!0}),console.log("[Deployment] Created plugin directory."));let A=K.join(m,"manifest.json");Q.existsSync(A)&&(Q.copyFileSync(A,S),console.log("[Deployment] Manifest Synced."),a("MANIFEST_SYNCED"));let x=K.join(m,"main.js");if(Q.existsSync(x))Q.copyFileSync(x,E);else{let I=K.join(m,"src","index.jsx");Q.existsSync(I)&&Q.copyFileSync(I,E)}if(console.log("[Deployment] Bundle Injected to Dossier OS."),a("BUNDLE_INJECTED"),e.app.plugins){let I="dossier-os";await e.app.plugins.disablePlugin(I),await e.app.plugins.enablePlugin(I),console.log("[Deployment] Dossier OS Reinitialized"),a("PLUGIN_RELOADED")}g("IDLE"),u(!1),a("DEPLOY_SUCCESS")}catch(d){console.error("[Deployment] Local deploy FAILED:",d),g("DEPLOY_ERROR"),u(!1),a("DEPLOY_CRASH")}},handlePublish:async({repoName:a,ghToken:g,addLog:u,setStatus:p,setIsPublishing:d,folderPath:s})=>{d(!0),p("PREPARING_GITOPS..."),u("PUBLISH_INIT");let c=g,m="UI_MANUAL";if(!c){console.log("[Deployment] Manual token empty, attempting NATIVE_GRAB...");try{let{execSync:o}=require("child_process"),S=o('security find-generic-password -s "gh:github.com" -w || security find-generic-password -s "github.com" -w || security find-generic-password -s "GitHub" -w',{encoding:"utf8"}).replace(/[\r\n]/g,"").trim();if(S){if(S.startsWith("go-keyring-base64:")){let A=S.split(":")[1].trim();c=typeof Buffer<"u"?Buffer.from(A,"base64").toString("utf8").trim():decodeURIComponent(escape(window.atob(A))).trim()}else c=S;c&&(m="NATIVE_KEYCHAIN",u("NATIVE_GRAB_SUCCESS"))}}catch{}}if(!c||!a){console.error("[Deployment] AUTH_BLOCK: No token or repo defined."),p("CONFIG_REQUIRED"),d(!1);return}console.log(`[Deployment] Starting Public Publish for: ${s}`);try{let o=e.app.vault.adapter.getBasePath(),E=K.resolve(o,s),S=K.join(E,"manifest.json"),A=window.requestUrl||e.app.requestUrl,x=l=>K.relative(o,l);console.log("[Deployment] Paths Resolved (Relative):",{component:x(E),manifest:x(S)});let I="1.0.0",_=K.join(E,"main.js"),F=K.join(E,"src","native","main.tsx");if(console.log("[Deployment] Orchestrating Native Build (esbuild)..."),Q.existsSync(F))try{let{execSync:l}=require("child_process"),h=`/bin/zsh -l -c "npx esbuild ${K.join(E,"src","native","main.tsx")} --bundle --outfile=${_} --minify --platform=node --external:obsidian --external:electron --external:react --external:react-dom --external:react/jsx-runtime --external:\\"react-dom/*\\" --define:process.env.NODE_ENV=\\"'production'\\" --target=es2020 --format=cjs --jsx=transform --loader:.jsx=jsx"`;console.log("[Deployment] Running Build Command..."),l(h,{cwd:E}),Q.existsSync(_)&&(console.log("[Deployment] ESBUILD_SUCCESS: Native bundle generated."),u("AUTO_BUNDLING_SUCCESS")),console.log("[Deployment] PATH_SYNC_SUCCESS: Native entry identified.")}catch(l){console.error("[Deployment] ESBUILD_FAILED:",l.message),u("AUTO_BUNDLING_FAILED")}else console.error("[Deployment] NATIVE_ENTRY_MISSING: main.tsx not found in src/native."),u("NATIVE_ENTRY_MISSING");if(Q.existsSync(S))try{let l=JSON.parse(Q.readFileSync(S,"utf8")),h=l.version.split(".");h[2]=parseInt(h[2]||0)+1,I=h.join("."),l.version=I,Q.writeFileSync(S,JSON.stringify(l,null,"	")),u(`PUBLISH_BUMP_V${I}`),console.log(`[Deployment] Publish Version bump: v${I}`)}catch(l){console.error("[Deployment] Publish version bump error:",l)}console.log("[Deployment] Requesting GitHub authentication...");let P=await A({url:"https://api.github.com/user",method:"GET",headers:{Authorization:`token ${c}`,Accept:"application/vnd.github.v3+json"}});if(P.status!==200)throw console.error("[Deployment] Auth FAILED (Status:",P.status,")"),console.error("[Deployment] Auth Error Details:",P.json||P.text),new Error(`AUTH_FAILED_${P.status}`);let{login:L}=P.json;console.log(`[Deployment] Authenticated as: ${L}`),console.log(`[Deployment] Verifying repository: ${L}/${a}`);let v=!1;try{let l=await A({url:`https://api.github.com/repos/${L}/${a}`,method:"GET",headers:{Authorization:`token ${c}`,Accept:"application/vnd.github.v3+json"}});l.status===404?v=!0:l.status!==200&&console.warn("[Deployment] Repo check warning (Status:",l.status,")")}catch(l){if(l.message?.includes("404")||l.status===404)console.log("[Deployment] 404 Signal Caught (Repo Missing)"),v=!0;else throw console.error("[Deployment] Repo check CRASH:",l),l}if(v){console.log(`[Deployment] Repo missing. Auto-provisioning: ${a}...`),u("PROVISIONING_REPO");let l=await A({url:"https://api.github.com/user/repos",method:"POST",headers:{Authorization:`token ${c}`,"Content-Type":"application/json"},body:JSON.stringify({name:a,description:"Cinematic Dossier OS // Generated by Ultimate Resume Builder.",private:!1,has_issues:!0,has_projects:!1,has_wiki:!1})});if(l.status!==201)throw console.error("[Deployment] Repo creation FAILED:",l.json),new Error("PROVISIONING_FAILED");console.log("[Deployment] Repository Created successfully."),u("PROVISION_SUCCESS")}let r=`https://${c}@github.com/${L}/${a}.git`,R=`v${I}`,w=`
                git init && 
                git checkout -b main || git checkout main &&
                git remote add origin ${r} || git remote set-url origin ${r} && 
                git add -A && 
                git commit -m "Dossier Update [v${I}]" && 
                git tag v${I} &&
                git push -u origin main --force &&
                git push origin --tags
            `;console.log("[Deployment] Executing Git Push..."),p("GITOPS_PUSHING..."),u("GIT_START");let t=oo(w,{cwd:E});t.stdout.on("data",l=>console.log("[Deployment] [STDOUT]",l)),t.stderr.on("data",l=>console.warn("[Deployment] [STDERR]",l)),t.on("close",async l=>{if(l===0){console.log("[Deployment] Git Push SUCCESS"),u("GIT_SUCCESS");try{let h=`v${I}`;console.log(`[Deployment] Syncing Release Assets for ${h}...`);let D=await A({url:`https://api.github.com/repos/${L}/${a}/releases/tags/${h}?t=${Date.now()}`,headers:{Authorization:`token ${c}`,Accept:"application/vnd.github.v3+json","Cache-Control":"no-cache"},throw:!1}),y;if(D.status===200?(y=D.json,console.log("[Deployment] Existing release found. Updating assets...")):(console.log("[Deployment] Creating new release..."),y=(await A({url:`https://api.github.com/repos/${L}/${a}/releases`,method:"POST",headers:{Authorization:`token ${c}`,"Content-Type":"application/json"},body:JSON.stringify({tag_name:h,name:`Resume Dossier ${h}`,body:"Automated Resilient Release (Native Grab).",draft:!1}),throw:!1})).json),!y||!y.upload_url)throw new Error("Could not find release target.");let T=y.upload_url.split("{")[0];if(y.assets&&y.assets.length>0){let O=["main.js","manifest.json","styles.css"];for(let z of y.assets)if(O.includes(z.name)){console.log(`[Deployment] Purging stale asset: ${z.name}`);try{await A({url:`https://api.github.com/repos/${L}/${a}/releases/assets/${z.id}`,method:"DELETE",headers:{Authorization:`token ${c}`}})}catch{}}}let M=[{name:"main.js",path:K.join(E,"main.js")},{name:"manifest.json",path:K.join(E,"manifest.json")}];for(let O of M)if(Q.existsSync(O.path)){console.log(`[Deployment] Uploading binary asset: ${O.name}`),u(`UPLOAD_${O.name.toUpperCase()}`);let z=Q.readFileSync(O.path);(await A({url:`${T}?name=${O.name}`,method:"POST",headers:{Authorization:`token ${c}`,"Content-Type":"application/octet-stream"},body:new Uint8Array(z).buffer})).status===201&&console.log(`[Deployment] Asset ${O.name} uploaded successfully.`)}u("RELEASE_READY")}catch(h){console.error("[Deployment] Release Asset Sync FAILED:",h),u("RELEASE_SYNC_FAILED")}p("IDLE"),d(!1),u("PUBLISH_COMPLETE")}else console.error("[Deployment] Git FAILED (Exit Code:",l,")"),p("GIT_ERROR"),d(!1),u("GIT_FAILURE")})}catch(o){console.error("[Deployment] Public sync EXCEPTION:",o),p("SYNC_ERROR"),d(!1),u("PUBLISH_CRASH")}}}}var ct={getDeploymentLogic:no};typeof Re<"u"&&Re.exports&&(Re.exports=ct);return ct});var ut=oe((Zo,Ce)=>{var io=(e,n)=>{let f=!!e,i=!!window.app&&!f,a=!window.app&&!f,g=n?.TOKENS||{};return{isDataCore:f,isNative:i,isWeb:a,TOKENS:g,requireAsset:async s=>{if(f)return await e.require(s);if(i){let c=window.require("fs"),m=window.require("electron");return null}return null},getVaultData:async s=>{if(f)return await e.app.vault.adapter.read(s);if(i)return await window.app.vault.adapter.read(s);if(a)return await(await fetch(`/api/vault?path=${encodeURIComponent(s)}`)).json()},deploy:async(s,c)=>{console.log(`[Adapter] [DEPLOY] Target: ${s}`)}}},dt={createAdapter:io};typeof Ce<"u"&&Ce.exports&&(Ce.exports=dt);return dt});var gt=oe((Qo,Ae)=>{async function ro(e,n,f={}){let{globalName:i=null}=f;return i&&window[i]?Promise.resolve(window[i]):new Promise((a,g)=>{let u=document.createElement("script");u.src=n,u.async=!0,u.onload=()=>{a(i?window[i]:u)},u.onerror=p=>{console.error(`[URB_LoadScript] Error loading ${n}:`,p),g(new Error(`Failed to load script: ${n}`))},document.head.appendChild(u)})}var ft={loadScript:ro};typeof Ae<"u"&&Ae.exports&&(Ae.exports=ft);return ft});var bt=oe((Ko,De)=>{function ao({dc:e,modules:n,folderPath:f,onExport:i}){let{useState:a,useEffect:g,useRef:u,useCallback:p,useMemo:d}=e,{TOKENS:s,GLOBAL_CSS:c,parseResumeMarkdown:m,NodeGraph:o,GeometricParticles:E,CinematicViewer:S,FloatingScene:A,PrintLayout:x,DeployBridge:I,MCPBridge:_}=n,F=d(()=>n.createAdapter(e,n),[e,n]),P=u(null),L=u(null),[v,r]=a(null),[R,w]=a(null),[t,l]=a(0),[h,D]=a(!1),y=u({THREE:null,gsap:null}),T=u(null),[M,O]=a(!0),[z,G]=a(!1),[$,b]=a(!1),[H,ae]=a(!1),[Y,X]=a(!1),[se,ne]=a(!1),[fe,le]=a(null),[V,ce]=a(!1),[be,me]=a(0),[k,U]=a("dark");g(()=>{if(z&&v?.about?.name){let C=document.title,B=k.toUpperCase(),q=new Date().toISOString().slice(0,10).replace(/-/g,"_"),W=v.about.name.toUpperCase().replace(/\s+/g,"_");return document.title=`CLASSIFIED_DOSSIER_${W}_[${B}]_${q}`,console.log(`[URB_HOIST] Filename Synced: ${document.title}`),()=>{document.title=C}}},[z,k,v]);let[J,j]=a("IDLE"),[pe,ee]=a("IDENTITY"),[te,ie]=a(!1),[Z,Ve]=a(!1),[qe,Ft]=a([]),[xe,Wt]=a(localStorage.getItem("urb_repo_name")||"ultimate-resume-builder"),[Xe,et]=a(""),he=d(()=>n.getDeploymentLogic(e),[n,e]),ve=p(C=>Ft(B=>[C,...B].slice(0,5)),[]),Gt=async C=>{et(C);let B=e.app.secretStorage||window.app?.secretStorage;B&&typeof B.setSecret=="function"&&await B.setSecret("urb-github-token",C)},tt=p(async()=>{if(console.log("%c[App] COMMAND: COMPILE_LOCAL","background: #f59e0b; color: #000; font-weight: bold; padding: 2px 5px; border-radius: 2px;"),!he){console.error("[App] deploymentLogic MISSING");return}await he.handleLocalDeploy({addLog:ve,setStatus:j,setIsDeploying:ie,folderPath:f})},[he,ve,j,f]),ot=p(async()=>{console.log("%c[App] COMMAND: PUBLISH_WEB","background: #10b981; color: #fff; font-weight: bold; padding: 2px 5px; border-radius: 2px;"),await he.handlePublish({repoName:xe,ghToken:Xe,addLog:ve,setStatus:j,setIsPublishing:Ve,folderPath:f})},[he,xe,Xe,ve,j,f]),nt=p(()=>{T.current&&clearTimeout(T.current),O(!0)},[]),jt=p((C=!1)=>{T.current&&clearTimeout(T.current),!(H&&!C)&&(T.current=setTimeout(()=>{O(!1)},600))},[H]);g(()=>()=>{T.current&&clearTimeout(T.current)},[]);let Yt=p(C=>{if(C){if(w(C),v?.nodes){let B=v.nodes.findIndex(q=>q.id===C.id);B!==-1&&l(B)}le(C)}},[v]),Je=p(C=>{if(!(!v?.nodes||z||H)&&!C.target.closest(".cinematic-frame")&&(C.preventDefault(),L.current)){let B=Math.max(-400,Math.min(400,C.deltaY));L.current.spin(B),V&&ce(!1)}},[v,V,z,H]);g(()=>{let C=!0;async function B(){try{let ue=await n.loadScript(e,"https://unpkg.com/three@0.149.0/build/three.min.js",{globalName:"THREE"}),it=await n.loadScript(e,"https://unpkg.com/gsap@3.12.5/dist/gsap.min.js",{globalName:"gsap"});C&&(y.current.THREE=ue,y.current.gsap=it,D(!0))}catch(ue){console.error("[URB] Dependency load failed:",ue)}let q=e.app.secretStorage||window.app?.secretStorage,W="",de="NONE";if(q&&typeof q.getSecret=="function"){let ue=await q.getSecret("urb-github-token")||await q.getSecret("dc-github-token");ue&&(W=ue.trim(),de="MANUAL_UI")}if(!W)try{let{execSync:ue}=require("child_process"),Se=ue('security find-generic-password -s "gh:github.com" -w || security find-generic-password -s "github.com" -w || security find-generic-password -s "GitHub" -w',{encoding:"utf8"}).replace(/[\r\n]/g,"").trim();if(Se){if(Se.startsWith("go-keyring-base64:"))try{let we=Se.split(":")[1].trim();typeof Buffer<"u"?W=Buffer.from(we,"base64").toString("utf8").trim():W=decodeURIComponent(escape(window.atob(we))).trim()}catch(we){console.error("[App] Keychain decode failed:",we)}else W=Se;W&&(de="NATIVE_KEYCHAIN")}}catch{}C&&W&&(console.log(`%c[App] AUTH_READY [Source: ${de}]: prefix=${W.slice(0,4)}, len=${W.length}`,"color: #10b981; font-weight: bold;"),et(W))}return B(),()=>{C=!1}},[]),g(()=>{async function C(){try{let B=e.app.vault,q="_RESOURCES/DATACORE/142_UltimateResumeBuilder/_resources/data/resume.md",W="";if(await B.adapter.exists(q)&&(W=await B.adapter.read(q)),W){let de=m(W);r(de),de.nodes?.length>0&&(w(de.nodes[0]),l(0),de.groups?.[0]&&ee(de.groups[0].name))}}catch(B){console.error("[URB] Data Load Error:",B)}}C()},[f]),g(()=>{let C=P.current;return C&&C.addEventListener("wheel",Je,{passive:!1}),()=>C?.removeEventListener("wheel",Je)},[Je]),g(()=>{let C=setTimeout(()=>{if(console.log("[URB] Initiating FullTab Reparenting..."),!P.current)return;let B=P.current,q=B.closest(".workspace-leaf")||document.querySelector(".workspace-leaf.mod-active");if(!q){console.warn("[URB] No active leaf found for reparenting.");return}let W=q.querySelector(".view-content");if(!W){console.warn("[URB] No .view-content found in leaf.");return}window.getComputedStyle(W).position==="static"&&(W.style.position="relative"),W.style.overflow="hidden",W.appendChild(B),Object.assign(B.style,{position:"absolute",inset:"0px",zIndex:"9998",display:"flex"}),console.log("[URB] FullTab Reparenting SUCCESS. Managed by BETO.SKILL.")},800);return()=>clearTimeout(C)},[]);let Vt=async()=>{console.log(`[URB_HOIST] Initiating Manifest (Theme: ${k})...`);let C=document.querySelector(".urb-print-area");if(!C){console.error("[URB_HOIST] CRITICAL_FAILURE: Manifest target not found.");return}let B=C.parentElement,q=C.nextSibling;try{console.log("[URB_HOIST] Reparenting Manifest to Document Root..."),document.body.appendChild(C),document.body.classList.add("urb-is-printing"),document.body.classList.add(`urb-theme-${k}`),console.log("[URB_HOIST] Handover to Browser Manifest Engine..."),window.print(),setTimeout(()=>{console.log("[URB_HOIST] Restoring Manifest to Orbital Position..."),q?B.insertBefore(C,q):B.appendChild(C),document.body.classList.remove("urb-is-printing"),document.body.classList.remove("urb-theme-dark"),document.body.classList.remove("urb-theme-light"),j("IDLE")},600)}catch(W){console.error("[URB_HOIST] Extraction Crash:",W),document.body.classList.remove("urb-is-printing"),j("ERROR_HOIST")}};return v?React.createElement("div",{ref:P,className:`urb-root ${z?"urb-print-mode":""}`,style:{height:"100vh",display:"flex",flexDirection:"column",position:"relative",background:"#050508"}},React.createElement("style",null,c+`
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
            `),React.createElement("div",{className:"urb-hover-sensor",onMouseEnter:nt}),React.createElement("div",{className:"urb-viewport fade-in",style:{height:"100%",position:"relative",overflow:"hidden",background:"#050508"}},React.createElement("div",{style:{opacity:R?.panelType==="TIMELINE"?.2:1,transition:"opacity 1s ease"}},React.createElement(E,{dc:e,modules:n,TOKENS:s})),React.createElement("div",{style:{position:"absolute",inset:0,zIndex:100,pointerEvents:"none",opacity:R?.panelType==="TIMELINE"?.15:1,transition:"opacity 1s ease"}},React.createElement(o,{data:v,dc:e,modules:n,focusedNode:R,onNodeFocus:Yt,onScrollChange:me,TOKENS:s,controlRef:L})),React.createElement("div",{className:"cinematic-immersion-stage",style:{position:"absolute",inset:0,zIndex:200,pointerEvents:"none"}},h&&React.createElement(A,{node:R,scroll:be,activeTab:pe,isAutoPlay:V,dc:e,modules:{...n,...y.current},TOKENS:s}))),z&&React.createElement("div",{className:"urb-export-modal fade-in",style:{position:"absolute",inset:0,zIndex:20002,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.85)",backdropFilter:"none"}},React.createElement("div",{className:"cinematic-frame fade-in",style:{width:"90%",height:"85vh",maxWidth:"1000px",display:"flex",flexDirection:"column"}},React.createElement("div",{className:"urb-export-glass",style:{position:"relative",width:"100%",height:"100%",background:s.glassBg,borderRadius:"8px",overflow:"hidden",border:`1px solid ${s.border}`,boxShadow:"0 60px 120px rgba(0,0,0,0.95)",backdropFilter:"none",display:"flex",flexDirection:"column"}},React.createElement("div",{className:"urb-export-header",style:{padding:"15px 25px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.02)"}},React.createElement("div",{style:{display:"flex",alignItems:"center",gap:12}},React.createElement("div",{style:{width:10,height:10,borderRadius:"50%",background:"#ff5f56"}}),React.createElement("div",{style:{fontSize:10,color:s.textDim,fontFamily:s.fontMono,letterSpacing:2}},"MANIFEST://CLASSIFIED_DOSSIER_",v?.about?.name?.toUpperCase()||"BETO","_2026.pdf")),React.createElement("div",{style:{display:"flex",gap:6}},React.createElement("button",{className:`urb-act-btn ${k==="dark"?"active":""}`,onClick:()=>U("dark"),style:{fontSize:7,padding:"4px 8px"}},"DARK_DOSSIER"),React.createElement("button",{className:`urb-act-btn ${k==="light"?"active":""}`,onClick:()=>U("light"),style:{fontSize:7,padding:"4px 8px"}},"LIGHT_MANIFEST")),React.createElement("div",{style:{width:1,height:20,background:"rgba(255,255,255,0.1)",margin:"0 5px"}}),React.createElement("button",{className:"urb-act-btn primary",onClick:Vt},"MANIFEST_PHYSICAL"),React.createElement("button",{className:"urb-act-btn",onClick:()=>G(!1)},"CLOSE")),React.createElement("div",{className:"urb-preview-container",onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),style:{overflowY:$?"auto":"hidden",cursor:$?"crosshair":"zoom-in"}},React.createElement("div",{className:`urb-preview-content ${$?"zoomed":"scaled"}`,style:{transform:$?"scale(1)":"scale(0.32)"}},React.createElement("div",{className:"urb-print-area"},React.createElement(x,{data:v,TOKENS:s,dc:e}))))))),v&&React.createElement("div",{id:"urb-hud-stack",onMouseEnter:nt,onMouseLeave:()=>jt(),style:{position:"absolute",top:0,left:0,right:0,zIndex:2e4,display:"flex",flexDirection:"column",padding:"30px 40px 60px 40px",background:"linear-gradient(to bottom, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.4) 40%, transparent 100%)",backdropFilter:"blur(25px) saturate(180%)",borderBottom:`1px solid ${s.border}`,opacity:M?1:0,pointerEvents:M?"auto":"none",transform:`translateY(${M?"0":"-10px"})`,transition:"opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"}},React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}},React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:6}},React.createElement("div",{style:{fontSize:24,fontWeight:900,letterSpacing:-1,color:"white",fontFamily:s.font,display:"flex",alignItems:"baseline",gap:10}},"BETO.PORTFOLIO ",React.createElement("span",{style:{fontSize:9,opacity:.4,color:s.accent,fontWeight:900,letterSpacing:3}},"SYSTEM_CORE")),React.createElement("div",{style:{fontSize:9,color:s.accent,fontWeight:900,letterSpacing:2,border:`1px solid ${s.accent}33`,padding:"4px 10px",borderRadius:2,background:"rgba(168, 85, 247, 0.05)",display:"inline-block",alignSelf:"flex-start"}},"PROTOCOL_DOSSIER // USER: ",String(v?.about?.name||"BETO").toUpperCase())),React.createElement("div",{style:{display:"flex",gap:10,alignItems:"center"}},J!=="IDLE"&&React.createElement("div",{style:{fontSize:9,color:s.accent,marginRight:15,fontFamily:s.fontMono,opacity:.8,animation:"urb-pulse 2s infinite"}},"[SYSTEM_STATUS: ",J,"]"),React.createElement("button",{className:"urb-act-btn",onClick:()=>G(!0),style:{padding:"10px 18px"}},"PDF_PROTO"),React.createElement("button",{className:`urb-act-btn ${te?"active":""}`,onClick:tt,disabled:te||Z,style:{padding:"10px 18px"},title:"Compile & Deploy to Obsidian"},React.createElement(e.Icon,{icon:te?"loader":"zap",style:{width:12,marginRight:te?0:6}}),!te&&"COMPILE"),React.createElement("button",{className:`urb-act-btn ${Z?"active":""}`,onClick:ot,disabled:Z||te,style:{border:`1px solid ${s.accent}44`,padding:"10px 18px"},title:"One-Click Publish to GitHub"},React.createElement(e.Icon,{icon:Z?"loader":"github",style:{width:12,marginRight:Z?0:6}}),!Z&&"PUBLISH"),React.createElement("button",{className:`urb-act-btn ${H?"active":""}`,onClick:()=>{console.log("%c[App] COMMAND: SETTINGS_TOGGLE","background: #a855f7; color: #fff; font-weight: bold; padding: 2px 5px; border-radius: 2px;"),ae(!H)},style:{padding:"10px 14px"}},React.createElement(e.Icon,{icon:"settings",style:{width:14}})),React.createElement("button",{className:"urb-act-btn",onClick:()=>{console.log("%c[App] COMMAND: EXIT_CLEANUP","background: #ef4444; color: #fff; font-weight: bold; padding: 2px 5px; border-radius: 2px;"),e.app.workspace.activeLeaf?.detach()},style:{padding:"10px 18px"}},"EXIT"))),React.createElement(_,{folderPath:f,dc:e,modules:n,onReload:()=>e.app.workspace.activeLeaf?.rebuildView?.()})),H&&v&&React.createElement("div",{className:"urb-settings-wrapper"},React.createElement("div",{className:"urb-settings-panel fade-in"},React.createElement("div",{style:{fontSize:10,fontWeight:900,color:s.accent,letterSpacing:2,marginBottom:10}},"[ SYSTEM_CONFIGURATION ]"),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:15}},React.createElement("input",{className:"urb-input",placeholder:"DEPLOY_REPO_ID",value:xe,onChange:C=>Wt(C.target.value)}),React.createElement("input",{className:"urb-input",type:"password",placeholder:"GH_AUTH_TOKEN_ACTIVE",value:Xe,onChange:C=>Gt(C.target.value)}),React.createElement("button",{className:"urb-act-btn",style:{padding:"10px",background:"rgba(16, 185, 129, 0.1)",border:"1px solid #10b98144",color:"#10b981",fontSize:9,fontWeight:900,letterSpacing:1},onClick:()=>{let C=`https://github.com/beto-group/${xe}`;window.open(C,"_blank")}},React.createElement(e.Icon,{icon:"github",style:{width:10,marginRight:6}}),"VISIT_REPOSITORY"),React.createElement("div",{style:{marginTop:10}},React.createElement(I,{TOKENS:s,isDeploying:te,isPublishing:Z,handleDeploy:tt,handlePublish:ot,logs:qe,status:J})))))):React.createElement("div",{style:{color:"white",padding:20}},"Initializing Elite Resume Interface...")}var mt={App:ao};typeof De<"u"&&De.exports&&(De.exports=mt);return mt});var yt=oe((en,Te)=>{function so({data:e,dc:n,modules:f,focusedNode:i,onNodeFocus:a,onScrollChange:g,TOKENS:u,controlRef:p}){let{useEffect:d,useRef:s,useState:c,useMemo:m}=n,{THREE:o,gsap:E}=f,S=s(null),A=s(null),[x,I]=c({width:0,height:0}),_=s(0),F=s(0),P=s(0),L=s(null),v=s("BETO_CORE"),r=s({scene:null,camera:null,renderer:null,instancedHubs:null,orbits:[]});d(()=>{if(!o||!A.current)return;let w=A.current,t=w.clientWidth,l=w.clientHeight,h=new o.Scene,D=new o.PerspectiveCamera(30,t/l,1,3e3);D.position.z=800;let y=new o.WebGLRenderer({alpha:!0,antialias:!0});y.setSize(t,l),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.insertBefore(y.domElement,w.firstChild),y.domElement.style.position="absolute",y.domElement.style.inset="0",y.domElement.style.zIndex="1",r.current={scene:h,camera:D,renderer:y,instancedHubs:null,orbits:[]};let T=()=>{r.current.animationId=requestAnimationFrame(T),r.current.instancedHubs,y.render(h,D)};return T(),()=>{cancelAnimationFrame(r.current.animationId),y.dispose(),w.contains(y.domElement)&&w.removeChild(y.domElement)}},[o]);let R=m(()=>{let{width:w,height:t}=x;if(!t||!w)return{yearSegments:[],monthHubs:[],itemHubs:[],radii:{}};let l=Math.max(.7,Math.min(1.3,t/900))*.9,h=90*l,D=220*l,y=430*l,T=.35,M=.2,O=.69,z=0,G=[],$=[],b=[],H="ARCHIVE",ae=z;if(e?.groups?.forEach(Y=>{Y.items.forEach((X,se)=>{let ne=z;b.push({...X,angle:ne,year:H,parentId:`m-${H}-${Y.name}`}),z+=T}),z+=M,$.push({id:`m-${H}-${Y.name}`,angle:b[b.length-1]?.angle||z,name:Y.name.toUpperCase(),year:H})}),G.push({year:H,start:ae,end:z-O}),r.current.scene){let{scene:Y}=r.current;r.current.instancedHubs&&Y.remove(r.current.instancedHubs),r.current.orbits.forEach(le=>Y.remove(le)),r.current.orbits=[];let X=le=>{let V=new o.BufferGeometry,ce=[];for(let me=0;me<=64;me++){let k=me/64*Math.PI*2;ce.push(new o.Vector3(Math.cos(k)*le,Math.sin(k)*le,0))}V.setFromPoints(ce);let be=new o.Line(V,new o.LineBasicMaterial({color:16777215,transparent:!0,opacity:.1}));Y.add(be),r.current.orbits.push(be)};X(D),X(y);let se=new o.CircleGeometry(5,12),ne=new o.MeshBasicMaterial({color:16777215,transparent:!0,opacity:.5}),fe=new o.InstancedMesh(se,ne,b.length);Y.add(fe),r.current.instancedHubs=fe}return{yearSegments:G,monthHubs:$,itemHubs:b,radii:{R_YEAR:h,R_MONTH:D,R_ITEM:y},scaleFactor:l}},[e,x]);return d(()=>{p&&(p.current={spin:w=>{let t=F.current-w*6e-4,l=R.itemHubs||[];if(l.length>0){let D=l[l.length-1].angle;t=Math.max(0,Math.min(D,t))}F.current=t,P.current=Math.min(1,P.current+.1)}})},[p,R]),d(()=>{i&&i.angle!==void 0&&(F.current=i.angle)},[i]),d(()=>{i&&(P.current=1.8,F.current+=Math.random()>.5?.05:-.05)},[i?.id]),d(()=>{let w=A.current;if(!w)return;let t=new ResizeObserver(l=>{if(!l[0])return;let{width:h,height:D}=l[0].contentRect;I({width:h,height:D}),r.current.renderer&&(r.current.renderer.setSize(h,D),r.current.camera.aspect=h/D,r.current.camera.updateProjectionMatrix())});return t.observe(w),()=>{t.disconnect()}},[]),d(()=>{let w=S.current;if(!w||!x.width)return;let t=w.getContext("2d"),{width:l,height:h}=x,D=window.devicePixelRatio||1;w.width=l*D,w.height=h*D,t.scale(D,D);let y=()=>{let M=Date.now()*6e-4,{yearSegments:O,monthHubs:z,itemHubs:G,radii:$,scaleFactor:b}=R,{R_YEAR:H,R_MONTH:ae,R_ITEM:Y}=$||{};_.current+=(F.current-_.current)*.1;let X=_.current;if(P.current*=.95,typeof g=="function"&&g(X),r.current.instancedHubs){let k=new o.Matrix4,U=-l/2-150*b,J=h/2-h*.12;G.forEach((j,pe)=>{let ee=(j.angle-X)%6.28,te=Math.abs(ee>Math.PI?ee-6.28:ee<-Math.PI?ee+6.28:ee),ie=Math.pow(Math.max(0,1-te*2.5),2),Z=i?.id===j.id;k.makeTranslation(Math.cos(ee)*Y+U,Math.sin(ee)*Y+J,0),r.current.instancedHubs.setMatrixAt(pe,k),r.current.instancedHubs.setColorAt(pe,new o.Color(Z?u.accent:16777215))}),r.current.instancedHubs.instanceMatrix.needsUpdate=!0,r.current.instancedHubs.instanceColor&&(r.current.instancedHubs.instanceColor.needsUpdate=!0)}let se=k=>{let U=(k-X)%6.28;return U>3.14&&(U-=6.28),U<-3.14&&(U+=6.28),{ang:U,x:Math.cos(U),y:Math.sin(U),dist:U}},ne=null,fe=999;G.forEach(k=>{let U=se(k.angle);Math.abs(U.dist)<fe&&(fe=Math.abs(U.dist),ne=k)}),t.clearRect(0,0,l,h),t.save(),t.translate(0,h*.1),t.save();let le=(55+P.current*25)*b;t.rotate(M*.3),t.strokeStyle=`rgba(255,255,255,${.15+P.current*.4})`,t.lineWidth=(1+P.current*1.5)*b;for(let k=0;k<8;k++){let U=k/8*Math.PI;t.beginPath(),t.ellipse(0,0,le,le*Math.abs(Math.sin(M+U)),M+U,0,6.28),t.stroke()}t.beginPath(),t.arc(0,0,(15+P.current*10)*b,0,6.28),t.fillStyle=`rgba(255,255,255,${.4+P.current*.6})`,t.fill(),t.restore(),t.save(),t.strokeStyle="rgba(255,255,255,0.06)",t.lineWidth=1*b,[ae,Y].forEach(k=>{t.beginPath(),t.arc(0,0,k,0,6.28),t.stroke()}),t.strokeStyle="rgba(168,85,247,0.12)",t.setLineDash([5*b,15*b]),t.beginPath(),t.arc(0,0,H*1.5,0,6.28),t.stroke(),t.setLineDash([]),t.restore(),O.forEach(k=>{let U=se(k.start),J=se(k.end);if(Math.abs(U.dist)>2.5&&Math.abs(J.dist)>2.5)return;t.strokeStyle=`rgba(168, 85, 247, ${.1})`,t.lineWidth=3*b,t.beginPath(),t.arc(-150*b,0,H,U.ang,J.ang),t.stroke();let j=se(k.start+.15);t.save(),t.translate(j.x*H-150*b,j.y*H),t.rotate(0),t.fillStyle=i?"rgba(168, 85, 247, 0.4)":u.accent,t.font=`900 ${18*b}px ${u.font}`,t.textAlign="center",t.fillText(k.year,0,0),t.strokeStyle="rgba(255,255,255,0.15)",t.lineWidth=1*b,t.beginPath(),t.moveTo(-30*b,25*b),t.lineTo(30*b,25*b),t.stroke(),t.fillStyle="rgba(255, 255, 255, 0.2)",t.font=`700 ${10*b}px ${u.fontMono}`,t.fillText("\u25B6 SYSTEM_MANIFEST",0,45*b),t.restore()}),G.forEach(k=>{let U=se(k.angle),J=Math.abs(U.dist);if(J>1.2)return;let j=i?.id===k.id,pe=j?1:Math.pow(Math.max(0,1-J*2.5),2),ee=U.x*Y,te=U.y*Y;if(j&&J<.5){t.beginPath(),t.moveTo(0,0),t.lineTo(ee,te),t.strokeStyle=`rgba(168, 85, 247, ${pe*.3})`,t.lineWidth=.5*b,t.stroke(),t.fillStyle=`rgba(168, 85, 247, ${pe*.8})`,t.font=`900 ${7*b}px monospace`;for(let ie=0;ie<8;ie++){let Z=(ie/8+M*1.8)%1;t.fillText(ie%2===0?"1":"0",ee*Z,te*Z)}}if(t.beginPath(),t.arc(ee,te,(j?18:8)*b,0,6.28),t.fillStyle=j?u.accent:`rgba(168, 85, 247, ${pe*.6})`,t.fill(),J<.25){t.save(),t.translate(ee,te),t.rotate(U.ang);let ie=(k.title||"").toUpperCase(),Z=ie.length>12?Math.max(.5,1-(ie.length-12)*.05):1,Ve=j?i?.4:.8:pe*.15;t.fillStyle=`rgba(255,255,255,${Ve})`,t.font=`${j?900:400} ${j?24*b*Z:14*b*Z}px ${u.font}`;let qe=j&&ie.length>10?10*b:5*b;t.fillText(ie,(j?28:16)*b,qe),t.restore()}}),t.restore();let V=b*.8,ce=60*V;t.textAlign="right";let be=ne?.year||"2025",me="DOSSIER";t.fillStyle=u.accent,t.font=`900 ${12*V}px ${u.fontMono}`,t.fillText("BETO_OS",l-ce,45*V),t.fillStyle="rgba(255,255,255,1)",t.font=`900 ${72*V}px ${u.font}`,t.fillText(me,l-ce,105*V),t.fillStyle="rgba(255,255,255,0.3)",t.font=`700 ${11*V}px ${u.fontMono}`;for(let k=0;k<3;k++){let J="D.q.0x"+((Math.floor(M*10)+k)*1337%65535).toString(16).toUpperCase().padStart(4,"0");t.fillText(`\u2022 ${J}`,l-ce,125*V+k*18*V)}t.fillStyle="rgba(255,255,255,0.5)",t.font=`900 ${10*V}px ${u.fontMono}`,t.fillText(v.current,l-ce,65*V),ne&&fe<.28?L.current!==ne.id&&(L.current=ne.id,P.current=1,a&&a(ne),ne.location&&(v.current=ne.location.toUpperCase())):fe>.4&&L.current,T=requestAnimationFrame(y)},T=requestAnimationFrame(y);return()=>cancelAnimationFrame(T)},[R,x,i,a]),React.createElement("div",{ref:A,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",pointerEvents:"none"}},React.createElement("canvas",{ref:S,style:{width:"100%",height:"100%",display:"block"}}))}var ht={NodeGraph:so};typeof Te<"u"&&Te.exports&&(Te.exports=ht);return ht});var vt=oe((tn,Me)=>{var lo=`
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
`,co=`
    varying float vOpacity;
    uniform vec3 uColor;

    void main() {
        float d = distance(gl_PointCoord, vec2(0.5));
        if (d > 0.5) discard;
        gl_FragColor = vec4(uColor, vOpacity * (1.0 - d * 2.0));
    }
`;function po({dc:e,modules:n,TOKENS:f}){let{useEffect:i,useRef:a}=e,{THREE:g}=n,u=a(null);return i(()=>{if(!g||!u.current)return;let p=u.current,d=p.clientWidth,s=p.clientHeight,c=new g.Scene,m=new g.PerspectiveCamera(75,d/s,1,1e3);m.position.z=500;let o=new g.WebGLRenderer({alpha:!0,antialias:!0});o.setSize(d,s),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.appendChild(o.domElement);let E=200,S=new g.BufferGeometry,A=new Float32Array(E*3),x=new Float32Array(E),I=new Float32Array(E),_=new Float32Array(E);for(let r=0;r<E;r++)A[r*3]=(Math.random()-.5)*2e3,A[r*3+1]=(Math.random()-.5)*2e3,A[r*3+2]=(Math.random()-.5)*1e3,x[r]=1+Math.random()*4,I[r]=.1+Math.random()*.5,_[r]=Math.random()*Math.PI*2;S.setAttribute("position",new g.BufferAttribute(A,3)),S.setAttribute("aSize",new g.BufferAttribute(x,1)),S.setAttribute("aSpeed",new g.BufferAttribute(I,1)),S.setAttribute("aOffset",new g.BufferAttribute(_,1));let F=new g.ShaderMaterial({uniforms:{uTime:{value:0},uColor:{value:new g.Color(f.accent)}},vertexShader:lo,fragmentShader:co,transparent:!0,blending:g.AdditiveBlending,depthWrite:!1}),P=new g.Points(S,F);c.add(P);let L,v=r=>{F.uniforms.uTime.value=r*.001,P.rotation.y=r*5e-5,o.render(c,m),L=requestAnimationFrame(v)};return v(0),()=>{cancelAnimationFrame(L),o.dispose(),p.contains(o.domElement)&&p.removeChild(o.domElement)}},[g]),React.createElement("div",{ref:u,style:{width:"100%",height:"100%",position:"absolute",inset:0,pointerEvents:"none",opacity:.6}},React.createElement("div",{style:{position:"absolute",inset:0,background:"radial-gradient(circle, transparent 40%, #000 100%)",zIndex:1}}))}function uo({dc:e,modules:n,travelData:f,TOKENS:i}){let{useEffect:a,useRef:g,useState:u}=e,p=g(null),d=g(null),[s,c]=u(!1);return a(()=>{let m=!0;async function o(){try{await Promise.all([n.loadScript(e,"https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js",{globalName:"d3"}),n.loadScript(e,"https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js",{globalName:"topojson"})]),m&&c(!0)}catch(E){console.error("[URB Globe] Resources failed:",E)}}return o(),()=>{m=!1}},[]),a(()=>{if(!s||!p.current||!window.d3)return;let m=d.current,o=m.getContext("2d"),E=window.d3,S=window.devicePixelRatio||1,A,x,I,_=E.geoOrthographic().clipAngle(90),F=E.geoPath(_,o);return(()=>{A=p.current.clientWidth,x=p.current.clientHeight,m.width=A*S,m.height=x*S,o.scale(S,S)})(),fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(L=>L.json()).then(L=>{let v=window.topojson.feature(L,L.objects.countries),r=()=>{o.clearRect(0,0,A,x),_.rotate([Date.now()*.012,-20]),_.scale(Math.min(A,x)*.42).translate([A/2,x/2]),o.beginPath(),F({type:"Sphere"}),o.fillStyle="rgba(168, 85, 247, 0.05)",o.fill(),o.beginPath(),F({type:"Sphere"}),o.fillStyle="rgba(10,10,10,0.9)",o.fill(),o.strokeStyle="rgba(168,85,247,0.4)",o.lineWidth=1,o.stroke(),o.beginPath(),F(v),o.fillStyle="rgba(255,255,255,0.02)",o.fill(),o.strokeStyle="rgba(255,255,255,0.15)",o.lineWidth=.5,o.stroke(),I=requestAnimationFrame(r)};r()}),()=>cancelAnimationFrame(I)},[s]),React.createElement("div",{ref:p,className:"urb-globe-shell fade-in",style:{position:"absolute",inset:0,pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}},React.createElement("canvas",{ref:d,style:{width:"100%",height:"100%"}}),React.createElement("div",{style:{position:"absolute",bottom:"15%",left:"50%",transform:"translateX(-50%)",textAlign:"center",width:"100%"}},React.createElement("div",{style:{fontSize:7,color:i.accent,fontWeight:900,letterSpacing:4,marginBottom:8}},"TACTICAL_DEPLOYMENT: TRAVEL_LOG"),React.createElement("h2",{style:{fontSize:24,fontWeight:900,margin:0,letterSpacing:-1,color:"white",lineHeight:1.1}},f?.title?.toUpperCase()),React.createElement("div",{style:{display:"flex",gap:40,marginTop:30,justifyContent:"center"}},f?.bullets?.map((m,o)=>React.createElement("div",{key:o,style:{border:`1px solid ${i.border}`,padding:"15px 25px",borderRadius:4,background:"rgba(0,0,0,0.5)"}},React.createElement("div",{style:{fontSize:9,color:i.textMuted,marginBottom:5}},"LOCATION_DATA"),React.createElement("div",{style:{fontSize:16,fontWeight:700,color:"white"}},m))))))}var xt={GeometricParticles:po,TravelGlobeWidget:uo};typeof Me<"u"&&Me.exports&&(Me.exports=xt);return xt});var wt=oe((on,_e)=>{function fo({dc:e,data:n,TOKENS:f}){return React.createElement("div",{className:"urb-hero-content fade-in",style:{position:"relative",zIndex:10}},React.createElement("div",{className:"urb-hero-tagline"},n?.about?.tagline||"CREATING FACTOTUMS"),React.createElement("div",{className:"urb-hero-name",style:{fontSize:"12vw",fontWeight:900,letterSpacing:-10}},n?.about?.name||"BETO"),React.createElement("div",{style:{color:f.textDim,marginTop:12}},n?.about?.title||"Engineer & Technologist"))}function go({children:e,TOKENS:n}){return React.createElement("div",{className:"cinematic-frame fade-in urb-float",style:{width:"85%",maxHeight:"82vh",maxWidth:"1200px",pointerEvents:"auto",display:"flex",flexDirection:"column"}},React.createElement("div",{style:{position:"relative",width:"100%",height:"100%",background:n.glassBg,borderRadius:n.radius,overflow:"hidden",border:`1px solid ${n.border}`,boxShadow:"0 40px 100px rgba(0,0,0,0.9)",display:"flex",flexDirection:"column"}},e,React.createElement("div",{style:{position:"absolute",bottom:0,left:0,width:"100%",height:4,background:n.accent,opacity:.8}})))}function mo({node:e,TOKENS:n}){let i=(e?.title?.length||0)>14?"clamp(32px, 5vw, 42px)":"clamp(42px, 8vw, 64px)";return React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:30}},React.createElement("div",{style:{flex:1,minWidth:0}},React.createElement("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:12}},React.createElement("div",{style:{fontSize:9,color:n.accent,fontWeight:900,letterSpacing:4}},"ENTRY_TYPE: NODEGRAPH_DATA"),React.createElement("div",{style:{width:40,height:1,background:n.border}}),React.createElement("div",{style:{fontSize:9,color:n.textMuted,fontWeight:700}},"VERIFIED_SECURE")),React.createElement("h2",{style:{fontSize:i,fontWeight:900,margin:0,letterSpacing:"-0.04em",lineHeight:1.05,overflowWrap:"break-word",hyphens:"auto",color:"white",maxWidth:"95%"}},e?.title?.toUpperCase()),React.createElement("div",{style:{fontSize:18,color:n.textDim,fontStyle:"italic",marginTop:18,maxWidth:"90%",lineHeight:1.5,fontWeight:300}},e?.desc)),React.createElement("div",{style:{textAlign:"right",fontSize:10,color:n.textMuted,opacity:.6,fontFamily:n.fontMono,lineSpacing:1.5}},React.createElement("div",{style:{color:n.accent}},"// REF_ID: ",e?.id?.toUpperCase()),React.createElement("div",null,"STATUS: ACTIVE_NODE"),React.createElement("div",null,"TIMESTAMP: ",new Date().toISOString().slice(0,10))))}function bo({node:e,TOKENS:n}){return e?.bullets?React.createElement("div",{style:{display:"grid",gridTemplateColumns:"minmax(300px, 1fr) 1fr",gap:50,marginTop:"auto"}},React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:24}},e.bullets.slice(0,3).map((f,i)=>React.createElement("div",{key:i,style:{fontSize:17,color:"white",display:"flex",gap:20,borderLeft:`3px solid ${n.accent}`,paddingLeft:24,lineHeight:1.5,fontWeight:400}},React.createElement("span",null,f)))),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:18}},e.bullets.slice(3).map((f,i)=>React.createElement("div",{key:i,style:{fontSize:13,color:n.textDim,background:"rgba(255,255,255,0.03)",padding:"18px 25px",borderRadius:12,lineHeight:1.4,border:"1px solid rgba(255,255,255,0.05)"}},React.createElement("span",{style:{color:n.accent,marginRight:8}},"\u25B9"),f)))):null}function ho({node:e,dc:n,TOKENS:f}){let{useEffect:i,useState:a,useRef:g}=n,[u,p]=a(null);i(()=>{if(e?.panelVideo&&window.app){let c=window.app.vault.getFiles().find(m=>m.name===e.panelVideo);if(c){let m=window.app.vault.getResourcePath(c);p(m)}}},[e?.panelVideo]);let d=!!e.mission,s=e.mission?e.mission.split("\u2794").map(c=>c.trim()).filter(Boolean):[];return React.createElement("div",{className:"urb-intel-pane",key:`intel-${e.id}`,style:{display:"flex",flexDirection:"column",gap:20,width:"100%",height:"100%",paddingBottom:40}},React.createElement("div",{style:{fontSize:9,color:f.accent,fontWeight:900,letterSpacing:3,display:"flex",alignItems:"center",gap:10}},React.createElement("span",{style:{width:6,height:6,borderRadius:"50%",background:f.accent}}),"D.q.ACTIVE_SECTOR // REF: ",e.id.toUpperCase()),React.createElement("h2",{style:{fontSize:38,margin:0,letterSpacing:-1,lineHeight:1,color:"white",fontWeight:900}},e.title.toUpperCase()),React.createElement("div",{style:{fontSize:17,lineHeight:1.6,opacity:.85,color:"white"}},e.panelText||e.desc),d&&React.createElement("div",{style:{marginTop:10,borderTop:"1px solid rgba(168,85,247,0.15)",paddingTop:20}},React.createElement("div",{style:{fontSize:9,color:f.accent,fontWeight:900,letterSpacing:2,marginBottom:15}},"SYSTEM_MISSION_SEQUENCE"),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12}},s.map((c,m)=>React.createElement("div",{key:m,style:{fontSize:15,fontWeight:600,display:"flex",gap:12,color:"white"}},React.createElement("span",{style:{color:f.accent}},"\u2794")," ",c)))),e.trigger&&React.createElement("div",{style:{marginTop:"auto",paddingTop:20,borderTop:"1px solid rgba(255,255,255,0.05)",display:"flex",justifyContent:"space-between",alignItems:"center"}},React.createElement("div",{style:{fontSize:8,fontFamily:f.fontMono,color:f.textMuted}},"TRIGGER_EVENT:"),React.createElement("div",{style:{fontSize:9,fontFamily:f.fontMono,color:f.accent,fontWeight:700}},e.trigger.toUpperCase())))}function yo({node:e,TOKENS:n,dc:f}){return e?e.panelVideo||e.panelText?React.createElement(ho,{node:e,dc:f,TOKENS:n}):React.createElement(go,{TOKENS:n},React.createElement("div",{style:{padding:"70px 90px",flex:1,overflowY:"auto",display:"flex",flexDirection:"column"}},React.createElement(mo,{node:e,TOKENS:n}),React.createElement(bo,{node:e,TOKENS:n}))):null}function xo({data:e,TOKENS:n,dc:f}){if(!e)return null;let{useMemo:i}=f,a=e.nodes||[],g=i(()=>a.filter(d=>d.groupName?.toUpperCase().includes("EXPERIENCE")||d.groupName?.toUpperCase().includes("HISTORY")),[a]),u=i(()=>a.filter(d=>d.groupName?.toUpperCase().includes("SHOWCASE")||d.groupName?.toUpperCase().includes("PROJECTS")||d.groupName?.toUpperCase().includes("RESOURCES")),[a]),p=i(()=>a.filter(d=>d.groupName?.toUpperCase().includes("TRAVEL")||d.groupName?.toUpperCase().includes("NODES")),[a]);return React.createElement("div",{className:"urb-print-area urb-print-layout",style:{width:"100%",padding:"60px",color:"var(--urb-print-text, white) !important",fontFamily:n.font,display:"flex",flexDirection:"column",background:"var(--urb-print-bg, #050508) !important",minHeight:"100vh",visibility:"visible !important"}},React.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:50,borderBottom:"2px solid rgba(255,255,255,0.08)",paddingBottom:30}},React.createElement("div",null,React.createElement("div",{style:{fontSize:9,color:"var(--urb-print-accent)",fontWeight:900,letterSpacing:6,marginBottom:12}},"MASTER_CLASSIFICATION_PROTOCOL://",e.about?.name?.toUpperCase()||"ANONYMOUS"),React.createElement("div",{style:{fontFamily:n.fontMono,fontSize:36,fontWeight:900,color:"var(--urb-print-text)",letterSpacing:2}},"BETO",React.createElement("span",{style:{fontSize:16,opacity:.5,letterSpacing:8}},".PORTFOLIO"))),React.createElement("div",{style:{textAlign:"right",fontSize:10,color:"var(--urb-print-text)",opacity:.6,fontFamily:n.fontMono,lineHeight:2}},React.createElement("div",{style:{color:"var(--urb-print-accent)",fontWeight:900}},"[ EXTRACTION_STATUS: READY ]"),React.createElement("div",null,"LOC://",e.about?.location?.toUpperCase()||"UNIDENTIFIED"),React.createElement("div",null,"DATE://",new Date().toISOString().split("T")[0].toUpperCase()))),React.createElement("div",{style:{display:"grid",gridTemplateColumns:"280px 1fr 280px",gap:50,flex:1}},React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:40}},React.createElement("section",null,React.createElement("div",{style:{fontSize:10,fontWeight:900,color:"var(--urb-print-accent)",marginBottom:15,letterSpacing:3,borderLeft:"2px solid var(--urb-print-accent)",paddingLeft:10}},"\u25C6 CORE_IDENTITY"),React.createElement("div",{style:{fontSize:14,lineHeight:1.7,color:"var(--urb-print-text)",opacity:.9,background:"rgba(255,255,255,0.02)",padding:20,borderRadius:2}},e.about?.tagline||"IDENTITY_VERIFIED")),React.createElement("section",null,React.createElement("div",{style:{fontSize:10,fontWeight:900,color:"var(--urb-print-accent)",marginBottom:15,letterSpacing:3,borderLeft:"2px solid var(--urb-print-accent)",paddingLeft:10}},"\u25C6 SYSTEM_SPECS"),React.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:10}},["Typescript","React","Three.js","DirectX","Vulkan","Node.js","Architecture"].map(d=>React.createElement("div",{key:d,style:{fontSize:9,padding:"5px 10px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",color:"var(--urb-print-text)",opacity:.6,borderRadius:2}},d.toUpperCase())))),React.createElement("section",{style:{marginTop:"auto"}},React.createElement("div",{style:{fontSize:9,fontFamily:n.fontMono,color:"var(--urb-print-text)",opacity:.4,lineHeight:2}},React.createElement("div",null,"SYSLOG_0X8F: AUTHENTICATED"),React.createElement("div",null,"ENCRYPTION: AES-256_STABLE"),React.createElement("div",null,"NETWORK: MESH_UP"),React.createElement("div",null,"LOC://",e.about?.location?.toUpperCase())))),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:25}},React.createElement("div",{style:{fontSize:10,fontWeight:900,color:"var(--urb-print-accent)",marginBottom:15,letterSpacing:3,borderLeft:"2px solid var(--urb-print-accent)",paddingLeft:10}},"\u25C6 OPERATIONAL_HISTORY_LOG"),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:30}},g.map((d,s)=>React.createElement("div",{key:s,style:{borderBottom:"1px solid rgba(255,255,255,0.05)",paddingBottom:25}},React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}},React.createElement("div",{style:{fontWeight:900,fontSize:18,color:"var(--urb-print-text)",letterSpacing:-.5}},d.title?.toUpperCase()),React.createElement("div",{style:{fontSize:10,fontFamily:n.fontMono,color:"var(--urb-print-accent)",background:"rgba(168, 85, 247, 0.1)",padding:"2px 8px",borderRadius:4}},d.date||"2024_ACTIVE")),React.createElement("div",{style:{fontSize:13,color:"var(--urb-print-text)",opacity:.7,lineHeight:1.6,marginBottom:15}},d.desc),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:10}},d.bullets?.slice(0,4).map((c,m)=>React.createElement("div",{key:m,style:{fontSize:12,color:"var(--urb-print-text)",display:"flex",gap:12,alignItems:"flex-start"}},React.createElement("span",{style:{color:"var(--urb-print-accent)",fontWeight:900}},"\u25B9"),React.createElement("span",{style:{opacity:.9}},c.toUpperCase())))))))),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:40}},React.createElement("section",null,React.createElement("div",{style:{fontSize:10,fontWeight:900,color:"var(--urb-print-accent)",marginBottom:15,letterSpacing:3,borderLeft:"2px solid var(--urb-print-accent)",paddingLeft:10}},"\u25C6 PROJECT_SHOWCASE"),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:20}},u.map((d,s)=>React.createElement("div",{key:d.id||s,style:{background:"rgba(168, 85, 247, 0.03)",padding:15,borderRadius:4,border:"1px solid rgba(168, 85, 247, 0.15)"}},React.createElement("div",{style:{fontWeight:900,fontSize:12,marginBottom:6,color:"var(--urb-print-text)",letterSpacing:1}},d.title?.toUpperCase()),React.createElement("div",{style:{fontSize:10,color:"var(--urb-print-text)",opacity:.6,lineHeight:1.5}},d.desc?.substring(0,100),"..."))))),React.createElement("section",null,React.createElement("div",{style:{fontSize:10,fontWeight:900,color:"var(--urb-print-accent)",marginBottom:15,letterSpacing:3,borderLeft:"2px solid var(--urb-print-accent)",paddingLeft:10}},"\u25C6 TRAVEL_CHART"),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12,background:"rgba(255,255,255,0.01)",padding:15,borderRadius:4}},p.slice(0,6).map((d,s)=>React.createElement("div",{key:s,style:{fontSize:10,color:"var(--urb-print-text)",opacity:.4,display:"flex",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,255,0.03)",paddingBottom:4}},React.createElement("span",{style:{letterSpacing:1}},d.title?.toUpperCase()),React.createElement("span",{style:{color:"var(--urb-print-accent)",fontFamily:n.fontMono}},d.id?.toUpperCase()||"0X_ACTIVE"))))))),React.createElement("footer",{style:{marginTop:50,paddingTop:40,borderTop:"2px solid rgba(255,255,255,0.08)",textAlign:"center"}},React.createElement("div",{style:{fontSize:10,color:"var(--urb-print-text)",opacity:.4,fontFamily:n.fontMono,letterSpacing:6}},"END_OF_TRANSMISSION // BETO.portfolio_SECURE_EXTRACT")))}var St={IntroSlide:fo,CinematicViewer:yo,PrintLayout:xo};typeof _e<"u"&&_e.exports&&(_e.exports=St);return St});var It=oe((nn,ke)=>{function vo({node:e,nodes:n,scroll:f,activeTab:i,isAutoPlay:a,dc:g,modules:u,TOKENS:p}){let{useEffect:d,useRef:s,useState:c,useMemo:m}=g,{THREE:o,gsap:E,TravelGlobeWidget:S}=u,A=s(null),x=s({scene:null,camera:null,renderer:null,stage:null,layers:[],animationId:null,mouse:{x:0,y:0},targetMouse:{x:0,y:0},lastScroll:0}).current,[I,_]=c(!1),[F,P]=c({x:0,y:0}),L=s(null);d(()=>{if(!o||!A.current)return;let l=A.current,h=l.clientWidth,D=l.clientHeight,y=new o.Scene,T=new o.PerspectiveCamera(30,h/D,1,3e3);T.position.z=600;let M=new o.WebGLRenderer({alpha:!0,antialias:!0});M.setSize(h,D),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.appendChild(M.domElement);let O=new o.Group;y.add(O),x.scene=y,x.camera=T,x.renderer=M,x.stage=O,_(!0);let z=$=>{let b=l.getBoundingClientRect();x.targetMouse.x=($.clientX-b.left)/h*2-1,x.targetMouse.y=-(($.clientY-b.top)/D)*2+1};window.addEventListener("mousemove",z);let G=()=>{x.animationId=requestAnimationFrame(G),x.mouse.x+=(x.targetMouse.x-x.mouse.x)*.012,x.mouse.y+=(x.targetMouse.y-x.mouse.y)*.012,P({x:x.mouse.x,y:x.mouse.y}),O&&(O.rotation.y=-x.lastScroll,x.layers.forEach($=>{let b=$.userData?.wiggle||1;$.position.x=$.userData.originX+x.mouse.x*12*b,$.position.y=$.userData.originY+x.mouse.y*12*b})),M.render(y,T)};return G(),()=>{window.removeEventListener("mousemove",z),x.animationId&&cancelAnimationFrame(x.animationId),M.dispose(),l.contains(M.domElement)&&l.removeChild(M.domElement)}},[o]),d(()=>{x.lastScroll=f||0},[f]),d(()=>{if(!I||!e||!E)return;let{stage:l,layers:h}=x;h.forEach(y=>l.remove(y)),h.length=0,((y,T,M=0,O=0,z=120,G=120,$=1)=>{let b=document.createElement("canvas");b.width=1024,b.height=1024;let H=b.getContext("2d");y(H);let ae=new o.CanvasTexture(b),Y=new o.MeshBasicMaterial({map:ae,transparent:!0,side:o.DoubleSide}),X=new o.Mesh(new o.PlaneGeometry(z,G),Y);return X.position.set(M,O,T),X.userData={originX:M,originY:O,originZ:T,wiggle:$},l.add(X),h.push(X),X})(y=>{y.fillStyle="rgba(255,255,255,0.01)",y.font="900 120px Inter",y.textAlign="center";let T=typeof e?.groupName=="string"?e.groupName:e?.label||"DOSSIER";y.fillText(String(T).toUpperCase(),512,512)},-150,0,0,600,600,.4),h.forEach((y,T)=>{E.fromTo(y.material,{opacity:0},{opacity:1,duration:3,delay:T*.3,ease:"power2.out"})})},[e,I]);let v=g.useRef(!0),r=g.useRef(null);d(()=>{if(!L.current||!E||!(e?.id!==r.current)&&!v.current)return;r.current=e?.id;let h=L.current;if(!h)return;let D=h.querySelectorAll(".urb-entrance-buffer")[0],y=h.querySelectorAll(".urb-entrance-buffer")[1],T=Array.from(h.querySelectorAll(".urb-content-scroll > div")),M=[D,y].filter(Boolean);M.length>0&&E.killTweensOf([...M,...T]);let O=v.current?3.2:.8,z=v.current?.15:.05,G=v.current?150:40,$=E.timeline({onComplete:()=>{v.current=!1}});M.length>0&&(E.set(M,{opacity:0,y:G,scale:v.current?.8:.98,rotationX:v.current?20:5}),D&&$.to(D,{opacity:1,y:0,scale:1,rotationX:0,duration:O,ease:"power4.out"},.1),y&&$.to(y,{opacity:1,y:0,scale:1,rotationX:0,duration:O*1.1,ease:"power4.out"},.2)),T.length>0&&$.fromTo(T,{opacity:0,x:-40},{opacity:1,x:0,stagger:z,duration:O*.7,ease:"power2.out"},`-=${O*.8}`)},[e?.id,i,a,E]),d(()=>{if(!A.current)return;let l=new ResizeObserver(h=>{let{width:D,height:y}=h[0].contentRect;console.log(`%c \u{1F4DF} [DASHBOARD_DIMENSIONS] W: ${Math.round(D)}px | H: ${Math.round(y)}px `,"background: #111; color: #a855f7; font-weight: bold; border: 1px solid #331f4d; padding: 2px 8px; border-radius: 4px;")});return l.observe(A.current),()=>l.disconnect()},[]);let R=i==="TRAVEL"||e?.showGlobe||e?.layout==="tactical",w=e.groupName==="IDENTITY"||e.groupName==="ABOUT",t={background:"rgba(5, 5, 10, 0.15)",border:`1px solid ${p.border}`,borderRadius:"4px",color:"white",boxShadow:"0 40px 100px rgba(0,0,0,0.95)",transition:"transform 0.1s ease-out",pointerEvents:"auto"};return React.createElement("div",{ref:A,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"}},React.createElement("div",{style:{position:"absolute",inset:0,opacity:.8}}),React.createElement("div",{ref:L,style:{position:"absolute",inset:0,zIndex:20,pointerEvents:"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",paddingTop:"120px",paddingBottom:"60px",overflow:"hidden"}},e.panelType==="TIMELINE"&&u.TimelineSlide?React.createElement("div",{style:{width:"100%",height:"100%",pointerEvents:"auto"}},React.createElement(u.TimelineSlide,{node:e,dc:g,modules:u,TOKENS:p})):React.createElement(React.Fragment,null,React.createElement("div",{style:{display:"flex",gap:"20px",alignItems:"center",justifyContent:"center",width:"100%",maxWidth:"1100px",padding:"40px 20px 0 20px"}},React.createElement("div",{className:"urb-entrance-buffer",style:{flex:"1 1 0",minWidth:0,padding:"40px 24px 24px 24px",display:"flex",flexDirection:"column"}},React.createElement("div",{style:{...t,flex:1,display:"flex",flexDirection:"column"}},React.createElement("div",{style:{padding:"24px",flex:1,display:"flex",flexDirection:"column"}},React.createElement("div",{style:{marginBottom:20}},React.createElement("div",{style:{fontSize:9,color:p.accent,fontWeight:900,letterSpacing:3,marginBottom:8}},"ARCHIVE_VISUAL_0x00"),React.createElement("h2",{style:{fontSize:24,margin:0,color:"white",fontWeight:900,letterSpacing:-1}},"SECTOR.DOSSIER")),React.createElement("div",{style:{flex:1,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"320px"}},R&&S?React.createElement("div",{style:{width:"320px",height:"320px",position:"relative"}},React.createElement(S,{dc:g,modules:u,travelData:e,TOKENS:p})):React.createElement("div",{style:{fontSize:"10px",color:p.textMuted,letterSpacing:8,opacity:.15}},"[ SIDE_VISUAL_OFFLINE ]"))))),React.createElement("div",{className:"urb-entrance-buffer",style:{flex:"1 1 0",minWidth:0,maxWidth:"500px",padding:"40px 24px 24px 24px",display:"flex",flexDirection:"column"}},React.createElement("div",{style:{...t,flex:1,padding:"24px",display:"flex",flexDirection:"column",gap:"20px"}},React.createElement(React.Fragment,null,React.createElement("div",null,React.createElement("div",{style:{color:p.accent,fontSize:"10px",fontWeight:900,fontFamily:p.fontMono,letterSpacing:3,marginBottom:"8px"}},"\u25C6 DOSSIER_INTEL // SYNC_0x",e.id?.slice(-4).toUpperCase()||"AX"),React.createElement("h1",{style:{margin:0,fontSize:"32px",fontWeight:900,fontFamily:p.font,letterSpacing:-1,lineHeight:1,color:"white"}},e.title.toUpperCase())),React.createElement("div",{style:{flex:1,overflowY:"auto",maxHeight:"55vh",paddingRight:"20px",msOverflowStyle:"none",scrollbarWidth:"none"}},React.createElement("style",null,`
                                        .urb-content-scroll::-webkit-scrollbar { width: 0; background: transparent; }
                                    `),React.createElement("div",{className:"urb-content-scroll",style:{paddingBottom:"40px"}},(e.panelText||e.desc)&&React.createElement("div",{style:{fontSize:"17px",fontWeight:400,fontFamily:p.font,lineHeight:1.6,color:"white",marginBottom:"35px",borderRight:"1px solid rgba(255,255,255,0.05)",paddingRight:"20px",opacity:.9}},e.panelText||e.desc),e.mission&&React.createElement("div",{style:{marginBottom:"35px"}},React.createElement("div",{style:{fontSize:"10px",color:p.accent,fontWeight:900,fontFamily:p.fontMono,letterSpacing:4,marginBottom:"18px",opacity:.8}},"SYSTEM_MISSION_SEQUENCE"),e.mission.split("\u2794").map(l=>l.trim()).filter(Boolean).map((l,h)=>React.createElement("div",{key:h,style:{display:"flex",alignItems:"center",gap:"20px",marginBottom:"15px",fontSize:"15px",fontWeight:600,color:"white"}},React.createElement("span",{style:{color:p.accent}},"\u2794")," ",l))),e.bullets?.length>0&&React.createElement("div",{style:{marginBottom:"40px"}},React.createElement("div",{style:{fontSize:"9px",color:p.textMuted,letterSpacing:3,marginBottom:"20px"}},"SUPPLEMENTARY_DATA_STREAM"),e.bullets.map((l,h)=>React.createElement("div",{key:h,style:{display:"flex",alignItems:"flex-start",gap:"20px",marginBottom:"15px"}},React.createElement("span",{style:{color:p.accent,fontWeight:900,fontSize:"13px"}},">>"),React.createElement("span",{style:{fontSize:"14px",fontWeight:400,fontFamily:p.font,lineHeight:1.5,color:"rgba(255,255,255,0.4)"}},l.toUpperCase())))))),React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",paddingTop:"25px",borderTop:"1px solid rgba(255,255,255,0.08)"}},React.createElement("div",null,e.trigger&&React.createElement("div",{style:{fontSize:"9px",fontFamily:p.fontMono,color:p.textMuted,letterSpacing:2}},"TRIGGER: ",React.createElement("span",{style:{color:p.accent,fontWeight:900}},e.trigger.toUpperCase())),React.createElement("div",{style:{fontSize:"8px",color:p.textMuted,marginTop:"4px",letterSpacing:1}},"SYSTEM_AUTO_SAFE: ON")),React.createElement("div",{className:"fade-in",style:{padding:"12px 24px",color:"white",background:p.accent,fontSize:"10px",fontWeight:900,fontFamily:p.fontMono,letterSpacing:3,border:"1px solid white",boxShadow:`0 10px 30px ${p.accent}44`}},w?"LOGIN_SUCCESS":"DATA_STABLE")))))))),React.createElement("div",{style:{position:"absolute",inset:0,background:"radial-gradient(circle at center, rgba(168, 85, 247, 0.08) 0%, transparent 85%)",pointerEvents:"none"}}))}var Et={FloatingScene:vo};typeof ke<"u"&&ke.exports&&(ke.exports=Et);return Et});var Ct=oe((rn,Pe)=>{function So({TOKENS:e,isDeploying:n,isPublishing:f,handleDeploy:i,handlePublish:a,logs:g,status:u}){return React.createElement("div",{className:"deploy-bridge-panel fade-in",style:{padding:"20px",background:"rgba(5,5,8,0.4)",border:`1px solid ${e.border}44`,borderRadius:4,display:"flex",flexDirection:"column",gap:15}},React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},React.createElement("div",{style:{fontSize:10,color:e.accent,fontWeight:900,letterSpacing:2}},"TACTICAL_BRIDGE_v2.0"),React.createElement("div",{style:{fontSize:8,color:u==="IDLE"?e.textDim:e.accent,opacity:.8}},u)),React.createElement("div",{className:"urb-mini-terminal",style:{height:100,overflowY:"auto",background:"rgba(0,0,0,0.3)",padding:10,borderRadius:2,border:`1px solid ${e.border}22`,fontSize:9,fontFamily:"monospace",color:e.textDim}},g.length>0?g.map((p,d)=>React.createElement("div",{key:d,style:{marginBottom:4,opacity:d===0?1:.5}},`> ${p}`)):React.createElement("div",{style:{opacity:.3}},"Awaiting packet transmission...")))}var Rt={DeployBridge:So};typeof Pe<"u"&&Pe.exports&&(Pe.exports=Rt);return Rt});var Dt=oe((an,Le)=>{function wo({dc:e,nodes:n,node:f,TOKENS:i}){let{useRef:a,useEffect:g}=e,u=a(null),p=a(null),d=a(null),s=a({animationId:null,lastTime:0,items:[],state:{scroll:0,velocity:0,targetSpeed:2.5,mouseX:0,mouseY:0},CONFIG:{itemCount:25,zGap:600,loopSize:0,camSpeed:1.5,accent:i.accent}});return g(()=>{let c=!0,{state:m,CONFIG:o,items:E}=s.current,S=p.current,A=d.current;if(!S||!A)return;S.innerHTML="",E.length=0,o.loopSize=o.itemCount*o.zGap;for(let _=0;_<o.itemCount;_++){let F=document.createElement("div");F.className="urb-hs-item";let P=document.createElement("div");P.className="urb-hs-card";let L=f.bullets[_%f.bullets.length]||"ARCHIVE_ENTRY_SYNCED",v=Math.floor(Math.random()*9999).toString(16).toUpperCase();P.innerHTML=`
                <div class="urb-hs-header">
                    <span style="color:${i.accent}; font-weight:900;">\u25C6 [0x${v}]</span>
                    <span style="opacity:0.4; font-size:9px;">ARCHIVE_OS_V1.42</span>
                </div>
                <div class="urb-hs-body">${L.toUpperCase()}</div>
                <div class="urb-hs-footer">
                    <span>SECTOR_${_}</span>
                    <span>STATUS:STABLE</span>
                </div>
            `,F.appendChild(P);let r=_/o.itemCount*Math.PI*4,R=Math.cos(r)*300+(Math.random()-.5)*100,w=Math.sin(r)*300+(Math.random()-.5)*100,t=(Math.random()-.5)*20;E.push({el:F,x:R,y:w,rot:t,baseZ:-_*o.zGap}),S.appendChild(F)}let x="urb-hs-styles";if(!document.getElementById(x)){let _=document.createElement("style");_.id=x,_.innerHTML=`
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
                    border-left: 4px solid ${i.accent};
                    backdrop-filter: none;
                    color: white;
                    font-family: ${i.font};
                    transform: translate(-50%, -50%);
                    box-shadow: 0 20px 50px rgba(0,0,0,0.8);
                }
                .urb-hs-header { display: flex; justify-content: space-between; font-size: 10px; margin-bottom: 20px; font-family: ${i.fontMono}; letter-spacing: 1px; }
                .urb-hs-body { font-size: 14px; font-weight: 600; line-height: 1.5; opacity: 0.9; min-height: 60px; }
                .urb-hs-footer { margin-top: 20px; display: flex; justify-content: space-between; font-size: 8px; font-family: ${i.fontMono}; opacity: 0.3; }
            `,document.head.appendChild(_)}function I(_){if(!c)return;let F=_-s.current.lastTime;s.current.lastTime=_,m.velocity+=(m.targetSpeed-m.velocity)*.05,m.scroll+=m.velocity;let P=m.scroll*o.camSpeed,L=o.loopSize;E.forEach(v=>{let R=((v.baseZ+P)%L+L)%L;R>500&&(R-=L);let w=1;R<-2500?w=0:R<-1500&&(w=(R+2500)/1e3),R>100&&(w=1-(R-100)/400),w<0&&(w=0),v.el.style.opacity=w,w>0&&(v.el.style.transform=`translate3d(${v.x}px, ${v.y}px, ${R}px) rotateZ(${v.rot}deg)`)}),s.current.animationId=requestAnimationFrame(I)}return s.current.animationId=requestAnimationFrame(I),()=>{c=!1,cancelAnimationFrame(s.current.animationId)}},[f.id]),React.createElement("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"}},React.createElement("div",{ref:d,style:{position:"absolute",inset:0,perspective:"1000px"}},React.createElement("div",{ref:p,style:{position:"absolute",top:"50%",left:"50%",transformStyle:"preserve-3d"}})))}var At={HyperScroll:wo};typeof Le<"u"&&Le.exports&&(Le.exports=At);return At});var Mt=oe((sn,Oe)=>{function Eo({node:e,dc:n,modules:f,TOKENS:i}){let{useEffect:a,useRef:g,useState:u,useMemo:p}=n,{gsap:d}=f,s=g(null),c=g(null),m=g(null),[o,E]=u(null),S=1999,x=2026-S+1,I=80,_=80,F={LIFE:0,EDUCATION:1,PROFESSIONAL:2,INNOVATION:3},P=p(()=>(e.epochs||[]).map(r=>{let R=r.replace(/[\[\]]/g,"").split("|").map(T=>T.trim()),[w,t,l,h]=R,[D,y]=w.split("-").map(T=>parseInt(T.trim()));return{start:D,end:y,title:t,desc:h||"VERIFIED_RECORD",track:F[l]??0,color:l==="PROFESSIONAL"?i.accent:"rgba(255,255,255,0.4)"}}),[e.epochs]),L=p(()=>(e.milestones||[]).map(r=>{let R=r.replace(/[\[\]]/g,"").split("|").map(D=>D.trim()),[w,t,l,h]=R;return{year:parseInt(w),title:t,media:l.replace(/!\[\[|\]\]/g,""),quote:h.replace(/^"|"$/g,"")}}),[e.milestones]),v=g(!1);return a(()=>{if(!d||!m.current||!c.current)return;let r=c.current,R=r.scrollLeft,w=!1,t=0,l=b=>{v.current=!0,R+=b;let H=r.scrollWidth-r.clientWidth;R=Math.max(0,Math.min(H,R)),d.to(r,{scrollLeft:R,duration:.9,ease:"power2.out",overwrite:"auto"})},h=b=>{Math.abs(b.deltaX)>Math.abs(b.deltaY)&&l(b.deltaX*1.5)},D=b=>{w=!0,t=b.pageX,r.style.cursor="grabbing",R=r.scrollLeft},y=b=>{if(!w)return;b.preventDefault();let H=b.pageX,ae=t-H;t=H,l(ae*1.5)},T=()=>{w=!1,r.style.cursor="grab"};r.addEventListener("wheel",h,{passive:!0}),r.addEventListener("pointerdown",D),window.addEventListener("pointermove",y),window.addEventListener("pointerup",T);let M=d.timeline({delay:.5,onUpdate:()=>{v.current&&M.kill()}});M.fromTo(s.current,{opacity:0},{opacity:1,duration:1.2}),M.to(".origin-overlay",{opacity:.9,duration:1},"-=0.2");let O=x*I,z=r.clientWidth||1e3,G=z/2-I/2,$=Math.max(0,O-z);if($>0){M.set(r,{scrollLeft:-G}),M.to(r,{scrollLeft:-G,duration:.4});let b=(2017-S)*I-G;M.to(r,{scrollLeft:Math.min(b,$),duration:1,ease:"power4.inOut",onStart:()=>{d.to(m.current,{scale:.99,duration:.5,yoyo:!0,repeat:1}),d.to(".origin-overlay",{opacity:0,duration:.6})}}),M.to(r,{scrollLeft:$,duration:8.5,ease:"none",onStart:()=>{d.to(".epoch-node",{boxShadow:`0 0 30px ${i.accent}88`,opacity:1,duration:.6,stagger:.05})}})}return()=>{M.kill(),r.removeEventListener("wheel",h),r.removeEventListener("pointerdown",D),window.removeEventListener("pointermove",y),window.removeEventListener("pointerup",T)}},[d,x,I]),React.createElement("div",{ref:s,style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",background:"transparent",color:"white",overflow:"hidden",padding:"60px 0",opacity:1}},React.createElement("div",{className:"origin-overlay",style:{position:"absolute",top:"150px",right:"60px",padding:"12px 24px",background:"rgba(15, 15, 20, 0.9)",border:`1px solid ${i.accent}44`,backdropFilter:"none",color:i.accent,fontSize:"10px",fontWeight:900,zIndex:2e3,pointerEvents:"none",fontFamily:i.fontMono,opacity:0,letterSpacing:2,boxShadow:"0 20px 50px rgba(0,0,0,0.8)"}},"[ ARCHIVE_ORIGIN_SYNC // DEC_1999 ]",React.createElement("br",null),React.createElement("span",{style:{fontSize:"7px",opacity:.5,letterSpacing:1}},"DECODING_BIOLOGICAL_INITIATIVE... [SUCCESS]")),React.createElement("div",{style:{padding:"20px 60px",marginBottom:"40px",zIndex:100,background:"linear-gradient(to bottom, rgba(5,5,8,0.8), transparent)",backdropFilter:"none"}},React.createElement("div",{style:{color:i.accent,fontSize:"9px",fontWeight:900,fontFamily:i.fontMono,letterSpacing:4,marginBottom:"6px"}},"PROTOCOL_CHRONOS // SYSTEM_ARCHIVE_v5.2"),React.createElement("h1",{style:{margin:0,fontSize:"32px",fontWeight:900,fontFamily:i.font,letterSpacing:-1}},"BIOGRAPHICAL_TRAJECTORY")),React.createElement("div",{ref:c,onMouseDown:()=>v.current=!0,onPointerDown:()=>v.current=!0,style:{height:"680px",width:"100%",overflowX:"auto",overflowY:"hidden",msOverflowStyle:"none",scrollbarWidth:"none",position:"relative",cursor:"grab",zIndex:9999}},React.createElement("style",null," .timeline-scroll-container::-webkit-scrollbar { display: none; } "),React.createElement("div",{ref:m,style:{width:`${x*I}px`,height:"100%",position:"relative",padding:"20px 0",zIndex:9999}},Array.from({length:x}).map((r,R)=>React.createElement("div",{key:R,style:{position:"absolute",left:R*I,top:0,bottom:0,width:"1px",background:"rgba(255,255,255,0.05)",display:"flex",flexDirection:"column",justifyContent:"flex-end",paddingBottom:"20px",zIndex:1}},React.createElement("div",{style:{fontSize:"10px",color:(S+R)%5===0?i.accent:"rgba(255,255,255,0.1)",fontFamily:i.fontMono,transform:"rotate(-90deg) translateX(-10px)",opacity:(S+R)%5===0?1:.2}},S+R))),React.createElement("div",{style:{position:"relative",height:"100%",zIndex:10}},P.map((r,R)=>{let w=(r.start-S)*I,t=(r.end-r.start+1)*I,l=r.track*_+20;return React.createElement("div",{key:R,className:"epoch-node fade-in",style:{position:"absolute",left:w,top:l,width:t-10,height:"30px",background:o===r?"rgba(168, 85, 247, 0.2)":"rgba(5, 5, 8, 0.6)",backdropFilter:"none",border:`1px solid ${o===r?i.accent:r.color+"44"}`,borderRadius:"4px",padding:"0 12px",display:"flex",alignItems:"center",transition:"all 0.3s ease",cursor:"help",opacity:o&&o!==r?.4:1,zIndex:o===r?100:10},onMouseEnter:()=>E(r),onMouseLeave:()=>E(null)},React.createElement("div",{style:{width:"4px",height:"100%",background:r.color,position:"absolute",left:0}}),React.createElement("div",{style:{fontSize:"10px",fontWeight:900,fontFamily:i.fontMono,color:"white",letterSpacing:1}},r.title.toUpperCase()),React.createElement("div",{style:{position:"absolute",right:10,fontSize:"8px",color:i.textMuted,opacity:.5}},r.start===r.end?r.start:`${r.start} - ${r.end}`))}),L.map((r,R)=>{let w=(r.year-S)*I+I/2,t=3.5*_;return React.createElement("div",{key:R,style:{position:"absolute",left:w,top:t,display:"flex",flexDirection:"column",alignItems:"center"}},React.createElement("div",{style:{width:"1px",height:"60px",background:`linear-gradient(to top, ${i.accent}, transparent)`}}),React.createElement("div",{className:"milestone-pin",style:{padding:"12px",background:"rgba(10, 10, 15, 0.9)",border:`1px solid ${o===r?i.accent:i.accent+"88"}`,borderRadius:"4px",width:"150px",boxShadow:"0 10px 30px rgba(0,0,0,0.5)",transition:"all 0.3s ease",cursor:"help",opacity:o&&o!==r?.4:1,transform:o===r?"scale(1.05)":"scale(1)"},onMouseEnter:()=>E(r),onMouseLeave:()=>E(null)},React.createElement("div",{style:{fontSize:"9px",color:i.accent,fontWeight:900,marginBottom:"6px"}},r.year," // ",r.title),React.createElement("div",{style:{fontSize:"11px",color:"rgba(255,255,255,0.7)",fontStyle:"italic",position:"relative",paddingLeft:"15px"}},React.createElement("span",{style:{position:"absolute",left:0,color:i.accent}},'"'),r.quote),r.media&&React.createElement("div",{style:{marginTop:"12px",width:"100%",height:"110px",background:"black",borderRadius:"4px",overflow:"hidden",border:"1px solid rgba(255,255,255,0.1)",position:"relative"}},React.createElement("video",{src:r.media,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"cover",opacity:.8}}),React.createElement("div",{style:{position:"absolute",top:5,right:8,fontSize:"7px",color:i.accent,opacity:.5}},"LIVE_FEED"))))})))),React.createElement("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:"100px",background:"linear-gradient(90deg, #050508 0%, transparent 100%)",zIndex:100,pointerEvents:"none"}}),React.createElement("div",{style:{position:"absolute",right:0,top:0,bottom:0,width:"100px",background:"linear-gradient(-90deg, #050508 0%, transparent 100%)",zIndex:100,pointerEvents:"none"}}),o&&React.createElement("div",{className:"fade-in",style:{position:"absolute",bottom:"60px",left:"60px",width:"500px",padding:"40px",background:"rgba(5, 5, 8, 0.98)",border:`1px solid ${i.accent}`,borderRadius:"4px",zIndex:1e4,pointerEvents:"none",boxShadow:"0 20px 60px rgba(0,0,0,0.9)"}},React.createElement("div",{style:{fontSize:"10px",color:i.accent,fontWeight:900,fontFamily:i.fontMono,letterSpacing:3,marginBottom:"12px"}},"INTELLIGENCE_REPORT // ",o.year||`${o.start}-${o.end}`),React.createElement("div",{style:{fontSize:"20px",fontWeight:900,color:"white",marginBottom:"8px",letterSpacing:-.5}},o.title.toUpperCase()),React.createElement("div",{style:{fontSize:"11px",color:"rgba(255,255,255,0.6)",lineHeight:1.6,fontFamily:i.fontMono}},o.desc||o.quote||"ARCHIVE_DETAILS_ENCRYPTED"),React.createElement("div",{style:{marginTop:"16px",display:"flex",gap:"8px"}},React.createElement("div",{style:{fontSize:"8px",color:i.accent,background:"rgba(168, 85, 247, 0.1)",padding:"2px 8px",borderRadius:"2px",border:`1px solid ${i.accent}33`}},o.start?"EPOCH_ACTIVE":"MILESTONE_VERIFIED"))))}var Tt={TimelineSlide:Eo};typeof Oe<"u"&&Oe.exports&&(Oe.exports=Tt);return Tt});var kt=oe((ln,ze)=>{function Io({folderPath:e,dc:n,onReload:f,modules:i}){let{useEffect:a,useRef:g}=n,u=e+"/mcp_commands.json";return a(()=>{let p=n.app.vault.adapter,s=setInterval(async()=>{try{if(!await p.exists(u))return;let c=await p.read(u),m;try{m=JSON.parse(c)}catch{return}if(m&&m.executed===!1){console.log("\u{1F916} MCP BRIDGE: Executing action:",m.action);let o="Success";if(!["reload","screenshot","devtools","ping","open_settings"].includes(m.action))throw new Error(`Unauthorized: ${m.action}`);if(m.action==="reload")await f();else if(m.action==="screenshot")try{let I=(await(require("@electron/remote")||require("electron").remote).getCurrentWebContents().capturePage()).toDataURL(),_=e+"/mcp_snapshot.txt";await p.write(_,I),o=`Snapshot captured to ${_}`}catch(S){o="Snapshot failed: "+S.message}else if(m.action==="devtools")try{(require("@electron/remote")||require("electron").remote).getCurrentWebContents().openDevTools(),o="DevTools opened"}catch(S){o="DevTools error: "+S.message}else m.action==="open_settings"&&n.app.setting.open();m.executed=!0,m.executedAt=new Date().toISOString(),m.result=o,await p.write(u,JSON.stringify(m,null,2))}}catch(c){console.error("[MCP Bridge] Error:",c)}},1e3);return()=>clearInterval(s)},[]),null}var _t={MCPBridge:Io};typeof ze<"u"&&ze.exports&&(ze.exports=_t);return _t});var Yo={};Zt(Yo,{default:()=>je});module.exports=Kt(Yo);var Ye=require("obsidian"),re,ge;try{if(re=window.React,ge=window.ReactDOM,!re&&typeof require<"u"&&(re=require("react")),!ge&&typeof require<"u")try{ge=require("react-dom/client")}catch{ge=require("react-dom")}console.log("[Dossier OS] IDENTITY_SYNC: Initializing Forensic Audit..."),console.log("[Dossier OS] Environment Audit:",{ReactV:re?.version||"MISSING",ReactDOMV:ge?.version||"MISSING",hasWindowReact:!!window.React,hasRequire:typeof require<"u"})}catch(e){console.error("[Dossier OS] IDENTITY_CRASH: Could not resolve host React.",e)}var Pt=at(),Bt=Pt.default||Pt,Ro=Bt.TOKENS,Co=Bt.GLOBAL_CSS,Lt=lt(),Ao=Lt.default||Lt,Do=Ao.parseResumeMarkdown,Ot=pt(),To=Ot.default||Ot,Mo=To.getDeploymentLogic,zt=ut(),_o=zt.default||zt,ko=_o.createAdapter,$t=gt(),Po=$t.default||$t,Lo=Po.loadScript,$e=bt(),ye=$e.App||$e.default?.App||$e.default||$e,Ue=yt(),Oo=Ue.NodeGraph||Ue.default?.NodeGraph||Ue.default||Ue,Ut=vt(),Ht=Ut.default||Ut,zo=Ht.GeometricParticles,$o=Ht.TravelGlobeWidget,Nt=wt(),Ke=Nt.default||Nt,Uo=Ke.IntroSlide,No=Ke.CinematicViewer,Bo=Ke.PrintLayout,Ne=It(),Ho=Ne.FloatingScene||Ne.default?.FloatingScene||Ne.default||Ne,Be=Ct(),Fo=Be.DeployBridge||Be.default?.DeployBridge||Be.default||Be,He=Dt(),Wo=He.HyperScroll||He.default?.HyperScroll||He.default||He,Fe=Mt(),Go=Fe.TimelineSlide||Fe.default?.TimelineSlide||Fe.default||Fe,We=kt(),jo=We.MCPBridge||We.default?.MCPBridge||We.default||We,Ge="dossier-os-view",Qe=class extends Ye.ItemView{constructor(n){super(n)}getViewType(){return Ge}getDisplayText(){return"Dossier OS"}async onOpen(){let n=this.containerEl.children[1];n.empty();let f=({icon:c,style:m})=>{let o={zap:"\u26A1",github:"\u{1F310}",settings:"\u2699\uFE0F",loader:"\u23F3",target:"\u{1F3AF}",terminal:"\u{1F4DF}",activity:"\u{1F4C8}",database:"\u{1F5C4}\uFE0F"};return re.createElement("span",{style:{...m,display:"inline-flex",alignItems:"center",justifyContent:"center"}},o[c]||"\u25C6")},i={useState:re.useState,useEffect:re.useEffect,useRef:re.useRef,useCallback:re.useCallback,useMemo:re.useMemo,app:window.app,Icon:f},a={App:ye,TOKENS:Ro,GLOBAL_CSS:Co,parseResumeMarkdown:Do,getDeploymentLogic:Mo,createAdapter:ko,loadScript:Lo,NodeGraph:Oo,GeometricParticles:zo,TravelGlobeWidget:$o,IntroSlide:Uo,CinematicViewer:No,PrintLayout:Bo,FloatingScene:Ho,DeployBridge:Fo,HyperScroll:Wo,TimelineSlide:Go,MCPBridge:jo},g=["App","NodeGraph","IntroSlide","CinematicViewer","PrintLayout","FloatingScene","TimelineSlide","HyperScroll","MCPBridge","DeployBridge","GeometricParticles","TravelGlobeWidget","getDeploymentLogic","createAdapter"],u=g.filter(c=>!a[c]),p=g.filter(c=>a[c]&&typeof a[c]!="function");u.length>0?console.error(`[Dossier OS] CRITICAL_FAILURE: Missing Modules: ${u.join(", ")}`):p.length>0?(console.error(`[Dossier OS] TYPE_FAILURE: Non-Function Modules detected: ${p.join(", ")}`),p.forEach(c=>console.log(`[Dossier OS] Improper Value (${c}):`,a[c]))):console.log("[Dossier OS] SYSTEM_HEALTH: All 14 core modules verified as valid functions.");let d="_RESOURCES/DATACORE/142_UltimateResumeBuilder";if(!ge||!ge.createRoot){console.error("[Dossier OS] RENDER_BLOCK: ReactDOM.createRoot is missing."),n.setText("SYSTEM_FAILURE: React Identity Mismatch. Please check console.");return}console.log("[Dossier OS] DEEP_PROBE: Component Fingerprint (App):",{typeofApp:typeof ye,keys:Object.keys(ye),proto:Object.getPrototypeOf(ye)?.constructor?.name});let s=ge.createRoot(n);try{console.log("[Dossier OS] BOOTSTRAP: Attempting Safe-Render..."),s.render(re.createElement("div",{id:"dossier-safe-root"},"Dossier OS: Environment Healthy. Initializing Components...")),setTimeout(()=>{console.log("[Dossier OS] BOOTSTRAP: Finalizing Component Mount..."),s.render(re.createElement(ye,{dc:i,modules:a,folderPath:d}))},100)}catch(c){console.error("[Dossier OS] BOOTSTRAP_FAILURE: Error occurred during Safe-Render.",c)}console.log("[Dossier OS] HOST_IDENTITY_SYNC_SUCCESS: Native render engine active.")}},je=class extends Ye.Plugin{async onload(){this.registerView(Ge,n=>new Qe(n)),this.addCommand({id:"open-dossier-os",name:"Open Dossier OS",callback:()=>this.activateView()}),this.addRibbonIcon("target","Dossier OS",()=>this.activateView())}async activateView(){let{workspace:n}=this.app,f=n.getLeavesOfType(Ge)[0];f||(f=n.getLeaf("tab"),await f.setViewState({type:Ge,active:!0})),n.revealLeaf(f)}};
