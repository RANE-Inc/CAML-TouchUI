const { app, BrowserWindow } = require('electron');
const path = require('path');
const { exec } = require('child_process'); // Used to start the backend server

async function createWindow() {
  const isDev = (await import('electron-is-dev')).default;

  // Start backend server in development (if necessary)
  if (isDev) {
    startBackendServer();
  }

  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    kiosk: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Load React app (development or production)
  win.loadURL(
    isDev
      ? 'http://localhost:3000' // Loads the development server (React) in Electron
      : `file://${path.join(__dirname, 'build/index.html')}` // Loads the production build of React
  );
}

// Function to start the backend server (on port 5000) in production
function startBackendServer() {
  const backendPath = path.join(__dirname, 'backend', 'server.js'); // Path to the backend server file
  exec(`node ${backendPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting backend server: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Backend server started: ${stdout}`);
  });
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
