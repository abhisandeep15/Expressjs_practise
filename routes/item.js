//This file stores the specific of routes
//create a rouer/item.js 
//Copy the code from expressjs/express Router
//Cut delete the router.get amd paste the app.get urls from index.js file replace app.get to router.get
//Acess the code in postman by api/, api/items
const express = require('express')
const router = express.Router()

//About Request
//Get request
router.get('/' , (req, res)=>{
    res.send('Hi I have got the Get request...')
    //res.sendFile('./dummy.html',{root:__dirname})

});

//Post Request
router.post('/items',(req,res)=>{
    //res.send('Hi I have got the Post request...')
    res.json({num1:1,num2:2,num3:3,num4:33})

});

//Put Request
router.put('/items/:id',(req,res)=>{
    res.send('Hi I have got the Put request...')
});

//Delete Request
router.delete('/items/:id',(req,res)=>{
    res.send('Hi I have got the Delete request...')
});



module.exports = router

