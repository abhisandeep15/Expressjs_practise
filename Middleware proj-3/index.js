/*Create a folder
open in vs-code
cmd:n
*/


//loading middleware into the app
//inbuilt middleware
//Note::order is important here middleware should be written above the app.get.
//in this first it goes to middleware next route url

// app.use(express.json());

// //middleware login auth,validation
// const loginMiddleware=function(req,res,next){
//     console.log('Iam gonna Login')
//     next();
// }
// //Loading middleware into application
// app.use(loginMiddleware)

// const authMiddleware=function(req,res,next){
//     console.log('It is Autherization')
//     //res.send('The end of auth.....')
//     next();
// }
// app.use(authMiddleware)

// const validationMiddleware=function(req,res,next){
//     console.log('It is used for validations..')
//     next();
// }
// app.use(validationMiddleware)

// app.get('/',(req,res)=>{
//     console.log('Iam the Route Handler..')
//     console.log(req.body);
//     res.send('Hello World it is get...')
// })


// app.listen(port,()=>{
//     console.log(`Server is running on port ${port}`)
// })


//creating middleware login ,authentication,validation 
//Route-specific middleware/student 


const express = require('express');
const app = express();
const route = require('./routes/route'); // Correctly import the routes
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Mounting the routes
app.use('/api', route);
                                                                                                                
// Default route
app.get('/', (req, res) => {
    console.log('I am the root route handler');
    res.send('Hello, user! Welcome!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
