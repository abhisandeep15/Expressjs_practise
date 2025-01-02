//Steps to create new folder 
/*
1. Create a new folder open it in vscode
2.cmd:npm init -y
3.cmd: npm install express
4.cmd: npm install nodemon
5.create a index.js file
6. write the code in index.js file
7.cmd: node index.js
8.http://localhost:3000/
*/

//Code your First Backend App
//Require(): we use these because to include the express modules and objects
//Require(express):here we are installing express and using it code


const express = require('express');  //this lines includes the express module,objects
const app = express(); //this line initailsing  [creates]  the express app

const port = 3000; //this is the port number that we will use to run our app


//request-->get/put/post/delete
//path-->/,/about,/articles,/blog
app.get('/', (req, res) => {
    res.send('Hello World!')
    //console.log('hello this is a get request...')
  })
  

//start your app or server
app.listen(port,()=>{
    console.log('Server is running on  this port number:3000');
});
















