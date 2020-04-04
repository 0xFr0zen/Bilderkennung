const { app, BrowserWindow } = require('electron');

function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // and load the index.html of the app.
    win.loadFile('./src/index.html');
}

app.whenReady().then(createWindow);
