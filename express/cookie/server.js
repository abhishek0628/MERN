const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// Use cookie-parser middleware, with a secret for signed cookies
app.use(cookieParser('mySecretKey123'));

app.get('/setcookie', (req, res) => {
  // Set unsigned cookie
  res.cookie('username', 'abhishek');

  // Set signed cookie
  res.cookie('token', '12345', { signed: true });

  res.send('Cookies have been set');
});

app.get('/getcookie', (req, res) => {
  const username = req.cookies.username;         // unsigned cookie
  const token = req.signedCookies.token;         // signed cookie

  res.send(`Username: ${username}, Token: ${token}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
