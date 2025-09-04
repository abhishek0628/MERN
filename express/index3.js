const express = require('express');
const morgan = require('morgan');
const app = express();

const PORT = 3000;

// You can switch the format here:
const morganFormat = 'tiny';  // Try: 'combined', 'common', 'dev', 'short', 'tiny'

// Setup Morgan middleware with chosen format
app.use(morgan(morganFormat));

app.get('/', (req, res) => {
  res.send('Hello, Morgan!');
});

app.get('/test', (req, res) => {
  res.send('Test route');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} with Morgan format: ${morganFormat}`);
});
