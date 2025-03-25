const { app, BrowserWindow } = require('electron');
const path = require('path');

async function createWindow() {
  const isDev = (await import('electron-is-dev')).default;

  // Open the Electron window
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    kiosk: false,
    webPreferences: {
      nodeIntegration: false, // Disable nodeIntegration for production
      contextIsolation: true, // Enable contextIsolation for security
    },
  });

  // Load React app (development or production)
  win.loadURL(
    isDev
      ? 'http://localhost:3000' // Loads the development server (React) in Electron
      : `file://${path.join(__dirname, 'build/index.html')}` // Loads the production build of React
  );
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
