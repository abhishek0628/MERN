const express = require('express');
const app = express();
const port = 3000;

const userRouter = require('./routes/user');

// Mount router on /user
app.use('/user', userRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
