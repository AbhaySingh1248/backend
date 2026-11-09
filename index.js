//console.log("abhay singh")
//const express = require('express')
import express from "express"
//require('dotenv').config();

import dotenv from 'dotenv';
dotenv.config();


//import express from "express"
//const port = process.env.PORT || 4000
const port = 4000
const app = express()
app.get('/',(req,res)=> {
  res.send('hello world')
});

app.get('/twitter',(req,res)=>{
  res.send('abhay@twitter.com')
});

//app.listen(process.env.PORT,()=>{
 // console.log(`app is listening on the port ${port}`)
//});

// get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
  const jokes = [
    {
      id: 1,
      title:'A joke',
      content: 'this is a joke',

    },
    {
      id: 2,
      title: 'Another joke',
      content: 'this is another joke'
    },
    {
      id: 3,
      title: 'Yet another joke',
      content: 'this is yet another joke'
    },
    {
      id: 4,
      title: '4 another joke',
      content: 'this is 4 another joke'
    },
    {
      id: 5,
      title: '5 another joke',
      content: 'this is 5 another joke'
    }
  ]
  res.json(jokes)
})

app.listen(port,()=>{
  console.log(`serve at https/localhost:${port}`)
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
