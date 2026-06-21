const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

function writefile(event, data) {
  fs.writeFileSync("d:/hello.txt", data);
}
ipcMain.on("savefile", writefile);

function readfile() {
  return fs.readFileSync("d:/hello.txt").toString();
}
ipcMain.handle("readfile", readfile);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.resolve(__dirname, "./preload.js"),
    },
  });
  //win.loadFile("index.html");
  win.loadFile("pages/index.html");
}

// "start": "nodemon --exec electron -- ."

app.on("ready", () => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
