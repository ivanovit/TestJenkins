/* main node process */
const {app, BrowserWindow} = require("electron");
const path = require("path");

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        show: false
    });

    mainWindow.loadURL(`http://abv.bg`);
}

app.on("ready", createWindow);

setTimeout(function() {
    app.quit();
}, 15000)

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
