//console.log("abhay singh")
const express = require('express')
require('dotenv').config();
//import express from "express"
const port = 4000
const app = express()
app.get('/',(req,res)=> {
  res.send('hello world')
});

app.get('/twitter',(req,res)=>{
  res.send('abhay@twitter.com')
});

app.listen(process.env.PORT,()=>{
  console.log(`app is listening on the port ${port}`)
});

app.get('/login',(req,res)=>{
  res.send('<h1>please login at my episode </h1>')
});

app.get('/youtube',(req,res)=>{
  res.send('<h2>chai aur backend</h2>')
})



// require('dotenv').config()
// const express = require('express');
// const app = express();
// const port = 4000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/twitter',(req,res)=>{
//     res.send('abhay.com')
// });

// app.get('/login',(req,res)=>{
//     res.send('<h1>please login to abhaydostcom</h1>');
// });

// app.get('/youtube',(req,res)=>{
//     res.send('<h2>abhay youtube</h2>');
// });

// const actualPort = process.env.PORT

// app.listen(actualPort,'127.0.0.1', () => {
//   console.log(`Example app listening on port ${port}`);
// });
