const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Morgan logging middleware
app.use(morgan('dev'));

// CORS middleware (allow only localhost:3000)
app.use(cors({
  //origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// JSON parsing middleware
app.use(express.json());

// API routes
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express with Morgan + CORS!' });
});

app.post('/api/submit', (req, res) => {
  console.log('Data received:', req.body);
  res.json({ status: 'success', data: req.body });
});

// Serve test HTML page from backend itself
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
