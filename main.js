var Ke=Object.defineProperty;var Kt=Object.getOwnPropertyDescriptor;var eo=Object.getOwnPropertyNames;var to=Object.prototype.hasOwnProperty;var ne=(e,s)=>()=>(s||e((s={exports:{}}).exports,s),s.exports),oo=(e,s)=>{for(var f in s)Ke(e,f,{get:s[f],enumerable:!0})},no=(e,s,f,r)=>{if(s&&typeof s=="object"||typeof s=="function")for(let x of eo(s))!to.call(e,x)&&x!==f&&Ke(e,x,{get:()=>s[x],enumerable:!(r=Kt(s,x))||r.enumerable});return e};var io=e=>no(Ke({},"__esModule",{value:!0}),e);var lt=ne((Ko,Ae)=>{var N={bg:"rgba(5, 5, 5, 1)",glassBg:"rgba(10, 10, 15, 0.25)",accent:"hsl(265, 89%, 66%)",accentCyan:"hsl(190, 90%, 50%)",accentAmber:"hsl(45, 100%, 50%)",text:"#ffffff",textDim:"rgba(255, 255, 255, 0.6)",textMuted:"rgba(255, 255, 255, 0.4)",border:"rgba(255, 255, 255, 0.1)",radius:"16px",font:'"Outfit", sans-serif',fontMono:'"JetBrains Mono", monospace'},ro=`
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
    /* \u{1F6F0}\uFE0F HUD REFINEMENT: COMMAND STRIP */
    .urb-hud-strip {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap !important;
        align-items: center;
        gap: 4px;
        background: rgba(15, 15, 20, 0.45);
        backdrop-filter: blur(25px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.08);
        padding: 5px 8px;
        border-radius: 40px;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: 0 4px 30px rgba(0,0,0,0.6);
        min-width: max-content;
    }

    .urb-hud-strip:hover {
        background: rgba(20, 20, 25, 0.75);
        border-color: rgba(255, 255, 255, 0.15);
        box-shadow: 0 15px 45px rgba(0,0,0,1);
    }

    .urb-icon-btn {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: transparent;
        border: 1px solid transparent;
        color: rgba(255, 255, 255, 0.55);
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
        flex-shrink: 0;
    }

    .urb-icon-btn:hover {
        background: rgba(255, 255, 255, 0.08);
        color: white;
        transform: translateY(-2px);
    }

    .urb-icon-btn.active {
        color: var(--accent);
        background: rgba(168, 85, 247, 0.15);
        border-color: rgba(168, 85, 247, 0.25);
    }

    .urb-icon-btn.primary { color: #10b981; }
    .urb-icon-btn.web { color: #3b82f6; }
    .urb-icon-btn.danger { color: #ef4444; }

    /* \u{1F6F0}\uFE0F TOOLTIP ENGINE: Forensic Labeling (JS MANAGED) */
    .urb-tooltip-js {
        position: absolute;
        top: -35px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(5, 5, 8, 0.95);
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 8px;
        font-family: var(--font-mono);
        color: var(--accent);
        white-space: nowrap;
        border: 1px solid rgba(168, 85, 247, 0.3);
        box-shadow: 0 10px 20px rgba(0,0,0,0.8);
        z-index: 30000;
        letter-spacing: 1px;
        pointer-events: none;
    }

    @keyframes urb-pulse-dot {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(0.6); }
    }
}

`,st={TOKENS:N,GLOBAL_CSS:ro};typeof Ae<"u"&&Ae.exports&&(Ae.exports=st);return st});var pt=ne((en,De)=>{function ao(e){let s=e.split(`
`),f={groups:[{name:"IDENTITY",items:[]}],nodes:[]},r=null;for(let x of s){let i=x.trim();if(!i)continue;let p=i.match(/^#\s+(\d+)\s+::\s+(.+)/);if(p){let m=p[2].trim().toUpperCase();r={id:`node-${p[1]}`,order:parseInt(p[1]),title:m,desc:"",media:[],bullets:[],groupName:"DOSSIER",panelVideo:null,panelText:"",trigger:null,epochs:[],milestones:[]},f.nodes.push(r),f.groups[0].items.push(r);continue}let l=i.match(/^[*-]\s+(.+)/);if(l&&r){let m=l[1].trim(),c=m.replace(/\*\*/g,"").trim();if(c.toUpperCase().startsWith("PANEL_VIDEO:")){let n=m.match(/!\[\[(.+?)\]\]/);n&&(r.panelVideo=n[1])}else if(c.toUpperCase().startsWith("PANEL_TEXT:")){let n=c.substring(c.indexOf(":")+1).trim();r.panelText=n,r.desc=n}else if(c.toUpperCase().startsWith("TRIGGER:")){let n=c.substring(c.indexOf(":")+1).trim();r.trigger=n,n.includes("Globe")&&(r.showGlobe=!0)}else if(c.toUpperCase().startsWith("PANEL_TYPE:")){let n=c.substring(c.indexOf(":")+1).trim();r.panelType=n}else if(c.toUpperCase().startsWith("MISSION:")){let n=c.substring(c.indexOf(":")+1).trim();r.mission=n}else if(c.toUpperCase().startsWith("CHRONOS_DATA:")){let n=c.substring(c.indexOf(":")+1).trim();r.chronosData=n}else if(c.toUpperCase().startsWith("EPOCH:")){let n=c.substring(c.indexOf(":")+1).trim();r.epochs.push(n)}else if(c.toUpperCase().startsWith("MILESTONE:")){let n=c.substring(c.indexOf(":")+1).trim();r.milestones.push(n)}else if(c.toUpperCase().startsWith("EVENT_DATA:")){let n=c.substring(c.indexOf(":")+1).trim();r.eventData=n}else r.bullets.push(m)}}return f.nodes.sort((x,i)=>x.order-i.order),f.nodes.forEach((x,i)=>{x.index=i,x.isLast=i===f.nodes.length-1,i===0&&(f.about={...x,items:[x]})}),f.about||(f.about={name:"BETO"}),f}var ct={parseResumeMarkdown:ao};typeof De<"u"&&De.exports&&(De.exports=ct);return ct});var ut=ne((tn,Te)=>{var q=require("fs"),V=require("path"),{exec:so}=require("child_process");function lo(e){let s=i=>i.split("DATACORE/")[1]||i;return{handleLocalDeploy:async({addLog:i,setStatus:p,setIsDeploying:l,folderPath:m})=>{l(!0),p("COMPILING..."),i("DEPLOY_INIT");try{let d=e.app.vault.adapter.getBasePath(),a=V.resolve(d,m),b=V.join(d,".obsidian","plugins","dossier-os"),y=V.join(b,"main.js"),k=V.join(b,"manifest.json");console.log("[Deployment] Paths Resolved:",{component:s(a),plugin:s(b)}),q.existsSync(b)||(q.mkdirSync(b,{recursive:!0}),console.log("[Deployment] Created plugin directory."));let I=V.join(a,"manifest.json");q.existsSync(I)&&(q.copyFileSync(I,k),console.log("[Deployment] Manifest Synced."),i("MANIFEST_SYNCED"));let v=V.join(a,"main.js");if(q.existsSync(v))q.copyFileSync(v,y);else{let S=V.join(a,"src","index.jsx");q.existsSync(S)&&q.copyFileSync(S,y)}if(console.log("[Deployment] Bundle Injected to Dossier OS."),i("BUNDLE_INJECTED"),e.app.plugins){let S="dossier-os";await e.app.plugins.disablePlugin(S),await e.app.plugins.enablePlugin(S),console.log("[Deployment] Dossier OS Reinitialized"),i("PLUGIN_RELOADED")}p("IDLE"),l(!1),i("DEPLOY_SUCCESS")}catch(c){console.error("[Deployment] Local deploy FAILED:",c),p("DEPLOY_ERROR"),l(!1),i("DEPLOY_CRASH")}},handlePublish:async({repoName:i,ghToken:p,addLog:l,setStatus:m,setIsPublishing:c,folderPath:n})=>{c(!0),m("PREPARING_GITOPS..."),l("PUBLISH_INIT");let d=p,a="UI_MANUAL";if(!d){console.log("[Deployment] Manual token empty, attempting NATIVE_GRAB...");try{let{execSync:b}=require("child_process"),k=b('security find-generic-password -s "gh:github.com" -w || security find-generic-password -s "github.com" -w || security find-generic-password -s "GitHub" -w',{encoding:"utf8"}).replace(/[\r\n]/g,"").trim();if(k){if(k.startsWith("go-keyring-base64:")){let I=k.split(":")[1].trim();d=typeof Buffer<"u"?Buffer.from(I,"base64").toString("utf8").trim():decodeURIComponent(escape(window.atob(I))).trim()}else d=k;d&&(a="NATIVE_KEYCHAIN",l("NATIVE_GRAB_SUCCESS"))}}catch{}}if(!d||!i){console.error("[Deployment] AUTH_BLOCK: No token or repo defined."),m("CONFIG_REQUIRED"),c(!1);return}console.log(`[Deployment] Starting Public Publish for: ${n}`);try{let b=e.app.vault.adapter.getBasePath(),y=V.resolve(b,n),k=V.join(y,"manifest.json"),I=window.requestUrl||e.app.requestUrl,v=u=>V.relative(b,u);console.log("[Deployment] Paths Resolved (Relative):",{component:v(y),manifest:v(k)});let S="1.0.0",$=V.join(y,"main.js"),W=V.join(y,"src","native","main.tsx");if(console.log("[Deployment] Orchestrating Native Build (esbuild)..."),q.existsSync(W))try{let{execSync:u}=require("child_process"),h=`/bin/zsh -l -c "npx esbuild ${V.join(y,"src","native","main.tsx")} --bundle --outfile=${$} --minify --platform=node --external:obsidian --external:electron --external:react --external:react-dom --external:react/jsx-runtime --external:\\"react-dom/*\\" --define:process.env.NODE_ENV=\\"'production'\\" --target=es2020 --format=cjs --jsx=transform --loader:.jsx=jsx"`;console.log("[Deployment] Running Build Command..."),u(h,{cwd:y}),q.existsSync($)&&(console.log("[Deployment] ESBUILD_SUCCESS: Native bundle generated."),l("AUTO_BUNDLING_SUCCESS")),console.log("[Deployment] PATH_SYNC_SUCCESS: Native entry identified.")}catch(u){console.error("[Deployment] ESBUILD_FAILED:",u.message),l("AUTO_BUNDLING_FAILED")}else console.error("[Deployment] NATIVE_ENTRY_MISSING: main.tsx not found in src/native."),l("NATIVE_ENTRY_MISSING");if(q.existsSync(k))try{let u=JSON.parse(q.readFileSync(k,"utf8")),h=u.version.split(".");h[2]=parseInt(h[2]||0)+1,S=h.join("."),u.version=S,q.writeFileSync(k,JSON.stringify(u,null,"	")),l(`PUBLISH_BUMP_V${S}`),console.log(`[Deployment] Publish Version bump: v${S}`)}catch(u){console.error("[Deployment] Publish version bump error:",u)}console.log("[Deployment] Requesting GitHub authentication...");let P=await I({url:"https://api.github.com/user",method:"GET",headers:{Authorization:`token ${d}`,Accept:"application/vnd.github.v3+json"}});if(P.status!==200)throw console.error("[Deployment] Auth FAILED (Status:",P.status,")"),console.error("[Deployment] Auth Error Details:",P.json||P.text),new Error(`AUTH_FAILED_${P.status}`);let{login:_}=P.json;console.log(`[Deployment] Authenticated as: ${_}`),console.log(`[Deployment] Verifying repository: ${_}/${i}`);let t=!1;try{let u=await I({url:`https://api.github.com/repos/${_}/${i}`,method:"GET",headers:{Authorization:`token ${d}`,Accept:"application/vnd.github.v3+json"}});u.status===404?t=!0:u.status!==200&&console.warn("[Deployment] Repo check warning (Status:",u.status,")")}catch(u){if(u.message?.includes("404")||u.status===404)console.log("[Deployment] 404 Signal Caught (Repo Missing)"),t=!0;else throw console.error("[Deployment] Repo check CRASH:",u),u}if(t){console.log(`[Deployment] Repo missing. Auto-provisioning: ${i}...`),l("PROVISIONING_REPO");let u=await I({url:"https://api.github.com/user/repos",method:"POST",headers:{Authorization:`token ${d}`,"Content-Type":"application/json"},body:JSON.stringify({name:i,description:"Cinematic Dossier OS // Generated by Ultimate Resume Builder.",private:!1,has_issues:!0,has_projects:!1,has_wiki:!1})});if(u.status!==201)throw console.error("[Deployment] Repo creation FAILED:",u.json),new Error("PROVISIONING_FAILED");console.log("[Deployment] Repository Created successfully."),l("PROVISION_SUCCESS")}let C=`https://${d}@github.com/${_}/${i}.git`,w=`v${S}`,o=`
                git init && 
                git checkout -b main || git checkout main &&
                git remote add origin ${C} || git remote set-url origin ${C} && 
                git add -A && 
                git commit -m "Dossier Update [v${S}]" && 
                git tag v${S} &&
                git push -u origin main --force &&
                git push origin --tags
            `;console.log("[Deployment] Executing Git Push..."),m("GITOPS_PUSHING..."),l("GIT_START");let D=so(o,{cwd:y});D.stdout.on("data",u=>console.log("[Deployment] [STDOUT]",u)),D.stderr.on("data",u=>console.warn("[Deployment] [STDERR]",u)),D.on("close",async u=>{if(u===0){console.log("[Deployment] Git Push SUCCESS"),l("GIT_SUCCESS");try{let h=`v${S}`;console.log(`[Deployment] Syncing Release Assets for ${h}...`);let T=await I({url:`https://api.github.com/repos/${_}/${i}/releases/tags/${h}?t=${Date.now()}`,headers:{Authorization:`token ${d}`,Accept:"application/vnd.github.v3+json","Cache-Control":"no-cache"},throw:!1}),E;if(T.status===200?(E=T.json,console.log("[Deployment] Existing release found. Updating assets...")):(console.log("[Deployment] Creating new release..."),E=(await I({url:`https://api.github.com/repos/${_}/${i}/releases`,method:"POST",headers:{Authorization:`token ${d}`,"Content-Type":"application/json"},body:JSON.stringify({tag_name:h,name:`Resume Dossier ${h}`,body:"Automated Resilient Release (Native Grab).",draft:!1}),throw:!1})).json),!E||!E.upload_url)throw new Error("Could not find release target.");let A=E.upload_url.split("{")[0];if(E.assets&&E.assets.length>0){let M=["main.js","manifest.json","styles.css"];for(let B of E.assets)if(M.includes(B.name)){console.log(`[Deployment] Purging stale asset: ${B.name}`);try{await I({url:`https://api.github.com/repos/${_}/${i}/releases/assets/${B.id}`,method:"DELETE",headers:{Authorization:`token ${d}`}})}catch{}}}let U=[{name:"main.js",path:V.join(y,"main.js")},{name:"manifest.json",path:V.join(y,"manifest.json")}];for(let M of U)if(q.existsSync(M.path)){console.log(`[Deployment] Uploading binary asset: ${M.name}`),l(`UPLOAD_${M.name.toUpperCase()}`);let B=q.readFileSync(M.path);(await I({url:`${A}?name=${M.name}`,method:"POST",headers:{Authorization:`token ${d}`,"Content-Type":"application/octet-stream"},body:new Uint8Array(B).buffer})).status===201&&console.log(`[Deployment] Asset ${M.name} uploaded successfully.`)}l("RELEASE_READY")}catch(h){console.error("[Deployment] Release Asset Sync FAILED:",h),l("RELEASE_SYNC_FAILED")}m("IDLE"),c(!1),l("PUBLISH_COMPLETE")}else console.error("[Deployment] Git FAILED (Exit Code:",u,")"),m("GIT_ERROR"),c(!1),l("GIT_FAILURE")})}catch(b){console.error("[Deployment] Public sync EXCEPTION:",b),m("SYNC_ERROR"),c(!1),l("PUBLISH_CRASH")}},handleWebPublish:async({addLog:i,setStatus:p,setIsPublishing:l,folderPath:m})=>{l(!0),p("WEB_SYNC_INIT..."),i("WEB_PUBLISH_START");try{let c=e.app.vault.adapter.getBasePath(),n=V.resolve(c,m),d=V.resolve(c,"_RESOURCES/DATACORE/76 NextWebsite"),a=V.join(d,"src/datacore/UltimateResumeBuilder");if(console.log("[Deployment] [WEB] Paths Resolved:",{source:s(n),target:s(a)}),!q.existsSync(d))throw console.error("[Deployment] [WEB] Website project not found at:",d),new Error("WEBSITE_PROJECT_MISSING");let{execSync:b}=require("child_process");i("SYNCING_SOURCE"),q.existsSync(a)||q.mkdirSync(a,{recursive:!0}),b(`rm -rf "${a}" && cp -R "${V.join(n,"src")}" "${a}"`),console.log("[Deployment] [WEB] Source mirrored to website."),p("BUILDING_WEB_SHIM..."),i("SHIM_START"),b('/bin/zsh -l -c "npm run shim && npm run patch"',{cwd:d}),console.log("[Deployment] [WEB] Website shim & patch completed."),p("GITOPS_PUSH_WEB..."),i("WEB_GIT_START"),b(`
                git add -A && 
                git commit -m "Dossier Sync: UltimateResumeBuilder Update [Auto-Generated]" && 
                git push origin main
            `,{cwd:d}),console.log("[Deployment] [WEB] Git Push SUCCESS"),p("IDLE"),l(!1),i("WEB_PUBLISH_SUCCESS")}catch(c){console.error("[Deployment] Web Publish FAILED:",c),p("WEB_PUBLISH_ERROR"),l(!1),i("WEB_PUBLISH_CRASH")}}}}var dt={getDeploymentLogic:lo};typeof Te<"u"&&Te.exports&&(Te.exports=dt);return dt});var gt=ne((on,_e)=>{var co=(e,s)=>{let f=!!e,r=!!window.app&&!f,x=!window.app&&!f,i=s?.TOKENS||{};return{isDataCore:f,isNative:r,isWeb:x,TOKENS:i,requireAsset:async c=>{if(f)return await e.require(c);if(r){let n=window.require("fs"),d=window.require("electron");return null}return null},getVaultData:async c=>{if(f)return await e.app.vault.adapter.read(c);if(r)return await window.app.vault.adapter.read(c);if(x)return await(await fetch(`/api/vault?path=${encodeURIComponent(c)}`)).json()},deploy:async(c,n)=>{console.log(`[Adapter] [DEPLOY] Target: ${c}`)}}},ft={createAdapter:co};typeof _e<"u"&&_e.exports&&(_e.exports=ft);return ft});var bt=ne((nn,Me)=>{async function po(e,s,f={}){let{globalName:r=null}=f;return r&&window[r]?Promise.resolve(window[r]):new Promise((x,i)=>{let p=document.createElement("script");p.src=s,p.async=!0,p.onload=()=>{x(r?window[r]:p)},p.onerror=l=>{console.error(`[URB_LoadScript] Error loading ${s}:`,l),i(new Error(`Failed to load script: ${s}`))},document.head.appendChild(p)})}var mt={loadScript:po};typeof Me<"u"&&Me.exports&&(Me.exports=mt);return mt});var yt=ne((rn,ke)=>{function uo({dc:e,modules:s,folderPath:f,onExport:r}){let{Platform:x}=s,{useState:i,useEffect:p,useRef:l,useCallback:m,useMemo:c}=x,{TOKENS:n,GLOBAL_CSS:d,parseResumeMarkdown:a,NodeGraph:b,GeometricParticles:y,CinematicViewer:k,FloatingScene:I,PrintLayout:v,DeployBridge:S,MCPBridge:$}=s,W=c(()=>s.createAdapter(e,s),[e,s]),P=l(null),_=l(null),[t,C]=i(null),[w,o]=i(null),[D,u]=i(0),[h,T]=i(!1),E=l({THREE:null,gsap:null}),A=l(null),[U,M]=i(!0),[B,G]=i(!1),[g,z]=i(!1),[Q,j]=i(!1),[se,K]=i(!1),[ie,fe]=i(!1),[ge,ee]=i(null),[le,Se]=i(!1),[he,L]=i(0),[O,te]=i("dark");p(()=>{if(B&&t?.about?.name){let R=document.title,H=O.toUpperCase(),J=new Date().toISOString().slice(0,10).replace(/-/g,"_"),F=t.about.name.toUpperCase().replace(/\s+/g,"_");return document.title=`CLASSIFIED_DOSSIER_${F}_[${H}]_${J}`,console.log(`[URB_HOIST] Filename Synced: ${document.title}`),()=>{document.title=R}}},[B,O,t]);let[Y,Z]=i("IDLE"),[oe,me]=i("IDENTITY"),[X,pe]=i(!1),[ce,Ee]=i(!1),[Gt,jt]=i([]),[Ie,Yt]=i(localStorage.getItem("urb_repo_name")||"ultimate-resume-builder"),[Ze,ot]=i(""),ye=c(()=>s.getDeploymentLogic(e),[s,e]),xe=m(R=>jt(H=>[R,...H].slice(0,5)),[]),Vt=async R=>{ot(R);let H=e?.app?.secretStorage||window.app?.secretStorage;H&&typeof H.setSecret=="function"&&await H.setSecret("urb-github-token",R)},nt=m(async()=>{if(console.log("%c[App] COMMAND: COMPILE_LOCAL","background: #f59e0b; color: #000; font-weight: bold; padding: 2px 5px; border-radius: 2px;"),!ye){console.error("[App] deploymentLogic MISSING");return}await ye.handleLocalDeploy({addLog:xe,setStatus:Z,setIsDeploying:pe,folderPath:f})},[ye,xe,Z,f]),it=m(async()=>{console.log("%c[App] COMMAND: PUBLISH_NATIVE","background: #10b981; color: #fff; font-weight: bold; padding: 2px 5px; border-radius: 2px;"),await ye.handlePublish({repoName:Ie,ghToken:Ze,addLog:xe,setStatus:Z,setIsPublishing:Ee,folderPath:f})},[ye,Ie,Ze,xe,Z,f]),qt=m(async()=>{console.log("%c[App] COMMAND: PUBLISH_WEB","background: #3b82f6; color: #fff; font-weight: bold; padding: 2px 5px; border-radius: 2px;"),await ye.handleWebPublish({addLog:xe,setStatus:Z,setIsPublishing:Ee,folderPath:f})},[ye,xe,Z,f]),rt=m(()=>{A.current&&clearTimeout(A.current),M(!0)},[]),Xt=m((R=!1)=>{A.current&&clearTimeout(A.current),!(Q&&!R)&&(A.current=setTimeout(()=>{M(!1)},600))},[Q]);p(()=>()=>{A.current&&clearTimeout(A.current)},[]);let Jt=m(R=>{if(R){if(o(R),t?.nodes){let H=t.nodes.findIndex(J=>J.id===R.id);H!==-1&&u(H)}ee(R)}},[t]),Qe=m(R=>{if(!(!t?.nodes||B||Q)&&!R.target.closest(".cinematic-frame")&&(R.preventDefault(),_.current)){let H=Math.max(-400,Math.min(400,R.deltaY));_.current.spin(H),le&&Se(!1)}},[t,le,B,Q]);p(()=>{let R=!0;async function H(){try{let ue=await s.loadScript(e,"https://unpkg.com/three@0.149.0/build/three.min.js",{globalName:"THREE"}),at=await s.loadScript(e,"https://unpkg.com/gsap@3.12.5/dist/gsap.min.js",{globalName:"gsap"});R&&(E.current.THREE=ue,E.current.gsap=at,T(!0))}catch(ue){console.error("[URB] Dependency load failed:",ue)}let J=e?.app?.secretStorage||window.app?.secretStorage,F="",de="NONE";if(J&&typeof J.getSecret=="function"){let ue=await J.getSecret("urb-github-token")||await J.getSecret("dc-github-token");ue&&(F=ue.trim(),de="MANUAL_UI")}if(!F)try{let{execSync:ue}=require("child_process"),Re=ue('security find-generic-password -s "gh:github.com" -w || security find-generic-password -s "github.com" -w || security find-generic-password -s "GitHub" -w',{encoding:"utf8"}).replace(/[\r\n]/g,"").trim();if(Re){if(Re.startsWith("go-keyring-base64:"))try{let Ce=Re.split(":")[1].trim();typeof Buffer<"u"?F=Buffer.from(Ce,"base64").toString("utf8").trim():F=decodeURIComponent(escape(window.atob(Ce))).trim()}catch(Ce){console.error("[App] Keychain decode failed:",Ce)}else F=Re;F&&(de="NATIVE_KEYCHAIN")}}catch{}R&&F&&(console.log(`%c[App] AUTH_READY [Source: ${de}]: prefix=${F.slice(0,4)}, len=${F.length}`,"color: #10b981; font-weight: bold;"),ot(F))}return H(),()=>{R=!1}},[]),p(()=>{async function R(){try{let H=e?.app?.vault;if(!H){console.log("[URB] Web Environment detected. Skipping Vault read.");return}let J="_RESOURCES/DATACORE/142_UltimateResumeBuilder/_resources/data/resume.md",F="";if(await H.adapter.exists(J)&&(F=await H.adapter.read(J)),F){let de=a(F);C(de),de.nodes?.length>0&&(o(de.nodes[0]),u(0),de.groups?.[0]&&me(de.groups[0].name))}}catch(H){console.error("[URB] Data Load Error:",H)}}R()},[f]),p(()=>{let R=P.current;return R&&R.addEventListener("wheel",Qe,{passive:!1}),()=>R?.removeEventListener("wheel",Qe)},[Qe]),p(()=>{if(x.type==="web")return;let R=setTimeout(()=>{if(console.log("[URB] Initiating FullTab Reparenting..."),!P.current)return;let H=P.current,J=H.closest(".workspace-leaf")||document.querySelector(".workspace-leaf.mod-active");if(!J){console.warn("[URB] No active leaf found for reparenting.");return}let F=J.querySelector(".view-content");if(!F){console.warn("[URB] No .view-content found in leaf.");return}window.getComputedStyle(F).position==="static"&&(F.style.position="relative"),F.style.overflow="hidden",F.appendChild(H),Object.assign(H.style,{position:"absolute",inset:"0px",zIndex:"9998",display:"flex"}),console.log("[URB] FullTab Reparenting SUCCESS. Managed by BETO.SKILL.")},800);return()=>clearTimeout(R)},[]);let Zt=async()=>{console.log(`[URB_HOIST] Initiating Manifest (Theme: ${O})...`);let R=document.querySelector(".urb-print-area");if(!R){console.error("[URB_HOIST] CRITICAL_FAILURE: Manifest target not found.");return}let H=R.parentElement,J=R.nextSibling;try{console.log("[URB_HOIST] Reparenting Manifest to Document Root..."),document.body.appendChild(R),document.body.classList.add("urb-is-printing"),document.body.classList.add(`urb-theme-${O}`),console.log("[URB_HOIST] Handover to Browser Manifest Engine..."),window.print(),setTimeout(()=>{console.log("[URB_HOIST] Restoring Manifest to Orbital Position..."),J?H.insertBefore(R,J):H.appendChild(R),document.body.classList.remove("urb-is-printing"),document.body.classList.remove("urb-theme-dark"),document.body.classList.remove("urb-theme-light"),Z("IDLE")},600)}catch(F){console.error("[URB_HOIST] Extraction Crash:",F),document.body.classList.remove("urb-is-printing"),Z("ERROR_HOIST")}},[Qt,re]=i(null),ve=R=>Qt!==R?null:React.createElement("div",{className:"urb-tooltip-js fade-in"},R);return t?React.createElement("div",{ref:P,className:`urb-root ${B?"urb-print-mode":""}`,style:{height:"100vh",display:"flex",flexDirection:"column",position:"relative",background:"#050508"}},React.createElement("style",null,d+`
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
            `),React.createElement("div",{className:"urb-hover-sensor",onMouseEnter:rt}),React.createElement("div",{className:"urb-viewport fade-in",style:{height:"100%",position:"relative",overflow:"hidden",background:"#050508"}},React.createElement("div",{style:{opacity:w?.panelType==="TIMELINE"?.2:1,transition:"opacity 1s ease"}},React.createElement(y,{dc:e,modules:s,TOKENS:n})),React.createElement("div",{style:{position:"absolute",inset:0,zIndex:100,pointerEvents:"none",opacity:w?.panelType==="TIMELINE"?.15:1,transition:"opacity 1s ease"}},React.createElement(b,{data:t,dc:e,modules:s,focusedNode:w,onNodeFocus:Jt,onScrollChange:L,TOKENS:n,controlRef:_})),React.createElement("div",{className:"cinematic-immersion-stage",style:{position:"absolute",inset:0,zIndex:200,pointerEvents:"none"}},h&&React.createElement(I,{node:w,scroll:he,activeTab:oe,isAutoPlay:le,dc:e,modules:{...s,...E.current},TOKENS:n}))),B&&React.createElement("div",{className:"urb-export-modal fade-in",style:{position:"absolute",inset:0,zIndex:20002,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.85)",backdropFilter:"none"}},React.createElement("div",{className:"cinematic-frame fade-in",style:{width:"90%",height:"85vh",maxWidth:"1000px",display:"flex",flexDirection:"column"}},React.createElement("div",{className:"urb-export-glass",style:{position:"relative",width:"100%",height:"100%",background:n.glassBg,borderRadius:"8px",overflow:"hidden",border:`1px solid ${n.border}`,boxShadow:"0 60px 120px rgba(0,0,0,0.95)",backdropFilter:"none",display:"flex",flexDirection:"column"}},React.createElement("div",{className:"urb-export-header",style:{padding:"15px 25px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.02)"}},React.createElement("div",{style:{display:"flex",alignItems:"center",gap:12}},React.createElement("div",{style:{width:10,height:10,borderRadius:"50%",background:"#ff5f56"}}),React.createElement("div",{style:{fontSize:10,color:n.textDim,fontFamily:n.fontMono,letterSpacing:2}},"MANIFEST://CLASSIFIED_DOSSIER_",t?.about?.name?.toUpperCase()||"BETO","_2026.pdf")),React.createElement("div",{style:{display:"flex",gap:6}},React.createElement("button",{className:`urb-act-btn ${O==="dark"?"active":""}`,onClick:()=>te("dark"),style:{fontSize:7,padding:"4px 8px"}},"DARK_DOSSIER"),React.createElement("button",{className:`urb-act-btn ${O==="light"?"active":""}`,onClick:()=>te("light"),style:{fontSize:7,padding:"4px 8px"}},"LIGHT_MANIFEST")),React.createElement("div",{style:{width:1,height:20,background:"rgba(255,255,255,0.1)",margin:"0 5px"}}),React.createElement("button",{className:"urb-act-btn primary",onClick:Zt},"MANIFEST_PHYSICAL"),React.createElement("button",{className:"urb-act-btn",onClick:()=>G(!1)},"CLOSE")),React.createElement("div",{className:"urb-preview-container",onMouseEnter:()=>z(!0),onMouseLeave:()=>z(!1),style:{overflowY:g?"auto":"hidden",cursor:g?"crosshair":"zoom-in"}},React.createElement("div",{className:`urb-preview-content ${g?"zoomed":"scaled"}`,style:{transform:g?"scale(1)":"scale(0.32)"}},React.createElement("div",{className:"urb-print-area"},React.createElement(v,{data:t,TOKENS:n,dc:e,modules:s}))))))),t&&React.createElement("div",{id:"urb-hud-stack",onMouseEnter:rt,onMouseLeave:()=>Xt(),style:{position:"absolute",top:0,left:0,right:0,zIndex:2e4,display:"flex",flexDirection:"column",padding:"24px 40px 60px 40px",background:"linear-gradient(to bottom, rgba(5,5,8,0.95) 0%, rgba(5,5,8,0.5) 40%, transparent 100%)",backdropFilter:"blur(30px) saturate(180%)",borderBottom:"1px solid rgba(255,255,255,0.03)",opacity:U?1:0,pointerEvents:U?"auto":"none",transform:`translateY(${U?"0":"-10px"})`,transition:"opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)"}},React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",flexWrap:"nowrap"}},React.createElement("div",{style:{display:"flex",alignItems:"center",gap:20,flexShrink:0}},React.createElement("div",{style:{fontSize:18,fontWeight:950,letterSpacing:-.5,color:"white",fontFamily:n.font,display:"flex",alignItems:"baseline",gap:8}},"BETO",React.createElement("span",{style:{opacity:.3,fontWeight:400}},".PORTFOLIO"),React.createElement("span",{style:{fontSize:8,opacity:.5,color:n.accent,fontWeight:900,letterSpacing:2,marginLeft:5}},"FORCE_SYNC_v1.1")),React.createElement("div",{style:{fontSize:8,color:n.accent,fontWeight:900,letterSpacing:1.5,border:`1px solid ${n.accent}22`,padding:"3px 8px",borderRadius:40,background:"rgba(168, 85, 247, 0.05)",display:"flex",alignItems:"center",gap:6}},React.createElement("div",{style:{width:4,height:4,borderRadius:"50%",background:n.accent}}),String(t?.about?.name||"BETO").toUpperCase()," // DOSSIER_LOGGED")),React.createElement("div",{style:{display:"flex",gap:15,alignItems:"center",flexShrink:0}},Y!=="IDLE"&&React.createElement("div",{style:{display:"flex",alignItems:"center",gap:8,marginRight:15}},React.createElement("div",{style:{width:6,height:6,borderRadius:"50%",background:n.accent,animation:"urb-pulse-dot 1s infinite"}}),React.createElement("div",{style:{fontSize:8,color:n.accent,fontFamily:n.fontMono,opacity:.8}},Y)),React.createElement("div",{className:"urb-hud-strip"},React.createElement("button",{className:"urb-icon-btn",onMouseEnter:()=>re("EXPORT_PDF"),onMouseLeave:()=>re(null),onClick:()=>G(!0)},React.createElement(e.Icon,{icon:"file-text",style:{width:14}}),ve("EXPORT_PDF")),React.createElement("button",{className:`urb-icon-btn primary ${X?"active":""}`,onMouseEnter:()=>re("COMPILE_LOCAL"),onMouseLeave:()=>re(null),onClick:nt,disabled:X||ce},React.createElement(e.Icon,{icon:X?"loader":"zap",style:{width:14}}),ve("COMPILE_LOCAL")),React.createElement("button",{className:`urb-icon-btn ${ce?"active":""}`,onMouseEnter:()=>re("PUB_PLUGIN"),onMouseLeave:()=>re(null),onClick:it,disabled:ce||X},React.createElement(e.Icon,{icon:ce?"loader":"github",style:{width:14}}),ve("PUB_PLUGIN")),React.createElement("button",{className:`urb-icon-btn web ${ce?"active":""}`,onMouseEnter:()=>re("PUB_WEB"),onMouseLeave:()=>re(null),onClick:qt,disabled:ce||X},React.createElement(e.Icon,{icon:ce?"loader":"globe",style:{width:14}}),ve("PUB_WEB")),React.createElement("div",{style:{width:1,height:16,background:"rgba(255,255,255,0.1)",margin:"0 4px"}}),React.createElement("button",{className:`urb-icon-btn ${Q?"active":""}`,onMouseEnter:()=>re("SETTINGS"),onMouseLeave:()=>re(null),onClick:()=>j(!Q)},React.createElement(e.Icon,{icon:"settings",style:{width:14}}),ve("SETTINGS")),React.createElement("button",{className:"urb-icon-btn danger",onMouseEnter:()=>re("EXIT_SYSTEM"),onMouseLeave:()=>re(null),onClick:()=>{e?.app?.workspace?.activeLeaf?e.app.workspace.activeLeaf.detach():window.close()}},React.createElement(e.Icon,{icon:"log-out",style:{width:14}}),ve("EXIT_SYSTEM"))))),React.createElement($,{folderPath:f,dc:e,modules:s,onReload:()=>e.app.workspace.activeLeaf?.rebuildView?.()})),Q&&t&&React.createElement("div",{className:"urb-settings-wrapper"},React.createElement("div",{className:"urb-settings-panel fade-in"},React.createElement("div",{style:{fontSize:10,fontWeight:900,color:n.accent,letterSpacing:2,marginBottom:10}},"[ SYSTEM_CONFIGURATION ]"),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:15}},React.createElement("input",{className:"urb-input",placeholder:"DEPLOY_REPO_ID",value:Ie,onChange:R=>Yt(R.target.value)}),React.createElement("input",{className:"urb-input",type:"password",placeholder:"GH_AUTH_TOKEN_ACTIVE",value:Ze,onChange:R=>Vt(R.target.value)}),React.createElement("button",{className:"urb-act-btn",style:{padding:"10px",background:"rgba(16, 185, 129, 0.1)",border:"1px solid #10b98144",color:"#10b981",fontSize:9,fontWeight:900,letterSpacing:1},onClick:()=>{let R=`https://github.com/beto-group/${Ie}`;window.open(R,"_blank")}},React.createElement(e.Icon,{icon:"github",style:{width:10,marginRight:6}}),"VISIT_REPOSITORY"),React.createElement("div",{style:{marginTop:10}},React.createElement(S,{TOKENS:n,isDeploying:X,isPublishing:ce,handleDeploy:nt,handlePublish:it,logs:Gt,status:Y})))))):React.createElement("div",{style:{color:"white",padding:20}},"Initializing Elite Resume Interface...")}var ht={App:uo};typeof ke<"u"&&ke.exports&&(ke.exports=ht);return ht});var vt=ne((an,Pe)=>{function fo({data:e,dc:s,modules:f,focusedNode:r,onNodeFocus:x,onScrollChange:i,TOKENS:p,controlRef:l}){let{useEffect:m,useRef:c,useState:n,useMemo:d}=s,{THREE:a,gsap:b}=f,y=c(null),k=c(null),[I,v]=n({width:0,height:0}),S=c(0),$=c(0),W=c(0),P=c(null),_=c("BETO_CORE"),t=c({scene:null,camera:null,renderer:null,instancedHubs:null,orbits:[]});m(()=>{if(!a||!k.current)return;let w=k.current,o=w.clientWidth,D=w.clientHeight,u=new a.Scene,h=new a.PerspectiveCamera(30,o/D,1,3e3);h.position.z=800;let T=new a.WebGLRenderer({alpha:!0,antialias:!0});T.setSize(o,D),T.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.insertBefore(T.domElement,w.firstChild),T.domElement.style.position="absolute",T.domElement.style.inset="0",T.domElement.style.zIndex="1",t.current={scene:u,camera:h,renderer:T,instancedHubs:null,orbits:[]};let E=()=>{t.current.animationId=requestAnimationFrame(E),t.current.instancedHubs,T.render(u,h)};return E(),()=>{cancelAnimationFrame(t.current.animationId),T.dispose(),w.contains(T.domElement)&&w.removeChild(T.domElement)}},[a]);let C=d(()=>{let{width:w,height:o}=I;if(!o||!w)return{yearSegments:[],monthHubs:[],itemHubs:[],radii:{}};let D=Math.max(.7,Math.min(1.3,o/900))*.9,u=90*D,h=220*D,T=430*D,E=.35,A=.2,U=.69,M=0,B=[],G=[],g=[],z="ARCHIVE",Q=M;if(e?.groups?.forEach(j=>{j.items.forEach((se,K)=>{let ie=M;g.push({...se,angle:ie,year:z,parentId:`m-${z}-${j.name}`}),M+=E}),M+=A,G.push({id:`m-${z}-${j.name}`,angle:g[g.length-1]?.angle||M,name:j.name.toUpperCase(),year:z})}),B.push({year:z,start:Q,end:M-U}),t.current.scene){let{scene:j}=t.current;t.current.instancedHubs&&j.remove(t.current.instancedHubs),t.current.orbits.forEach(ge=>j.remove(ge)),t.current.orbits=[];let se=ge=>{let ee=new a.BufferGeometry,le=[];for(let he=0;he<=64;he++){let L=he/64*Math.PI*2;le.push(new a.Vector3(Math.cos(L)*ge,Math.sin(L)*ge,0))}ee.setFromPoints(le);let Se=new a.Line(ee,new a.LineBasicMaterial({color:16777215,transparent:!0,opacity:.1}));j.add(Se),t.current.orbits.push(Se)};se(h),se(T);let K=new a.CircleGeometry(5,12),ie=new a.MeshBasicMaterial({color:16777215,transparent:!0,opacity:.5}),fe=new a.InstancedMesh(K,ie,g.length);j.add(fe),t.current.instancedHubs=fe}return{yearSegments:B,monthHubs:G,itemHubs:g,radii:{R_YEAR:u,R_MONTH:h,R_ITEM:T},scaleFactor:D}},[e,I]);return m(()=>{l&&(l.current={spin:w=>{let o=$.current-w*6e-4,D=C.itemHubs||[];if(D.length>0){let h=D[D.length-1].angle;o=Math.max(0,Math.min(h,o))}$.current=o,W.current=Math.min(1,W.current+.1)}})},[l,C]),m(()=>{r&&r.angle!==void 0&&($.current=r.angle)},[r]),m(()=>{r&&(W.current=1.8,$.current+=Math.random()>.5?.05:-.05)},[r?.id]),m(()=>{let w=k.current;if(!w)return;let o=new ResizeObserver(D=>{if(!D[0])return;let{width:u,height:h}=D[0].contentRect;v({width:u,height:h}),t.current.renderer&&(t.current.renderer.setSize(u,h),t.current.camera.aspect=u/h,t.current.camera.updateProjectionMatrix())});return o.observe(w),()=>{o.disconnect()}},[]),m(()=>{let w=y.current;if(!w||!I.width)return;let o=w.getContext("2d"),{width:D,height:u}=I,h=window.devicePixelRatio||1;w.width=D*h,w.height=u*h,o.scale(h,h);let T=()=>{let A=Date.now()*6e-4,{yearSegments:U,monthHubs:M,itemHubs:B,radii:G,scaleFactor:g}=C,{R_YEAR:z,R_MONTH:Q,R_ITEM:j}=G||{};S.current+=($.current-S.current)*.1;let se=S.current;if(W.current*=.95,typeof i=="function"&&i(se),t.current.instancedHubs){let L=new a.Matrix4,O=-D/2-150*g,te=u/2-u*.12;B.forEach((Y,Z)=>{let oe=(Y.angle-se)%6.28,me=Math.abs(oe>Math.PI?oe-6.28:oe<-Math.PI?oe+6.28:oe),X=Math.pow(Math.max(0,1-me*2.5),2),pe=r?.id===Y.id;L.makeTranslation(Math.cos(oe)*j+O,Math.sin(oe)*j+te,0),t.current.instancedHubs.setMatrixAt(Z,L),t.current.instancedHubs.setColorAt(Z,new a.Color(pe?p.accent:16777215))}),t.current.instancedHubs.instanceMatrix.needsUpdate=!0,t.current.instancedHubs.instanceColor&&(t.current.instancedHubs.instanceColor.needsUpdate=!0)}let K=L=>{let O=(L-se)%6.28;return O>3.14&&(O-=6.28),O<-3.14&&(O+=6.28),{ang:O,x:Math.cos(O),y:Math.sin(O),dist:O}},ie=null,fe=999;B.forEach(L=>{let O=K(L.angle);Math.abs(O.dist)<fe&&(fe=Math.abs(O.dist),ie=L)}),o.clearRect(0,0,D,u),o.save(),o.translate(0,u*.1),o.save();let ge=(55+W.current*25)*g;o.rotate(A*.3),o.strokeStyle=`rgba(255,255,255,${.15+W.current*.4})`,o.lineWidth=(1+W.current*1.5)*g;for(let L=0;L<8;L++){let O=L/8*Math.PI;o.beginPath(),o.ellipse(0,0,ge,ge*Math.abs(Math.sin(A+O)),A+O,0,6.28),o.stroke()}o.beginPath(),o.arc(0,0,(15+W.current*10)*g,0,6.28),o.fillStyle=`rgba(255,255,255,${.4+W.current*.6})`,o.fill(),o.restore(),o.save(),o.strokeStyle="rgba(255,255,255,0.06)",o.lineWidth=1*g,[Q,j].forEach(L=>{o.beginPath(),o.arc(0,0,L,0,6.28),o.stroke()}),o.strokeStyle="rgba(168,85,247,0.12)",o.setLineDash([5*g,15*g]),o.beginPath(),o.arc(0,0,z*1.5,0,6.28),o.stroke(),o.setLineDash([]),o.restore(),U.forEach(L=>{let O=K(L.start),te=K(L.end);if(Math.abs(O.dist)>2.5&&Math.abs(te.dist)>2.5)return;o.strokeStyle=`rgba(168, 85, 247, ${.1})`,o.lineWidth=3*g,o.beginPath(),o.arc(-150*g,0,z,O.ang,te.ang),o.stroke();let Y=K(L.start+.15);o.save(),o.translate(Y.x*z-150*g,Y.y*z),o.rotate(0),o.fillStyle=r?"rgba(168, 85, 247, 0.4)":p.accent,o.font=`900 ${18*g}px ${p.font}`,o.textAlign="center",o.fillText(L.year,0,0),o.strokeStyle="rgba(255,255,255,0.15)",o.lineWidth=1*g,o.beginPath(),o.moveTo(-30*g,25*g),o.lineTo(30*g,25*g),o.stroke(),o.fillStyle="rgba(255, 255, 255, 0.2)",o.font=`700 ${10*g}px ${p.fontMono}`,o.fillText("\u25B6 SYSTEM_MANIFEST",0,45*g),o.restore()}),B.forEach(L=>{let O=K(L.angle),te=Math.abs(O.dist);if(te>1.2)return;let Y=r?.id===L.id,Z=Y?1:Math.pow(Math.max(0,1-te*2.5),2),oe=O.x*j,me=O.y*j;if(Y&&te<.5){o.beginPath(),o.moveTo(0,0),o.lineTo(oe,me),o.strokeStyle=`rgba(168, 85, 247, ${Z*.3})`,o.lineWidth=.5*g,o.stroke(),o.fillStyle=`rgba(168, 85, 247, ${Z*.8})`,o.font=`900 ${7*g}px monospace`;for(let X=0;X<8;X++){let pe=(X/8+A*1.8)%1;o.fillText(X%2===0?"1":"0",oe*pe,me*pe)}}if(o.beginPath(),o.arc(oe,me,(Y?18:8)*g,0,6.28),o.fillStyle=Y?p.accent:`rgba(168, 85, 247, ${Z*.6})`,o.fill(),te<.25){o.save(),o.translate(oe,me),o.rotate(O.ang);let X=(L.title||"").toUpperCase(),pe=X.length>12?Math.max(.5,1-(X.length-12)*.05):1,ce=Y?r?.4:.8:Z*.15;o.fillStyle=`rgba(255,255,255,${ce})`,o.font=`${Y?900:400} ${Y?24*g*pe:14*g*pe}px ${p.font}`;let Ee=Y&&X.length>10?10*g:5*g;o.fillText(X,(Y?28:16)*g,Ee),o.restore()}}),o.restore();let ee=g*.8,le=60*ee;o.textAlign="right";let Se=ie?.year||"2025",he="DOSSIER";o.fillStyle=p.accent,o.font=`900 ${12*ee}px ${p.fontMono}`,o.fillText("BETO_OS",D-le,45*ee),o.fillStyle="rgba(255,255,255,1)",o.font=`900 ${72*ee}px ${p.font}`,o.fillText(he,D-le,105*ee),o.fillStyle="rgba(255,255,255,0.3)",o.font=`700 ${11*ee}px ${p.fontMono}`;for(let L=0;L<3;L++){let te="D.q.0x"+((Math.floor(A*10)+L)*1337%65535).toString(16).toUpperCase().padStart(4,"0");o.fillText(`\u2022 ${te}`,D-le,125*ee+L*18*ee)}o.fillStyle="rgba(255,255,255,0.5)",o.font=`900 ${10*ee}px ${p.fontMono}`,o.fillText(_.current,D-le,65*ee),ie&&fe<.28?P.current!==ie.id&&(P.current=ie.id,W.current=1,x&&x(ie),ie.location&&(_.current=ie.location.toUpperCase())):fe>.4&&P.current,E=requestAnimationFrame(T)},E=requestAnimationFrame(T);return()=>cancelAnimationFrame(E)},[C,I,r,x]),React.createElement("div",{ref:k,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",pointerEvents:"none"}},React.createElement("canvas",{ref:y,style:{width:"100%",height:"100%",display:"block"}}))}var xt={NodeGraph:fo};typeof Pe<"u"&&Pe.exports&&(Pe.exports=xt);return xt});var wt=ne((sn,Le)=>{var go=`
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
`,mo=`
    varying float vOpacity;
    uniform vec3 uColor;

    void main() {
        float d = distance(gl_PointCoord, vec2(0.5));
        if (d > 0.5) discard;
        gl_FragColor = vec4(uColor, vOpacity * (1.0 - d * 2.0));
    }
`;function bo({dc:e,modules:s,TOKENS:f}){let{useEffect:r,useRef:x}=e,{THREE:i}=s,p=x(null);return r(()=>{if(!i||!p.current)return;let l=p.current,m=l.clientWidth,c=l.clientHeight,n=new i.Scene,d=new i.PerspectiveCamera(75,m/c,1,1e3);d.position.z=500;let a=new i.WebGLRenderer({alpha:!0,antialias:!0});a.setSize(m,c),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.appendChild(a.domElement);let b=200,y=new i.BufferGeometry,k=new Float32Array(b*3),I=new Float32Array(b),v=new Float32Array(b),S=new Float32Array(b);for(let t=0;t<b;t++)k[t*3]=(Math.random()-.5)*2e3,k[t*3+1]=(Math.random()-.5)*2e3,k[t*3+2]=(Math.random()-.5)*1e3,I[t]=1+Math.random()*4,v[t]=.1+Math.random()*.5,S[t]=Math.random()*Math.PI*2;y.setAttribute("position",new i.BufferAttribute(k,3)),y.setAttribute("aSize",new i.BufferAttribute(I,1)),y.setAttribute("aSpeed",new i.BufferAttribute(v,1)),y.setAttribute("aOffset",new i.BufferAttribute(S,1));let $=new i.ShaderMaterial({uniforms:{uTime:{value:0},uColor:{value:new i.Color(f.accent)}},vertexShader:go,fragmentShader:mo,transparent:!0,blending:i.AdditiveBlending,depthWrite:!1}),W=new i.Points(y,$);n.add(W);let P,_=t=>{$.uniforms.uTime.value=t*.001,W.rotation.y=t*5e-5,a.render(n,d),P=requestAnimationFrame(_)};return _(0),()=>{cancelAnimationFrame(P),a.dispose(),l.contains(a.domElement)&&l.removeChild(a.domElement)}},[i]),React.createElement("div",{ref:p,style:{width:"100%",height:"100%",position:"absolute",inset:0,pointerEvents:"none",opacity:.6}},React.createElement("div",{style:{position:"absolute",inset:0,background:"radial-gradient(circle, transparent 40%, #000 100%)",zIndex:1}}))}function ho({dc:e,modules:s,travelData:f,TOKENS:r}){let{useEffect:x,useRef:i,useState:p}=e,l=i(null),m=i(null),[c,n]=p(!1);return x(()=>{let d=!0;async function a(){try{await Promise.all([s.loadScript(e,"https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js",{globalName:"d3"}),s.loadScript(e,"https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js",{globalName:"topojson"})]),d&&n(!0)}catch(b){console.error("[URB Globe] Resources failed:",b)}}return a(),()=>{d=!1}},[]),x(()=>{if(!c||!l.current||!window.d3)return;let d=m.current,a=d.getContext("2d"),b=window.d3,y=window.devicePixelRatio||1,k,I,v,S=b.geoOrthographic().clipAngle(90),$=b.geoPath(S,a);return(()=>{k=l.current.clientWidth,I=l.current.clientHeight,d.width=k*y,d.height=I*y,a.scale(y,y)})(),fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(P=>P.json()).then(P=>{let _=window.topojson.feature(P,P.objects.countries),t=()=>{a.clearRect(0,0,k,I),S.rotate([Date.now()*.012,-20]),S.scale(Math.min(k,I)*.42).translate([k/2,I/2]),a.beginPath(),$({type:"Sphere"}),a.fillStyle="rgba(168, 85, 247, 0.05)",a.fill(),a.beginPath(),$({type:"Sphere"}),a.fillStyle="rgba(10,10,10,0.9)",a.fill(),a.strokeStyle="rgba(168,85,247,0.4)",a.lineWidth=1,a.stroke(),a.beginPath(),$(_),a.fillStyle="rgba(255,255,255,0.02)",a.fill(),a.strokeStyle="rgba(255,255,255,0.15)",a.lineWidth=.5,a.stroke(),v=requestAnimationFrame(t)};t()}),()=>cancelAnimationFrame(v)},[c]),React.createElement("div",{ref:l,className:"urb-globe-shell fade-in",style:{position:"absolute",inset:0,pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}},React.createElement("canvas",{ref:m,style:{width:"100%",height:"100%"}}),React.createElement("div",{style:{position:"absolute",bottom:"15%",left:"50%",transform:"translateX(-50%)",textAlign:"center",width:"100%"}},React.createElement("div",{style:{fontSize:7,color:r.accent,fontWeight:900,letterSpacing:4,marginBottom:8}},"TACTICAL_DEPLOYMENT: TRAVEL_LOG"),React.createElement("h2",{style:{fontSize:24,fontWeight:900,margin:0,letterSpacing:-1,color:"white",lineHeight:1.1}},f?.title?.toUpperCase()),React.createElement("div",{style:{display:"flex",gap:40,marginTop:30,justifyContent:"center"}},f?.bullets?.map((d,a)=>React.createElement("div",{key:a,style:{border:`1px solid ${r.border}`,padding:"15px 25px",borderRadius:4,background:"rgba(0,0,0,0.5)"}},React.createElement("div",{style:{fontSize:9,color:r.textMuted,marginBottom:5}},"LOCATION_DATA"),React.createElement("div",{style:{fontSize:16,fontWeight:700,color:"white"}},d))))))}var St={GeometricParticles:bo,TravelGlobeWidget:ho};typeof Le<"u"&&Le.exports&&(Le.exports=St);return St});var It=ne((ln,Oe)=>{function yo({dc:e,data:s,TOKENS:f}){return React.createElement("div",{className:"urb-hero-content fade-in",style:{position:"relative",zIndex:10}},React.createElement("div",{className:"urb-hero-tagline"},s?.about?.tagline||"CREATING FACTOTUMS"),React.createElement("div",{className:"urb-hero-name",style:{fontSize:"12vw",fontWeight:900,letterSpacing:-10}},s?.about?.name||"BETO"),React.createElement("div",{style:{color:f.textDim,marginTop:12}},s?.about?.title||"Engineer & Technologist"))}function xo({children:e,TOKENS:s}){return React.createElement("div",{className:"cinematic-frame fade-in urb-float",style:{width:"85%",maxHeight:"82vh",maxWidth:"1200px",pointerEvents:"auto",display:"flex",flexDirection:"column"}},React.createElement("div",{style:{position:"relative",width:"100%",height:"100%",background:s.glassBg,borderRadius:s.radius,overflow:"hidden",border:`1px solid ${s.border}`,boxShadow:"0 40px 100px rgba(0,0,0,0.9)",display:"flex",flexDirection:"column"}},e,React.createElement("div",{style:{position:"absolute",bottom:0,left:0,width:"100%",height:4,background:s.accent,opacity:.8}})))}function vo({node:e,TOKENS:s}){let r=(e?.title?.length||0)>14?"clamp(32px, 5vw, 42px)":"clamp(42px, 8vw, 64px)";return React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:30}},React.createElement("div",{style:{flex:1,minWidth:0}},React.createElement("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:12}},React.createElement("div",{style:{fontSize:9,color:s.accent,fontWeight:900,letterSpacing:4}},"ENTRY_TYPE: NODEGRAPH_DATA"),React.createElement("div",{style:{width:40,height:1,background:s.border}}),React.createElement("div",{style:{fontSize:9,color:s.textMuted,fontWeight:700}},"VERIFIED_SECURE")),React.createElement("h2",{style:{fontSize:r,fontWeight:900,margin:0,letterSpacing:"-0.04em",lineHeight:1.05,overflowWrap:"break-word",hyphens:"auto",color:"white",maxWidth:"95%"}},e?.title?.toUpperCase()),React.createElement("div",{style:{fontSize:18,color:s.textDim,fontStyle:"italic",marginTop:18,maxWidth:"90%",lineHeight:1.5,fontWeight:300}},e?.desc)),React.createElement("div",{style:{textAlign:"right",fontSize:10,color:s.textMuted,opacity:.6,fontFamily:s.fontMono,lineSpacing:1.5}},React.createElement("div",{style:{color:s.accent}},"// REF_ID: ",e?.id?.toUpperCase()),React.createElement("div",null,"STATUS: ACTIVE_NODE"),React.createElement("div",null,"TIMESTAMP: ",new Date().toISOString().slice(0,10))))}function So({node:e,TOKENS:s}){return e?.bullets?React.createElement("div",{style:{display:"grid",gridTemplateColumns:"minmax(300px, 1fr) 1fr",gap:50,marginTop:"auto"}},React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:24}},e.bullets.slice(0,3).map((f,r)=>React.createElement("div",{key:r,style:{fontSize:17,color:"white",display:"flex",gap:20,borderLeft:`3px solid ${s.accent}`,paddingLeft:24,lineHeight:1.5,fontWeight:400}},React.createElement("span",null,f)))),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:18}},e.bullets.slice(3).map((f,r)=>React.createElement("div",{key:r,style:{fontSize:13,color:s.textDim,background:"rgba(255,255,255,0.03)",padding:"18px 25px",borderRadius:12,lineHeight:1.4,border:"1px solid rgba(255,255,255,0.05)"}},React.createElement("span",{style:{color:s.accent,marginRight:8}},"\u25B9"),f)))):null}function wo({node:e,dc:s,modules:f,TOKENS:r}){let{Platform:x}=f,{useEffect:i,useState:p,useRef:l}=x,[m,c]=p(null);i(()=>{if(e?.panelVideo&&window.app){let a=window.app.vault.getFiles().find(b=>b.name===e.panelVideo);if(a){let b=window.app.vault.getResourcePath(a);c(b)}}},[e?.panelVideo]);let n=!!e.mission,d=e.mission?e.mission.split("\u2794").map(a=>a.trim()).filter(Boolean):[];return React.createElement("div",{className:"urb-intel-pane",key:`intel-${e.id}`,style:{display:"flex",flexDirection:"column",gap:20,width:"100%",height:"100%",paddingBottom:40}},React.createElement("div",{style:{fontSize:9,color:r.accent,fontWeight:900,letterSpacing:3,display:"flex",alignItems:"center",gap:10}},React.createElement("span",{style:{width:6,height:6,borderRadius:"50%",background:r.accent}}),"D.q.ACTIVE_SECTOR // REF: ",e.id.toUpperCase()),React.createElement("h2",{style:{fontSize:38,margin:0,letterSpacing:-1,lineHeight:1,color:"white",fontWeight:900}},e.title.toUpperCase()),React.createElement("div",{style:{fontSize:17,lineHeight:1.6,opacity:.85,color:"white"}},e.panelText||e.desc),n&&React.createElement("div",{style:{marginTop:10,borderTop:"1px solid rgba(168,85,247,0.15)",paddingTop:20}},React.createElement("div",{style:{fontSize:9,color:r.accent,fontWeight:900,letterSpacing:2,marginBottom:15}},"SYSTEM_MISSION_SEQUENCE"),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12}},d.map((a,b)=>React.createElement("div",{key:b,style:{fontSize:15,fontWeight:600,display:"flex",gap:12,color:"white"}},React.createElement("span",{style:{color:r.accent}},"\u2794")," ",a)))),e.trigger&&React.createElement("div",{style:{marginTop:"auto",paddingTop:20,borderTop:"1px solid rgba(255,255,255,0.05)",display:"flex",justifyContent:"space-between",alignItems:"center"}},React.createElement("div",{style:{fontSize:8,fontFamily:r.fontMono,color:r.textMuted}},"TRIGGER_EVENT:"),React.createElement("div",{style:{fontSize:9,fontFamily:r.fontMono,color:r.accent,fontWeight:700}},e.trigger.toUpperCase())))}function Eo({node:e,TOKENS:s,dc:f}){return e?e.panelVideo||e.panelText?React.createElement(wo,{node:e,dc:f,modules,TOKENS:s}):React.createElement(xo,{TOKENS:s},React.createElement("div",{style:{padding:"70px 90px",flex:1,overflowY:"auto",display:"flex",flexDirection:"column"}},React.createElement(vo,{node:e,TOKENS:s}),React.createElement(So,{node:e,TOKENS:s}))):null}function Io({data:e,TOKENS:s,dc:f,modules:r}){if(!e)return null;let{Platform:x}=r,{useMemo:i}=x,p=e.nodes||[],l=i(()=>p.filter(n=>n.groupName?.toUpperCase().includes("EXPERIENCE")||n.groupName?.toUpperCase().includes("HISTORY")),[p]),m=i(()=>p.filter(n=>n.groupName?.toUpperCase().includes("SHOWCASE")||n.groupName?.toUpperCase().includes("PROJECTS")||n.groupName?.toUpperCase().includes("RESOURCES")),[p]),c=i(()=>p.filter(n=>n.groupName?.toUpperCase().includes("TRAVEL")||n.groupName?.toUpperCase().includes("NODES")),[p]);return React.createElement("div",{className:"urb-print-area urb-print-layout",style:{width:"100%",padding:"60px",color:"var(--urb-print-text, white) !important",fontFamily:s.font,display:"flex",flexDirection:"column",background:"var(--urb-print-bg, #050508) !important",minHeight:"100vh",visibility:"visible !important"}},React.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:50,borderBottom:"2px solid rgba(255,255,255,0.08)",paddingBottom:30}},React.createElement("div",null,React.createElement("div",{style:{fontSize:9,color:"var(--urb-print-accent)",fontWeight:900,letterSpacing:6,marginBottom:12}},"MASTER_CLASSIFICATION_PROTOCOL://",e.about?.name?.toUpperCase()||"ANONYMOUS"),React.createElement("div",{style:{fontFamily:s.fontMono,fontSize:36,fontWeight:900,color:"var(--urb-print-text)",letterSpacing:2}},"BETO",React.createElement("span",{style:{fontSize:16,opacity:.5,letterSpacing:8}},".PORTFOLIO"))),React.createElement("div",{style:{textAlign:"right",fontSize:10,color:"var(--urb-print-text)",opacity:.6,fontFamily:s.fontMono,lineHeight:2}},React.createElement("div",{style:{color:"var(--urb-print-accent)",fontWeight:900}},"[ EXTRACTION_STATUS: READY ]"),React.createElement("div",null,"LOC://",e.about?.location?.toUpperCase()||"UNIDENTIFIED"),React.createElement("div",null,"DATE://",new Date().toISOString().split("T")[0].toUpperCase()))),React.createElement("div",{style:{display:"grid",gridTemplateColumns:"280px 1fr 280px",gap:50,flex:1}},React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:40}},React.createElement("section",null,React.createElement("div",{style:{fontSize:10,fontWeight:900,color:"var(--urb-print-accent)",marginBottom:15,letterSpacing:3,borderLeft:"2px solid var(--urb-print-accent)",paddingLeft:10}},"\u25C6 CORE_IDENTITY"),React.createElement("div",{style:{fontSize:14,lineHeight:1.7,color:"var(--urb-print-text)",opacity:.9,background:"rgba(255,255,255,0.02)",padding:20,borderRadius:2}},e.about?.tagline||"IDENTITY_VERIFIED")),React.createElement("section",null,React.createElement("div",{style:{fontSize:10,fontWeight:900,color:"var(--urb-print-accent)",marginBottom:15,letterSpacing:3,borderLeft:"2px solid var(--urb-print-accent)",paddingLeft:10}},"\u25C6 SYSTEM_SPECS"),React.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:10}},["Typescript","React","Three.js","DirectX","Vulkan","Node.js","Architecture"].map(n=>React.createElement("div",{key:n,style:{fontSize:9,padding:"5px 10px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.1)",color:"var(--urb-print-text)",opacity:.6,borderRadius:2}},n.toUpperCase())))),React.createElement("section",{style:{marginTop:"auto"}},React.createElement("div",{style:{fontSize:9,fontFamily:s.fontMono,color:"var(--urb-print-text)",opacity:.4,lineHeight:2}},React.createElement("div",null,"SYSLOG_0X8F: AUTHENTICATED"),React.createElement("div",null,"ENCRYPTION: AES-256_STABLE"),React.createElement("div",null,"NETWORK: MESH_UP"),React.createElement("div",null,"LOC://",e.about?.location?.toUpperCase())))),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:25}},React.createElement("div",{style:{fontSize:10,fontWeight:900,color:"var(--urb-print-accent)",marginBottom:15,letterSpacing:3,borderLeft:"2px solid var(--urb-print-accent)",paddingLeft:10}},"\u25C6 OPERATIONAL_HISTORY_LOG"),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:30}},l.map((n,d)=>React.createElement("div",{key:d,style:{borderBottom:"1px solid rgba(255,255,255,0.05)",paddingBottom:25}},React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}},React.createElement("div",{style:{fontWeight:900,fontSize:18,color:"var(--urb-print-text)",letterSpacing:-.5}},n.title?.toUpperCase()),React.createElement("div",{style:{fontSize:10,fontFamily:s.fontMono,color:"var(--urb-print-accent)",background:"rgba(168, 85, 247, 0.1)",padding:"2px 8px",borderRadius:4}},n.date||"2024_ACTIVE")),React.createElement("div",{style:{fontSize:13,color:"var(--urb-print-text)",opacity:.7,lineHeight:1.6,marginBottom:15}},n.desc),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:10}},n.bullets?.slice(0,4).map((a,b)=>React.createElement("div",{key:b,style:{fontSize:12,color:"var(--urb-print-text)",display:"flex",gap:12,alignItems:"flex-start"}},React.createElement("span",{style:{color:"var(--urb-print-accent)",fontWeight:900}},"\u25B9"),React.createElement("span",{style:{opacity:.9}},a.toUpperCase())))))))),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:40}},React.createElement("section",null,React.createElement("div",{style:{fontSize:10,fontWeight:900,color:"var(--urb-print-accent)",marginBottom:15,letterSpacing:3,borderLeft:"2px solid var(--urb-print-accent)",paddingLeft:10}},"\u25C6 PROJECT_SHOWCASE"),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:20}},m.map((n,d)=>React.createElement("div",{key:n.id||d,style:{background:"rgba(168, 85, 247, 0.03)",padding:15,borderRadius:4,border:"1px solid rgba(168, 85, 247, 0.15)"}},React.createElement("div",{style:{fontWeight:900,fontSize:12,marginBottom:6,color:"var(--urb-print-text)",letterSpacing:1}},n.title?.toUpperCase()),React.createElement("div",{style:{fontSize:10,color:"var(--urb-print-text)",opacity:.6,lineHeight:1.5}},n.desc?.substring(0,100),"..."))))),React.createElement("section",null,React.createElement("div",{style:{fontSize:10,fontWeight:900,color:"var(--urb-print-accent)",marginBottom:15,letterSpacing:3,borderLeft:"2px solid var(--urb-print-accent)",paddingLeft:10}},"\u25C6 TRAVEL_CHART"),React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12,background:"rgba(255,255,255,0.01)",padding:15,borderRadius:4}},c.slice(0,6).map((n,d)=>React.createElement("div",{key:d,style:{fontSize:10,color:"var(--urb-print-text)",opacity:.4,display:"flex",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,255,0.03)",paddingBottom:4}},React.createElement("span",{style:{letterSpacing:1}},n.title?.toUpperCase()),React.createElement("span",{style:{color:"var(--urb-print-accent)",fontFamily:s.fontMono}},n.id?.toUpperCase()||"0X_ACTIVE"))))))),React.createElement("footer",{style:{marginTop:50,paddingTop:40,borderTop:"2px solid rgba(255,255,255,0.08)",textAlign:"center"}},React.createElement("div",{style:{fontSize:10,color:"var(--urb-print-text)",opacity:.4,fontFamily:s.fontMono,letterSpacing:6}},"END_OF_TRANSMISSION // BETO.portfolio_SECURE_EXTRACT")))}var Et={IntroSlide:yo,CinematicViewer:Eo,PrintLayout:Io};typeof Oe<"u"&&Oe.exports&&(Oe.exports=Et);return Et});var Ct=ne((cn,Be)=>{function Ro({node:e,nodes:s,scroll:f,activeTab:r,isAutoPlay:x,dc:i,modules:p,TOKENS:l}){let{Platform:m}=p,{useEffect:c,useRef:n,useState:d,useMemo:a}=m,{THREE:b,gsap:y,TravelGlobeWidget:k}=p,I=n(null),v=n({scene:null,camera:null,renderer:null,stage:null,layers:[],animationId:null,mouse:{x:0,y:0},targetMouse:{x:0,y:0},lastScroll:0}).current,[S,$]=d(!1),[W,P]=d({x:0,y:0}),_=n(null);c(()=>{if(!b||!I.current)return;let u=I.current,h=u.clientWidth,T=u.clientHeight,E=new b.Scene,A=new b.PerspectiveCamera(30,h/T,1,3e3);A.position.z=600;let U=new b.WebGLRenderer({alpha:!0,antialias:!0});U.setSize(h,T),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.appendChild(U.domElement);let M=new b.Group;E.add(M),v.scene=E,v.camera=A,v.renderer=U,v.stage=M,$(!0);let B=g=>{let z=u.getBoundingClientRect();v.targetMouse.x=(g.clientX-z.left)/h*2-1,v.targetMouse.y=-((g.clientY-z.top)/T)*2+1};window.addEventListener("mousemove",B);let G=()=>{v.animationId=requestAnimationFrame(G),v.mouse.x+=(v.targetMouse.x-v.mouse.x)*.012,v.mouse.y+=(v.targetMouse.y-v.mouse.y)*.012,P({x:v.mouse.x,y:v.mouse.y}),M&&(M.rotation.y=-v.lastScroll,v.layers.forEach(g=>{let z=g.userData?.wiggle||1;g.position.x=g.userData.originX+v.mouse.x*12*z,g.position.y=g.userData.originY+v.mouse.y*12*z})),U.render(E,A)};return G(),()=>{window.removeEventListener("mousemove",B),v.animationId&&cancelAnimationFrame(v.animationId),U.dispose(),u.contains(U.domElement)&&u.removeChild(U.domElement)}},[b]),c(()=>{v.lastScroll=f||0},[f]),c(()=>{if(!S||!e||!y)return;let{stage:u,layers:h}=v;h.forEach(E=>u.remove(E)),h.length=0,((E,A,U=0,M=0,B=120,G=120,g=1)=>{let z=document.createElement("canvas");z.width=1024,z.height=1024;let Q=z.getContext("2d");E(Q);let j=new b.CanvasTexture(z),se=new b.MeshBasicMaterial({map:j,transparent:!0,side:b.DoubleSide}),K=new b.Mesh(new b.PlaneGeometry(B,G),se);return K.position.set(U,M,A),K.userData={originX:U,originY:M,originZ:A,wiggle:g},u.add(K),h.push(K),K})(E=>{E.fillStyle="rgba(255,255,255,0.01)",E.font="900 120px Inter",E.textAlign="center";let A=typeof e?.groupName=="string"?e.groupName:e?.label||"DOSSIER";E.fillText(String(A).toUpperCase(),512,512)},-150,0,0,600,600,.4),h.forEach((E,A)=>{y.fromTo(E.material,{opacity:0},{opacity:1,duration:3,delay:A*.3,ease:"power2.out"})})},[e,S]);let t=i.useRef(!0),C=i.useRef(null);c(()=>{if(!_.current||!y||!(e?.id!==C.current)&&!t.current)return;C.current=e?.id;let h=_.current;if(!h)return;let T=h.querySelectorAll(".urb-entrance-buffer")[0],E=h.querySelectorAll(".urb-entrance-buffer")[1],A=Array.from(h.querySelectorAll(".urb-content-scroll > div")),U=[T,E].filter(Boolean);U.length>0&&y.killTweensOf([...U,...A]);let M=t.current?3.2:.8,B=t.current?.15:.05,G=t.current?150:40,g=y.timeline({onComplete:()=>{t.current=!1}});U.length>0&&(y.set(U,{opacity:0,y:G,scale:t.current?.8:.98,rotationX:t.current?20:5}),T&&g.to(T,{opacity:1,y:0,scale:1,rotationX:0,duration:M,ease:"power4.out"},.1),E&&g.to(E,{opacity:1,y:0,scale:1,rotationX:0,duration:M*1.1,ease:"power4.out"},.2)),A.length>0&&g.fromTo(A,{opacity:0,x:-40},{opacity:1,x:0,stagger:B,duration:M*.7,ease:"power2.out"},`-=${M*.8}`)},[e?.id,r,x,y]),c(()=>{if(!I.current)return;let u=new ResizeObserver(h=>{let{width:T,height:E}=h[0].contentRect;console.log(`%c \u{1F4DF} [DASHBOARD_DIMENSIONS] W: ${Math.round(T)}px | H: ${Math.round(E)}px `,"background: #111; color: #a855f7; font-weight: bold; border: 1px solid #331f4d; padding: 2px 8px; border-radius: 4px;")});return u.observe(I.current),()=>u.disconnect()},[]);let w=r==="TRAVEL"||e?.showGlobe||e?.layout==="tactical",o=e.groupName==="IDENTITY"||e.groupName==="ABOUT",D={background:"rgba(5, 5, 10, 0.15)",border:`1px solid ${l.border}`,borderRadius:"4px",color:"white",boxShadow:"0 40px 100px rgba(0,0,0,0.95)",transition:"transform 0.1s ease-out",pointerEvents:"auto"};return React.createElement("div",{ref:I,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"}},React.createElement("div",{style:{position:"absolute",inset:0,opacity:.8}}),React.createElement("div",{ref:_,style:{position:"absolute",inset:0,zIndex:20,pointerEvents:"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",paddingTop:"120px",paddingBottom:"60px",overflow:"hidden"}},e.panelType==="TIMELINE"&&p.TimelineSlide?React.createElement("div",{style:{width:"100%",height:"100%",pointerEvents:"auto"}},React.createElement(p.TimelineSlide,{node:e,dc:i,modules:p,TOKENS:l})):React.createElement(React.Fragment,null,React.createElement("div",{style:{display:"flex",gap:"20px",alignItems:"center",justifyContent:"center",width:"100%",maxWidth:"1100px",padding:"40px 20px 0 20px"}},React.createElement("div",{className:"urb-entrance-buffer",style:{flex:"1 1 0",minWidth:0,padding:"40px 24px 24px 24px",display:"flex",flexDirection:"column"}},React.createElement("div",{style:{...D,flex:1,display:"flex",flexDirection:"column"}},React.createElement("div",{style:{padding:"24px",flex:1,display:"flex",flexDirection:"column"}},React.createElement("div",{style:{marginBottom:20}},React.createElement("div",{style:{fontSize:9,color:l.accent,fontWeight:900,letterSpacing:3,marginBottom:8}},"ARCHIVE_VISUAL_0x00"),React.createElement("h2",{style:{fontSize:24,margin:0,color:"white",fontWeight:900,letterSpacing:-1}},"SECTOR.DOSSIER")),React.createElement("div",{style:{flex:1,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"320px"}},w&&k?React.createElement("div",{style:{width:"320px",height:"320px",position:"relative"}},React.createElement(k,{dc:i,modules:p,travelData:e,TOKENS:l})):React.createElement("div",{style:{fontSize:"10px",color:l.textMuted,letterSpacing:8,opacity:.15}},"[ SIDE_VISUAL_OFFLINE ]"))))),React.createElement("div",{className:"urb-entrance-buffer",style:{flex:"1 1 0",minWidth:0,maxWidth:"500px",padding:"40px 24px 24px 24px",display:"flex",flexDirection:"column"}},React.createElement("div",{style:{...D,flex:1,padding:"24px",display:"flex",flexDirection:"column",gap:"20px"}},React.createElement(React.Fragment,null,React.createElement("div",null,React.createElement("div",{style:{color:l.accent,fontSize:"10px",fontWeight:900,fontFamily:l.fontMono,letterSpacing:3,marginBottom:"8px"}},"\u25C6 DOSSIER_INTEL // SYNC_0x",e.id?.slice(-4).toUpperCase()||"AX"),React.createElement("h1",{style:{margin:0,fontSize:"32px",fontWeight:900,fontFamily:l.font,letterSpacing:-1,lineHeight:1,color:"white"}},e.title.toUpperCase())),React.createElement("div",{style:{flex:1,overflowY:"auto",maxHeight:"55vh",paddingRight:"20px",msOverflowStyle:"none",scrollbarWidth:"none"}},React.createElement("style",null,`
                                        .urb-content-scroll::-webkit-scrollbar { width: 0; background: transparent; }
                                    `),React.createElement("div",{className:"urb-content-scroll",style:{paddingBottom:"40px"}},(e.panelText||e.desc)&&React.createElement("div",{style:{fontSize:"17px",fontWeight:400,fontFamily:l.font,lineHeight:1.6,color:"white",marginBottom:"35px",borderRight:"1px solid rgba(255,255,255,0.05)",paddingRight:"20px",opacity:.9}},e.panelText||e.desc),e.mission&&React.createElement("div",{style:{marginBottom:"35px"}},React.createElement("div",{style:{fontSize:"10px",color:l.accent,fontWeight:900,fontFamily:l.fontMono,letterSpacing:4,marginBottom:"18px",opacity:.8}},"SYSTEM_MISSION_SEQUENCE"),e.mission.split("\u2794").map(u=>u.trim()).filter(Boolean).map((u,h)=>React.createElement("div",{key:h,style:{display:"flex",alignItems:"center",gap:"20px",marginBottom:"15px",fontSize:"15px",fontWeight:600,color:"white"}},React.createElement("span",{style:{color:l.accent}},"\u2794")," ",u))),e.bullets?.length>0&&React.createElement("div",{style:{marginBottom:"40px"}},React.createElement("div",{style:{fontSize:"9px",color:l.textMuted,letterSpacing:3,marginBottom:"20px"}},"SUPPLEMENTARY_DATA_STREAM"),e.bullets.map((u,h)=>React.createElement("div",{key:h,style:{display:"flex",alignItems:"flex-start",gap:"20px",marginBottom:"15px"}},React.createElement("span",{style:{color:l.accent,fontWeight:900,fontSize:"13px"}},">>"),React.createElement("span",{style:{fontSize:"14px",fontWeight:400,fontFamily:l.font,lineHeight:1.5,color:"rgba(255,255,255,0.4)"}},u.toUpperCase())))))),React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",paddingTop:"25px",borderTop:"1px solid rgba(255,255,255,0.08)"}},React.createElement("div",null,e.trigger&&React.createElement("div",{style:{fontSize:"9px",fontFamily:l.fontMono,color:l.textMuted,letterSpacing:2}},"TRIGGER: ",React.createElement("span",{style:{color:l.accent,fontWeight:900}},e.trigger.toUpperCase())),React.createElement("div",{style:{fontSize:"8px",color:l.textMuted,marginTop:"4px",letterSpacing:1}},"SYSTEM_AUTO_SAFE: ON")),React.createElement("div",{className:"fade-in",style:{padding:"12px 24px",color:"white",background:l.accent,fontSize:"10px",fontWeight:900,fontFamily:l.fontMono,letterSpacing:3,border:"1px solid white",boxShadow:`0 10px 30px ${l.accent}44`}},o?"LOGIN_SUCCESS":"DATA_STABLE")))))))),React.createElement("div",{style:{position:"absolute",inset:0,background:"radial-gradient(circle at center, rgba(168, 85, 247, 0.08) 0%, transparent 85%)",pointerEvents:"none"}}))}var Rt={FloatingScene:Ro};typeof Be<"u"&&Be.exports&&(Be.exports=Rt);return Rt});var Dt=ne((pn,ze)=>{function Co({TOKENS:e,isDeploying:s,isPublishing:f,handleDeploy:r,handlePublish:x,logs:i,status:p}){return React.createElement("div",{className:"deploy-bridge-panel fade-in",style:{padding:"20px",background:"rgba(5,5,8,0.4)",border:`1px solid ${e.border}44`,borderRadius:4,display:"flex",flexDirection:"column",gap:15}},React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},React.createElement("div",{style:{fontSize:10,color:e.accent,fontWeight:900,letterSpacing:2}},"TACTICAL_BRIDGE_v2.0"),React.createElement("div",{style:{fontSize:8,color:p==="IDLE"?e.textDim:e.accent,opacity:.8}},p)),React.createElement("div",{className:"urb-mini-terminal",style:{height:100,overflowY:"auto",background:"rgba(0,0,0,0.3)",padding:10,borderRadius:2,border:`1px solid ${e.border}22`,fontSize:9,fontFamily:"monospace",color:e.textDim}},i.length>0?i.map((l,m)=>React.createElement("div",{key:m,style:{marginBottom:4,opacity:m===0?1:.5}},`> ${l}`)):React.createElement("div",{style:{opacity:.3}},"Awaiting packet transmission...")))}var At={DeployBridge:Co};typeof ze<"u"&&ze.exports&&(ze.exports=At);return At});var _t=ne((dn,Ue)=>{function Ao({dc:e,nodes:s,node:f,TOKENS:r}){let{useRef:x,useEffect:i}=e,p=x(null),l=x(null),m=x(null),c=x({animationId:null,lastTime:0,items:[],state:{scroll:0,velocity:0,targetSpeed:2.5,mouseX:0,mouseY:0},CONFIG:{itemCount:25,zGap:600,loopSize:0,camSpeed:1.5,accent:r.accent}});return i(()=>{let n=!0,{state:d,CONFIG:a,items:b}=c.current,y=l.current,k=m.current;if(!y||!k)return;y.innerHTML="",b.length=0,a.loopSize=a.itemCount*a.zGap;for(let S=0;S<a.itemCount;S++){let $=document.createElement("div");$.className="urb-hs-item";let W=document.createElement("div");W.className="urb-hs-card";let P=f.bullets[S%f.bullets.length]||"ARCHIVE_ENTRY_SYNCED",_=Math.floor(Math.random()*9999).toString(16).toUpperCase();W.innerHTML=`
                <div class="urb-hs-header">
                    <span style="color:${r.accent}; font-weight:900;">\u25C6 [0x${_}]</span>
                    <span style="opacity:0.4; font-size:9px;">ARCHIVE_OS_V1.42</span>
                </div>
                <div class="urb-hs-body">${P.toUpperCase()}</div>
                <div class="urb-hs-footer">
                    <span>SECTOR_${S}</span>
                    <span>STATUS:STABLE</span>
                </div>
            `,$.appendChild(W);let t=S/a.itemCount*Math.PI*4,C=Math.cos(t)*300+(Math.random()-.5)*100,w=Math.sin(t)*300+(Math.random()-.5)*100,o=(Math.random()-.5)*20;b.push({el:$,x:C,y:w,rot:o,baseZ:-S*a.zGap}),y.appendChild($)}let I="urb-hs-styles";if(!document.getElementById(I)){let S=document.createElement("style");S.id=I,S.innerHTML=`
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
                    border-left: 4px solid ${r.accent};
                    backdrop-filter: none;
                    color: white;
                    font-family: ${r.font};
                    transform: translate(-50%, -50%);
                    box-shadow: 0 20px 50px rgba(0,0,0,0.8);
                }
                .urb-hs-header { display: flex; justify-content: space-between; font-size: 10px; margin-bottom: 20px; font-family: ${r.fontMono}; letter-spacing: 1px; }
                .urb-hs-body { font-size: 14px; font-weight: 600; line-height: 1.5; opacity: 0.9; min-height: 60px; }
                .urb-hs-footer { margin-top: 20px; display: flex; justify-content: space-between; font-size: 8px; font-family: ${r.fontMono}; opacity: 0.3; }
            `,document.head.appendChild(S)}function v(S){if(!n)return;let $=S-c.current.lastTime;c.current.lastTime=S,d.velocity+=(d.targetSpeed-d.velocity)*.05,d.scroll+=d.velocity;let W=d.scroll*a.camSpeed,P=a.loopSize;b.forEach(_=>{let C=((_.baseZ+W)%P+P)%P;C>500&&(C-=P);let w=1;C<-2500?w=0:C<-1500&&(w=(C+2500)/1e3),C>100&&(w=1-(C-100)/400),w<0&&(w=0),_.el.style.opacity=w,w>0&&(_.el.style.transform=`translate3d(${_.x}px, ${_.y}px, ${C}px) rotateZ(${_.rot}deg)`)}),c.current.animationId=requestAnimationFrame(v)}return c.current.animationId=requestAnimationFrame(v),()=>{n=!1,cancelAnimationFrame(c.current.animationId)}},[f.id]),React.createElement("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"}},React.createElement("div",{ref:m,style:{position:"absolute",inset:0,perspective:"1000px"}},React.createElement("div",{ref:l,style:{position:"absolute",top:"50%",left:"50%",transformStyle:"preserve-3d"}})))}var Tt={HyperScroll:Ao};typeof Ue<"u"&&Ue.exports&&(Ue.exports=Tt);return Tt});var kt=ne((un,Ne)=>{function Do({node:e,dc:s,modules:f,TOKENS:r}){let{useEffect:x,useRef:i,useState:p,useMemo:l}=s,{gsap:m}=f,c=i(null),n=i(null),d=i(null),[a,b]=p(null),y=1999,I=2026-y+1,v=80,S=80,$={LIFE:0,EDUCATION:1,PROFESSIONAL:2,INNOVATION:3},W=l(()=>(e.epochs||[]).map(t=>{let C=t.replace(/[\[\]]/g,"").split("|").map(E=>E.trim()),[w,o,D,u]=C,[h,T]=w.split("-").map(E=>parseInt(E.trim()));return{start:h,end:T,title:o,desc:u||"VERIFIED_RECORD",track:$[D]??0,color:D==="PROFESSIONAL"?r.accent:"rgba(255,255,255,0.4)"}}),[e.epochs]),P=l(()=>(e.milestones||[]).map(t=>{let C=t.replace(/[\[\]]/g,"").split("|").map(h=>h.trim()),[w,o,D,u]=C;return{year:parseInt(w),title:o,media:D.replace(/!\[\[|\]\]/g,""),quote:u.replace(/^"|"$/g,"")}}),[e.milestones]),_=i(!1);return x(()=>{if(!m||!d.current||!n.current)return;let t=n.current,C=t.scrollLeft,w=!1,o=0,D=g=>{_.current=!0,C+=g;let z=t.scrollWidth-t.clientWidth;C=Math.max(0,Math.min(z,C)),m.to(t,{scrollLeft:C,duration:.9,ease:"power2.out",overwrite:"auto"})},u=g=>{Math.abs(g.deltaX)>Math.abs(g.deltaY)&&D(g.deltaX*1.5)},h=g=>{w=!0,o=g.pageX,t.style.cursor="grabbing",C=t.scrollLeft},T=g=>{if(!w)return;g.preventDefault();let z=g.pageX,Q=o-z;o=z,D(Q*1.5)},E=()=>{w=!1,t.style.cursor="grab"};t.addEventListener("wheel",u,{passive:!0}),t.addEventListener("pointerdown",h),window.addEventListener("pointermove",T),window.addEventListener("pointerup",E);let A=m.timeline({delay:.5,onUpdate:()=>{_.current&&A.kill()}});A.fromTo(c.current,{opacity:0},{opacity:1,duration:1.2}),A.to(".origin-overlay",{opacity:.9,duration:1},"-=0.2");let U=I*v,M=t.clientWidth||1e3,B=M/2-v/2,G=Math.max(0,U-M);if(G>0){A.set(t,{scrollLeft:-B}),A.to(t,{scrollLeft:-B,duration:.4});let g=(2017-y)*v-B;A.to(t,{scrollLeft:Math.min(g,G),duration:1,ease:"power4.inOut",onStart:()=>{m.to(d.current,{scale:.99,duration:.5,yoyo:!0,repeat:1}),m.to(".origin-overlay",{opacity:0,duration:.6})}}),A.to(t,{scrollLeft:G,duration:8.5,ease:"none",onStart:()=>{m.to(".epoch-node",{boxShadow:`0 0 30px ${r.accent}88`,opacity:1,duration:.6,stagger:.05})}})}return()=>{A.kill(),t.removeEventListener("wheel",u),t.removeEventListener("pointerdown",h),window.removeEventListener("pointermove",T),window.removeEventListener("pointerup",E)}},[m,I,v]),React.createElement("div",{ref:c,style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",background:"transparent",color:"white",overflow:"hidden",padding:"60px 0",opacity:1}},React.createElement("div",{className:"origin-overlay",style:{position:"absolute",top:"150px",right:"60px",padding:"12px 24px",background:"rgba(15, 15, 20, 0.9)",border:`1px solid ${r.accent}44`,backdropFilter:"none",color:r.accent,fontSize:"10px",fontWeight:900,zIndex:2e3,pointerEvents:"none",fontFamily:r.fontMono,opacity:0,letterSpacing:2,boxShadow:"0 20px 50px rgba(0,0,0,0.8)"}},"[ ARCHIVE_ORIGIN_SYNC // DEC_1999 ]",React.createElement("br",null),React.createElement("span",{style:{fontSize:"7px",opacity:.5,letterSpacing:1}},"DECODING_BIOLOGICAL_INITIATIVE... [SUCCESS]")),React.createElement("div",{style:{padding:"20px 60px",marginBottom:"40px",zIndex:100,background:"linear-gradient(to bottom, rgba(5,5,8,0.8), transparent)",backdropFilter:"none"}},React.createElement("div",{style:{color:r.accent,fontSize:"9px",fontWeight:900,fontFamily:r.fontMono,letterSpacing:4,marginBottom:"6px"}},"PROTOCOL_CHRONOS // SYSTEM_ARCHIVE_v5.2"),React.createElement("h1",{style:{margin:0,fontSize:"32px",fontWeight:900,fontFamily:r.font,letterSpacing:-1}},"BIOGRAPHICAL_TRAJECTORY")),React.createElement("div",{ref:n,onMouseDown:()=>_.current=!0,onPointerDown:()=>_.current=!0,style:{height:"680px",width:"100%",overflowX:"auto",overflowY:"hidden",msOverflowStyle:"none",scrollbarWidth:"none",position:"relative",cursor:"grab",zIndex:9999}},React.createElement("style",null," .timeline-scroll-container::-webkit-scrollbar { display: none; } "),React.createElement("div",{ref:d,style:{width:`${I*v}px`,height:"100%",position:"relative",padding:"20px 0",zIndex:9999}},Array.from({length:I}).map((t,C)=>React.createElement("div",{key:C,style:{position:"absolute",left:C*v,top:0,bottom:0,width:"1px",background:"rgba(255,255,255,0.05)",display:"flex",flexDirection:"column",justifyContent:"flex-end",paddingBottom:"20px",zIndex:1}},React.createElement("div",{style:{fontSize:"10px",color:(y+C)%5===0?r.accent:"rgba(255,255,255,0.1)",fontFamily:r.fontMono,transform:"rotate(-90deg) translateX(-10px)",opacity:(y+C)%5===0?1:.2}},y+C))),React.createElement("div",{style:{position:"relative",height:"100%",zIndex:10}},W.map((t,C)=>{let w=(t.start-y)*v,o=(t.end-t.start+1)*v,D=t.track*S+20;return React.createElement("div",{key:C,className:"epoch-node fade-in",style:{position:"absolute",left:w,top:D,width:o-10,height:"30px",background:a===t?"rgba(168, 85, 247, 0.2)":"rgba(5, 5, 8, 0.6)",backdropFilter:"none",border:`1px solid ${a===t?r.accent:t.color+"44"}`,borderRadius:"4px",padding:"0 12px",display:"flex",alignItems:"center",transition:"all 0.3s ease",cursor:"help",opacity:a&&a!==t?.4:1,zIndex:a===t?100:10},onMouseEnter:()=>b(t),onMouseLeave:()=>b(null)},React.createElement("div",{style:{width:"4px",height:"100%",background:t.color,position:"absolute",left:0}}),React.createElement("div",{style:{fontSize:"10px",fontWeight:900,fontFamily:r.fontMono,color:"white",letterSpacing:1}},t.title.toUpperCase()),React.createElement("div",{style:{position:"absolute",right:10,fontSize:"8px",color:r.textMuted,opacity:.5}},t.start===t.end?t.start:`${t.start} - ${t.end}`))}),P.map((t,C)=>{let w=(t.year-y)*v+v/2,o=3.5*S;return React.createElement("div",{key:C,style:{position:"absolute",left:w,top:o,display:"flex",flexDirection:"column",alignItems:"center"}},React.createElement("div",{style:{width:"1px",height:"60px",background:`linear-gradient(to top, ${r.accent}, transparent)`}}),React.createElement("div",{className:"milestone-pin",style:{padding:"12px",background:"rgba(10, 10, 15, 0.9)",border:`1px solid ${a===t?r.accent:r.accent+"88"}`,borderRadius:"4px",width:"150px",boxShadow:"0 10px 30px rgba(0,0,0,0.5)",transition:"all 0.3s ease",cursor:"help",opacity:a&&a!==t?.4:1,transform:a===t?"scale(1.05)":"scale(1)"},onMouseEnter:()=>b(t),onMouseLeave:()=>b(null)},React.createElement("div",{style:{fontSize:"9px",color:r.accent,fontWeight:900,marginBottom:"6px"}},t.year," // ",t.title),React.createElement("div",{style:{fontSize:"11px",color:"rgba(255,255,255,0.7)",fontStyle:"italic",position:"relative",paddingLeft:"15px"}},React.createElement("span",{style:{position:"absolute",left:0,color:r.accent}},'"'),t.quote),t.media&&React.createElement("div",{style:{marginTop:"12px",width:"100%",height:"110px",background:"black",borderRadius:"4px",overflow:"hidden",border:"1px solid rgba(255,255,255,0.1)",position:"relative"}},React.createElement("video",{src:t.media,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"cover",opacity:.8}}),React.createElement("div",{style:{position:"absolute",top:5,right:8,fontSize:"7px",color:r.accent,opacity:.5}},"LIVE_FEED"))))})))),React.createElement("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:"100px",background:"linear-gradient(90deg, #050508 0%, transparent 100%)",zIndex:100,pointerEvents:"none"}}),React.createElement("div",{style:{position:"absolute",right:0,top:0,bottom:0,width:"100px",background:"linear-gradient(-90deg, #050508 0%, transparent 100%)",zIndex:100,pointerEvents:"none"}}),a&&React.createElement("div",{className:"fade-in",style:{position:"absolute",bottom:"60px",left:"60px",width:"500px",padding:"40px",background:"rgba(5, 5, 8, 0.98)",border:`1px solid ${r.accent}`,borderRadius:"4px",zIndex:1e4,pointerEvents:"none",boxShadow:"0 20px 60px rgba(0,0,0,0.9)"}},React.createElement("div",{style:{fontSize:"10px",color:r.accent,fontWeight:900,fontFamily:r.fontMono,letterSpacing:3,marginBottom:"12px"}},"INTELLIGENCE_REPORT // ",a.year||`${a.start}-${a.end}`),React.createElement("div",{style:{fontSize:"20px",fontWeight:900,color:"white",marginBottom:"8px",letterSpacing:-.5}},a.title.toUpperCase()),React.createElement("div",{style:{fontSize:"11px",color:"rgba(255,255,255,0.6)",lineHeight:1.6,fontFamily:r.fontMono}},a.desc||a.quote||"ARCHIVE_DETAILS_ENCRYPTED"),React.createElement("div",{style:{marginTop:"16px",display:"flex",gap:"8px"}},React.createElement("div",{style:{fontSize:"8px",color:r.accent,background:"rgba(168, 85, 247, 0.1)",padding:"2px 8px",borderRadius:"2px",border:`1px solid ${r.accent}33`}},a.start?"EPOCH_ACTIVE":"MILESTONE_VERIFIED"))))}var Mt={TimelineSlide:Do};typeof Ne<"u"&&Ne.exports&&(Ne.exports=Mt);return Mt});var Lt=ne((fn,$e)=>{function To({folderPath:e,dc:s,onReload:f,modules:r}){let{useEffect:x,useRef:i}=s,p=e+"/mcp_commands.json";return x(()=>{let l=s.app.vault.adapter,c=setInterval(async()=>{try{if(!await l.exists(p))return;let n=await l.read(p),d;try{d=JSON.parse(n)}catch{return}if(d&&d.executed===!1){console.log("\u{1F916} MCP BRIDGE: Executing action:",d.action);let a="Success";if(!["reload","screenshot","devtools","ping","open_settings"].includes(d.action))throw new Error(`Unauthorized: ${d.action}`);if(d.action==="reload")await f();else if(d.action==="screenshot")try{let v=(await(require("@electron/remote")||require("electron").remote).getCurrentWebContents().capturePage()).toDataURL(),S=e+"/mcp_snapshot.txt";await l.write(S,v),a=`Snapshot captured to ${S}`}catch(y){a="Snapshot failed: "+y.message}else if(d.action==="devtools")try{(require("@electron/remote")||require("electron").remote).getCurrentWebContents().openDevTools(),a="DevTools opened"}catch(y){a="DevTools error: "+y.message}else d.action==="open_settings"&&s.app.setting.open();d.executed=!0,d.executedAt=new Date().toISOString(),d.result=a,await l.write(p,JSON.stringify(d,null,2))}}catch(n){console.error("[MCP Bridge] Error:",n)}},1e3);return()=>clearInterval(c)},[]),null}var Pt={MCPBridge:To};typeof $e<"u"&&$e.exports&&($e.exports=Pt);return Pt});var Zo={};oo(Zo,{default:()=>Xe});module.exports=io(Zo);var Je=require("obsidian"),ae,be;try{if(ae=window.React,be=window.ReactDOM,!ae&&typeof require<"u"&&(ae=require("react")),!be&&typeof require<"u")try{be=require("react-dom/client")}catch{be=require("react-dom")}console.log("[Dossier OS] IDENTITY_SYNC: Initializing Forensic Audit..."),console.log("[Dossier OS] Environment Audit:",{ReactV:ae?.version||"MISSING",ReactDOMV:be?.version||"MISSING",hasWindowReact:!!window.React,hasRequire:typeof require<"u"})}catch(e){console.error("[Dossier OS] IDENTITY_CRASH: Could not resolve host React.",e)}var Ot=lt(),Wt=Ot.default||Ot,_o=Wt.TOKENS,Mo=Wt.GLOBAL_CSS,Bt=pt(),ko=Bt.default||Bt,Po=ko.parseResumeMarkdown,zt=ut(),Lo=zt.default||zt,Oo=Lo.getDeploymentLogic,Ut=gt(),Bo=Ut.default||Ut,zo=Bo.createAdapter,Nt=bt(),Uo=Nt.default||Nt,No=Uo.loadScript,He=yt(),we=He.App||He.default?.App||He.default||He,We=vt(),$o=We.NodeGraph||We.default?.NodeGraph||We.default||We,$t=wt(),Ft=$t.default||$t,Ho=Ft.GeometricParticles,Wo=Ft.TravelGlobeWidget,Ht=It(),tt=Ht.default||Ht,Fo=tt.IntroSlide,Go=tt.CinematicViewer,jo=tt.PrintLayout,Fe=Ct(),Yo=Fe.FloatingScene||Fe.default?.FloatingScene||Fe.default||Fe,Ge=Dt(),Vo=Ge.DeployBridge||Ge.default?.DeployBridge||Ge.default||Ge,je=_t(),qo=je.HyperScroll||je.default?.HyperScroll||je.default||je,Ye=kt(),Xo=Ye.TimelineSlide||Ye.default?.TimelineSlide||Ye.default||Ye,Ve=Lt(),Jo=Ve.MCPBridge||Ve.default?.MCPBridge||Ve.default||Ve,qe="dossier-os-view",et=class extends Je.ItemView{constructor(s){super(s)}getViewType(){return qe}getDisplayText(){return"Dossier OS"}async onOpen(){let s=this.containerEl.children[1];s.empty();let f=({icon:n,style:d})=>{let a={zap:"\u26A1",github:"\u{1F419}",settings:"\u2699\uFE0F",loader:"\u23F3",target:"\u{1F3AF}",terminal:"\u{1F4DF}",activity:"\u{1F4C8}",database:"\u{1F5C4}\uFE0F","file-text":"\u{1F4C4}",globe:"\u{1F310}","log-out":"\u23FB"};return ae.createElement("span",{style:{...d,display:"inline-flex",alignItems:"center",justifyContent:"center"}},a[n]||"\u25C6")},r={useState:ae.useState,useEffect:ae.useEffect,useRef:ae.useRef,useCallback:ae.useCallback,useMemo:ae.useMemo,app:window.app,Icon:f},x={App:we,TOKENS:_o,GLOBAL_CSS:Mo,parseResumeMarkdown:Po,getDeploymentLogic:Oo,createAdapter:zo,loadScript:No,NodeGraph:$o,GeometricParticles:Ho,TravelGlobeWidget:Wo,IntroSlide:Fo,CinematicViewer:Go,PrintLayout:jo,FloatingScene:Yo,DeployBridge:Vo,HyperScroll:qo,TimelineSlide:Xo,MCPBridge:Jo},i=["App","NodeGraph","IntroSlide","CinematicViewer","PrintLayout","FloatingScene","TimelineSlide","HyperScroll","MCPBridge","DeployBridge","GeometricParticles","TravelGlobeWidget","getDeploymentLogic","createAdapter"],p=i.filter(n=>!x[n]),l=i.filter(n=>x[n]&&typeof x[n]!="function");p.length>0?console.error(`[Dossier OS] CRITICAL_FAILURE: Missing Modules: ${p.join(", ")}`):l.length>0?(console.error(`[Dossier OS] TYPE_FAILURE: Non-Function Modules detected: ${l.join(", ")}`),l.forEach(n=>console.log(`[Dossier OS] Improper Value (${n}):`,x[n]))):console.log("[Dossier OS] SYSTEM_HEALTH: All 14 core modules verified as valid functions.");let m="_RESOURCES/DATACORE/142_UltimateResumeBuilder";if(!be||!be.createRoot){console.error("[Dossier OS] RENDER_BLOCK: ReactDOM.createRoot is missing."),s.setText("SYSTEM_FAILURE: React Identity Mismatch. Please check console.");return}console.log("[Dossier OS] DEEP_PROBE: Component Fingerprint (App):",{typeofApp:typeof we,keys:Object.keys(we),proto:Object.getPrototypeOf(we)?.constructor?.name});let c=be.createRoot(s);try{console.log("[Dossier OS] BOOTSTRAP: Attempting Safe-Render..."),c.render(ae.createElement("div",{id:"dossier-safe-root"},"Dossier OS: Environment Healthy. Initializing Components...")),setTimeout(()=>{console.log("[Dossier OS] BOOTSTRAP: Finalizing Component Mount..."),c.render(ae.createElement(we,{dc:r,modules:x,folderPath:m}))},100)}catch(n){console.error("[Dossier OS] BOOTSTRAP_FAILURE: Error occurred during Safe-Render.",n)}console.log("[Dossier OS] HOST_IDENTITY_SYNC_SUCCESS: Native render engine active.")}},Xe=class extends Je.Plugin{async onload(){this.registerView(qe,s=>new et(s)),this.addCommand({id:"open-dossier-os",name:"Open Dossier OS",callback:()=>this.activateView()}),this.addRibbonIcon("target","Dossier OS",()=>this.activateView())}async activateView(){let{workspace:s}=this.app,f=s.getLeavesOfType(qe)[0];f||(f=s.getLeaf("tab"),await f.setViewState({type:qe,active:!0})),s.revealLeaf(f)}};
