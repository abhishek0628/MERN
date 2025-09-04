const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Serve index.html on root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint returning JSON data
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the Express API!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
