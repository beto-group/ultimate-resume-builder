w

```datacorejsx
const activeFile = dc.resolvePath("D.q.resume.viewer") || "_RESOURCES/DATACORE/142_UltimateResumeBuilder/D.q.resume.viewer";
const folderPath = activeFile.substring(0, activeFile.lastIndexOf('/'));

const { View } = await dc.require(folderPath + "/src/index.jsx");
return await View({ folderPath, dc });
```
