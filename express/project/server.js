const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Enable CORS if frontend is served from a different origin (optional)
// app.use(cors({
//   origin: 'http://localhost:3000', // Change this if frontend is elsewhere
// }));

// app.use(cors({ origin: 'http://localhost:3000' }));
// Serve static files (HTML, CSS, JS) from "public" folder
app.use(cors({
  origin: '*', // allow requests from anywhere
}));

app.use(express.static(path.join(__dirname, 'public')));

// Example API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
