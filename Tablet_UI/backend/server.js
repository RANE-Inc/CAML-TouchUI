const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API! Please use the /login endpoint.');
});

// Mock database (JSON file)
const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8'));

// Login endpoint
app.post('/login', (req, res) => {
  const { name, ticket } = req.body;

  const user = users.find(user => user.name === name && user.ticket === ticket);
  if (user) {
    res.status(200).json({ success: true, message: 'Authentication successful!' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
