

```datacorejsx
const activeFile = dc.resolvePath("D.q.resume.viewer") || "_RESOURCES/DATACORE/142_UltimateResumeBuilder/D.q.resume.viewer.md";
const folderPath = activeFile.includes('/') 
    ? activeFile.substring(0, activeFile.lastIndexOf('/')) 
    : "_RESOURCES/DATACORE/142_UltimateResumeBuilder";

const { View } = await dc.require(folderPath + "/src/index.jsx");
return await View({ folderPath: folderPath, dc });
```
