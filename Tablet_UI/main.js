const { app, BrowserWindow, session } = require('electron');
const path = require('path');

async function createWindow() {
  const isDev = (await import('electron-is-dev')).default;

  // Open the Electron window
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    kiosk: true,
    webPreferences: {
      nodeIntegration: false, // Keep disabled for security
      contextIsolation: false, 
    },
  });

  // Modify request headers to set an allowed origin (needed for CORS issues)
  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['Origin'] = 'http://localhost:3000'; // Mimic allowed origin
    callback({ requestHeaders: details.requestHeaders });
  });

  // Load React app (development or production)
  win.loadURL(
    isDev
      ? 'http://localhost:3000' // Loads the development server (React) in Electron
      : `file://${path.join(__dirname, 'build/index.html')}` // Loads the production build of React
  );

  win.webContents.openDevTools(); // Open DevTools for debugging
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
