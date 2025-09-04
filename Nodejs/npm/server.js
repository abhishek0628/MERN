const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

// // About route
// app.get('/about', (req, res) => {
//   res.send('About Us Page');
// });

// // Contact route with POST
// app.post('/contact', (req, res) => {
//   res.send('Contact form submitted');
// });

// // Wildcard route (404)
// app.get('*', (req, res) => {
//   res.send('404 Page Not Found');
// });

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
