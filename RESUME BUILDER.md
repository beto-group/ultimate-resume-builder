---
author: beto.group
name.official: UltimateResumeBuilder
version: 1.0.0
price: "0"
category:
  - portfolio
  - creative
  - career
tags:
  - resume
  - threejs
  - globe
  - gsap
  - narrative
  - obsidian-plugin
  - pdf-export
  - portfolio-showcase
desc: An all-in-one interactive resume and portfolio experience — Recap2025 chapter navigation, SceneUI 3D portfolio staging, and a custom TravelGlobe. Deployable as Obsidian view, website, and PDF.
status: stable
complexity: advanced
id: 142
longDesc: "UltimateResumeBuilder is a frankenstein job application engine built from the best Datacore components. It merges the Recap2025 cinematic chapter navigation, SceneUI's Three.js 3D UI staging, and a custom TravelGlobeWidget showing your real travel arc across the world. The experience flows from a top-level narrative overview to chapter drill-downs, then into a 3D portfolio showcase of your actual Datacore work. Designed to work as an Obsidian full-tab experience, export as a self-contained website, and flatten to a clean PDF resume."
version.obsidian: 1.4.11
---

### Tab: UltimateResumeBuilder

- **Description**: An all-in-one interactive resume + portfolio experience engine. Not a resume — an experience.

- **Architecture**:
    - **Shell**: FullTab DOM Reparenting (nuclear edge-to-edge)
    - **RecapFlow**: Chapter-based narrative navigation (adapted from Recap2025)
    - **ScenePortfolio**: Three.js 3D UI staging (adapted from SceneUI)
    - **TravelGlobeWidget**: Globe.gl travel arc (remixed MapGlobe)
    - **ExportLayer**: PDF print styles + HTML export

- **Data file**: `_resources/data/resume.md`

---

### Components

###### [Resume Viewer](D.q.resume.viewer.md)
