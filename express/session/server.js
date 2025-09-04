const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

// Session middleware
app.use(session({
  secret: 'mySuperSecretKey',   // required, used to sign the session ID cookie
  resave: false,                // don't save session if unmodified
  saveUninitialized: true,      // save new sessions
  cookie: { secure: false }     // secure: true requires HTTPS
}));

// Route to set session data
app.get('/set', (req, res) => {
  req.session.username = 'Abhishek';
  res.send('Session data set');
});

// Route to read session data
app.get('/get', (req, res) => {
  if (req.session.username) {
    res.send(`Hello ${req.session.username}`);
  } else {
    res.send('No session data found');
  }
});

// Route to destroy session
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send('Error logging out');
    }
    res.send('Logged out and session destroyed');
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
