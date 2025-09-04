// const express=require('express');
// const app=express();
// app.get('/',(req,res)=>{
//     res.send('home page');
// });
// app.listen(3000,()=>{
//     console.log('running');
// });
// const indexRouter=require('./routes/index');
// const userRouter=require('./routes/user');
// const adminRouter=require('./routes/admin');

// app.use('/',indexRouter);
// app.use('/user',userRouter);
// app.use('/admin',adminRouter);

// app.listen(3000,()=>{
//     console.log("running on 3000");
// });
const express = require('express');
const app = express();
const port = 3000;

// Import routers
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');

// Middleware
app.use(express.json());

// Use routers
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
