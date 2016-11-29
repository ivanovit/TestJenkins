/* main node process */
const {app, BrowserWindow} = require("electron");
const path = require("path");

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        show: true
    });

    mainWindow.loadURL(`http://abv.bg`);
}

app.on("ready", createWindow);


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
