const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

router.use((req, res, next) => {
  console.log('Router-level middleware');
  next();
});

router.get('/profile', (req, res) => res.send('Profile Page'));
app.use('/user', router,(req,res)=>{
    res.send('user');
});


// Application-level middleware (runs on every request)
app.use((req, res, next) => {
  console.log('Application-level middleware');
  next(); // pass control to the next middleware/route
});
app.use('/admin', (req, res, next) => {
  console.log('Admin area middleware triggered');
  next();
});


// Route for homepage
app.get('/', (req, res) => {
  res.send("Hello from Express");
});
app.get('/admin',(req,res)=>{
    res.send("admin");
});

// Route for /about page
app.get('/about', (req, res) => {
  res.send("About page");
});
app.get('/server/express',(req,res)=>{
    res.send('expres');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
