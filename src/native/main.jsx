import { Plugin, ItemView } from 'obsidian';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

// 📡 CORE MODULE INJECTION (Static Bundle Force via Require)
const Styles_Pkg = require('../core/Styles.js');
const Styles_M = Styles_Pkg.default || Styles_Pkg;
const TOKENS = Styles_M.TOKENS;
const GLOBAL_CSS = Styles_M.GLOBAL_CSS;

const Parser_Pkg = require('../core/Parser.js');
const Parser_M = Parser_Pkg.default || Parser_Pkg;
const parseResumeMarkdown = Parser_M.parseResumeMarkdown;

const Deployment_Pkg = require('../core/Deployment.js');
const Deployment_M = Deployment_Pkg.default || Deployment_Pkg;
const getDeploymentLogic = Deployment_M.getDeploymentLogic;

const Adapter_Pkg = require('../core/PlatformAdapter.js');
const Adapter_M = Adapter_Pkg.default || Adapter_Pkg;
const createAdapter = Adapter_M.createAdapter;

const LoadScript_Pkg = require('../core/utils/loadScript.js');
const LoadScript_M = LoadScript_Pkg.default || LoadScript_Pkg;
const loadScript = LoadScript_M.loadScript;

// 🎭 COMPONENT INJECTION
const App_Pkg = require('../App.jsx');
const App = App_Pkg.App || App_Pkg.default?.App || App_Pkg.default || App_Pkg;

const NodeGraph_Pkg = require('../components/NodeGraph.jsx');
const NodeGraph = NodeGraph_Pkg.NodeGraph || NodeGraph_Pkg.default?.NodeGraph || NodeGraph_Pkg.default || NodeGraph_Pkg;

const Visuals_Pkg = require('../components/Visuals.jsx');
const Visuals_M = Visuals_Pkg.default || Visuals_Pkg;
const GeometricParticles = Visuals_M.GeometricParticles;
const TravelGlobeWidget = Visuals_M.TravelGlobeWidget;

const Content_Pkg = require('../components/Content.jsx');
const Content_M = Content_Pkg.default || Content_Pkg;
const IntroSlide = Content_M.IntroSlide;
const CinematicViewer = Content_M.CinematicViewer;
const PrintLayout = Content_M.PrintLayout;

const FloatingScene_Pkg = require('../components/FloatingScene.jsx');
const FloatingScene = FloatingScene_Pkg.FloatingScene || FloatingScene_Pkg.default?.FloatingScene || FloatingScene_Pkg.default || FloatingScene_Pkg;

const DeployBridge_Pkg = require('../components/DeployBridge.jsx');
const DeployBridge = DeployBridge_Pkg.DeployBridge || DeployBridge_Pkg.default?.DeployBridge || DeployBridge_Pkg.default || DeployBridge_Pkg;

const HyperScroll_Pkg = require('../components/HyperScroll.jsx');
const HyperScroll = HyperScroll_Pkg.HyperScroll || HyperScroll_Pkg.default?.HyperScroll || HyperScroll_Pkg.default || HyperScroll_Pkg;

const TimelineSlide_Pkg = require('../components/TimelineSlide.jsx');
const TimelineSlide = TimelineSlide_Pkg.TimelineSlide || TimelineSlide_Pkg.default?.TimelineSlide || TimelineSlide_Pkg.default || TimelineSlide_Pkg;

const MCPBridge_Pkg = require('../components/MCPBridge.jsx');
const MCPBridge = MCPBridge_Pkg.MCPBridge || MCPBridge_Pkg.default?.MCPBridge || MCPBridge_Pkg.default || MCPBridge_Pkg;

const VIEW_TYPE_DOSSIER = 'dossier-os-view';

class DossierView extends ItemView {
    constructor(leaf) {
        super(leaf);
    }

    getViewType() { return VIEW_TYPE_DOSSIER; }
    getDisplayText() { return 'Dossier OS'; }

    async onOpen() {
        const container = this.containerEl.children[1];
        container.empty();
        
        // 🛡️ NATIVE ICON BRIDGE
        const Icon = ({ icon, style }) => {
            const icons = {
                zap: '⚡', github: '🌐', settings: '⚙️', loader: '⏳', 
                target: '🎯', terminal: '📟', activity: '📈', database: '🗄️'
            };
            return <span style={{ ...style, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{icons[icon] || '◆'}</span>;
        };

        // Assemble DC (Platform context)
        const dc = { 
            useState: React.useState, 
            useEffect: React.useEffect, 
            useRef: React.useRef,
            useCallback: React.useCallback,
            useMemo: React.useMemo,
            app: window.app,
            Icon
        };
        
        // Assemble Modules (Dependency Graph)
        const modules = {
            App, TOKENS, GLOBAL_CSS, parseResumeMarkdown, getDeploymentLogic,
            createAdapter, loadScript, NodeGraph, GeometricParticles,
            TravelGlobeWidget, IntroSlide, CinematicViewer, PrintLayout,
            FloatingScene, DeployBridge, HyperScroll, TimelineSlide, MCPBridge
        };

        // 🔍 FLIGHT CHECK: Verify module integrity (Total System Audit)
        const requiredKeys = [
            'App', 'NodeGraph', 'IntroSlide', 'CinematicViewer', 'PrintLayout', 'FloatingScene', 
            'TimelineSlide', 'HyperScroll', 'MCPBridge', 'DeployBridge', 
            'GeometricParticles', 'TravelGlobeWidget', 'getDeploymentLogic', 'createAdapter'
        ];
        
        const missing = requiredKeys.filter(k => !modules[k]);
        const nonFunctions = requiredKeys.filter(k => modules[k] && typeof modules[k] !== 'function');

        if (missing.length > 0) {
            console.error(`[Dossier OS] CRITICAL_FAILURE: Missing Modules: ${missing.join(', ')}`);
        } else if (nonFunctions.length > 0) {
            console.error(`[Dossier OS] TYPE_FAILURE: Non-Function Modules detected: ${nonFunctions.join(', ')}`);
            nonFunctions.forEach(k => console.log(`[Dossier OS] Improper Value (${k}):`, modules[k]));
        } else {
            console.log(`[Dossier OS] SYSTEM_HEALTH: All 14 core modules verified as valid functions.`);
        }

        const projectPath = "_RESOURCES/DATACORE/142_UltimateResumeBuilder";
        const root = ReactDOM.createRoot(container);
        root.render(<App dc={dc} modules={modules} folderPath={projectPath} />);
    }
}

export default class DossierPlugin extends Plugin {
    async onload() {
        this.registerView(VIEW_TYPE_DOSSIER, (leaf) => new DossierView(leaf));

        this.addCommand({
            id: 'open-dossier-os',
            name: 'Open Dossier OS',
            callback: () => this.activateView(),
        });

        this.addRibbonIcon('target', 'Dossier OS', () => this.activateView());
    }

    async activateView() {
        const { workspace } = this.app;
        let leaf = workspace.getLeavesOfType(VIEW_TYPE_DOSSIER)[0];

        if (!leaf) {
            // PROTOCOL_ALIGNMENT: Always open in a main workspace tab
            leaf = workspace.getLeaf('tab');
            await leaf.setViewState({ type: VIEW_TYPE_DOSSIER, active: true });
        }

        workspace.revealLeaf(leaf);
    }
}

