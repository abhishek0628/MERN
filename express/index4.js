const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Morgan logging middleware
app.use(morgan('dev'));

// CORS middleware (allow specific origin)
app.use(cors({
  origin: 'http://localhost:3000', // Only allow this frontend
  methods: ['GET', 'POST'],        // Restrict allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));

// JSON parsing middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express with Morgan + CORS!' });
});

app.post('/submit', (req, res) => {
  console.log('Data received:', req.body);
  res.json({ status: 'success', data: req.body });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
