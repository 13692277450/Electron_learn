console.log("preload.js loaded");
const { contextBridge } = reuqire("electron");

contextBridge.exposeInMainWorld("abc", {
  xyz: 100,
});
