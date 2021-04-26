"use strict";
const os = require("os");
const { app, BrowserWindow, ipcMain, session, protocol } = require("electron");
const path = require("path");
const url = require("url");
const getSongs = require("./db");

let mainWindow;

// Temporary fix broken high-dpi scale factor on Windows (125% scaling)
// info: https://github.com/electron/electron/issues/9691
if (process.platform === "win32") {
  app.commandLine.appendSwitch("high-dpi-support", "true");
  app.commandLine.appendSwitch("force-device-scale-factor", "1");
}

const reactDevToolsPath = path.join(os.homedir(), "Desktop\\ext\\react");
const reduxDevToolsPath = path.join(os.homedir(), "Desktop\\ext\\redux");

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 768,
    maxHeight: 768,
    maxWidth: 1366,
    show: true,
    frame: false,
    transparent: true,
    webPreferences: {
      // nodeIntegration: true,
      // contextIsolation: false,
      // enableRemoteModule: true,
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(app.getAppPath(), "/preload.js"),
    },
  });

  // b

  // and load the index.html of the app.
  // let indexPath;

  // if (dev && process.argv.indexOf("--noDevServer") === -1) {
  //   indexPath = url.format({
  //     protocol: "http:",
  //     host: "localhost:8080",
  //     pathname: "index.html",
  //     slashes: true,
  //   });
  // } else {
  //   indexPath = url.format({
  //     protocol: "file:",
  //     pathname: path.join(__dirname, "dist", "index.html"),
  //     slashes: true,
  //   });
  // }

  mainWindow.loadURL("http://localhost:8080");
  // mainWindow.loadFile("./dist/index.html");

  // Don't show until we are ready and loaded
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
    // Open the DevTools automatically if developing
    // if (dev) {
    // const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')

    // installExtension(REACT_DEVELOPER_TOOLS)
    //   .catch(err => console.log('Error loading React DevTools: ', err))
    // }
    mainWindow.webContents.openDevTools({ mode: "detach" });
  });

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

app.whenReady().then(async () => {
  // Name the protocol whatever you want.
});

// app.on("ready", createWindow);
app.on("ready", async () => {
  const protocolName = "safe-protocol";
  protocol.registerFileProtocol(protocolName, (request, cb) => {
    console.log(request.url);
    const url = request.url.replace(`${protocolName}://`, "");
    const decodedUrl = decodeURI(url);
    try {
      return cb(decodedUrl);
    } catch (error) {
      console.error(
        "ERROR: registerLocalResourceProtocol: Could not get file path:",
        error
      );
    }
  });
  await session.defaultSession.loadExtension(reactDevToolsPath);
  await session.defaultSession.loadExtension(reduxDevToolsPath);
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.handle("getMusic", async (event, args) => {
  const result = await getSongs();
  return result;
});

ipcMain.on("toMain", (event, args) => {
  mainWindow.webContents.send("fromMain", "data flow working");
});

ipcMain.on("close", (event, args) => {
  console.log("quit reached");
  app.quit();
});

ipcMain.on("minimize", (event, args) => {
  BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on("minmax", (event, args) => {
  const maxed = BrowserWindow.getFocusedWindow().isMaximized();
  console.log(maxed);
  if (maxed) {
    BrowserWindow.getFocusedWindow().unmaximize();
  } else {
    BrowserWindow.getFocusedWindow().maximize();
  }
});
