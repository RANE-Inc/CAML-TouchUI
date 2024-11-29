const { exec } = require('child_process');

// Function to run npm commands
function runNpmCommand(command, callback) {
    console.log(`Running: ${command}`);
    exec(command, { env: { ...process.env, BROWSER: 'none' } }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        if (callback) callback();
    });
}

// Start React app concurrently
console.log("Starting React app...");
const reactProcess = runNpmCommand('npx react-scripts start');

// Add a 10-second delay before running Electron
setTimeout(() => {
    console.log("Starting Electron app...");
    runNpmCommand('npm run electron', () => {
        console.log("Electron app is now running!");
    });
}, 5000); // Wait 5 seconds before starting Electron

