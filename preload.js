console.log("preload.js loaded");
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("myApi", {
  // version: process.version,
  savefile: (data) => {
    console.log(data);
    ipcRenderer.send("savefile", data);
  },
  readfile: () => {
    return ipcRenderer.invoke("readfile");
  },
});
