const express = require('express')
const app = express()
const port = 3000
//import item router file
const  items=require('./routes/item')
//import bird router file
const birds=require('./routes/birds')


//load into applications
app.use('/filler',birds);

//Best way way to use routing 
//load into application
app.use('/api',items)

//-->/api -->item home page
//-->/api -->item post request
//-->/api/items/id -->put/delete request

app.listen(port, () => {
  console.log(`Boda Abhishek Naik Example app listening on port ${port}`)
})


/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})


//About Request
//Get request
app.get('/' , (req, res)=>{
    //res.send('Hi I have got the Get request...')
    res.sendFile('./dummy.html',{root:__dirname})

});

//Post Request
app.post('/items',(req,res)=>{
    //res.send('Hi I have got the Post request...')
    res.json({num1:1,num2:2,num3:3,num4:33})

});

//Put Request
app.put('/items/:id',(req,res)=>{
    
  res.send('Hi I have got the Put request...')
});

//Delete Request
app.delete('/items/:id',(req,res)=>{
    res.send('Hi I have got the Delete request...')
});


app.listen(port, () => {
  console.log(`Boda Abhishek Naik Example app listening on port ${port}`)
})

//click on the YT MEARN BE -> right side->three dots->Add new request 
//open postman and check the values of sendfile  method the file we sent will appear in it
//Here in res.json  num[key] should not be same , if they are same we get error

//Search Routing in expressjs
*/