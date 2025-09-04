const express = require('express');
const app = express();

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

// app.post('/api/user', (req, res) => {
//   // Access parsed JSON data in req.body
//   const user = req.body;

//   console.log('User data received:', user);
  
//   // Send response back
//   res.send(`Hello, ${user.name}! Your age is ${user.age}.`);
// });
// app.get('/',(req,res)=>{
//     res.send("home page");
// });

app.post('/api/user', (req, res) => {
  const user = req.body;

  // Build the string to send to browser
  const responseText = `User data received: { name: '${user.name}', age: ${user.age} }`;

  // Send response to browser
  res.send(responseText);
});


app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
