const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router


//steps to follow 
//1. create a new folder for the router-->router/birds.js -->copy code from expressjs.org-->express router
//2.go to index.js file[user created] import  router bird.js
//3.after all go to postman and test the routes

//Routes
//In Express.js, routes are used to define how your app responds to different URLs (endpoints) when a user sends a request.
//Main Uses of Routes:
// Organize Code: Keep logic for different pages or features (like /home or /about) separate.
// Handle Requests: Decide what happens for different actions like GET, POST, PUT, or DELETE.
// Dynamic URLs: Create flexible routes that handle variables, like /users/:id.
// Easy Maintenance: Group related features, making the app easier to manage and update.
// Why Use Routes?
// To handle requests for specific URLs.
// To keep your app well-organized and easy to scale.
// To separate responsibilities for different parts of your app (e.g., user routes, product routes).

//Example: A route for a homepage (/) shows a welcome message, and a route for /users/:id shows user details.









