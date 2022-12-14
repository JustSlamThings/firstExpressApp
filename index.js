// Require needed modules.
const express = require('express')

// const dotenv=require('dotenv')
require('dotenv').config()
// Initialize the app object.
const app = express()

// Create a homepage route.
app.get('/', function (req, res) {
    // This gets sent to the client 
    // (your web browser most likely!)
    res.send('Hello world');
})


const PORT = process.env.PORT;
// Create a second route.
app.get('/second', function (req, res) {
    res.send('Hello World! Welcome to my Second Page!');
})


app.get('/research/:animal', function (req, res) {
    res.send(`Hello World! Research for ${req.params.animal} - Topic: ${req.query.topic}`);
})

// Listen for connections.
app.listen(PORT, () =>  {
    console.log(`Running on port ${PORT}`)
});














// app.post('/create', (req, res) => {
//     // This code is going to run
//     // when someone visits the
//     // http://localhost:3000/

//     console.log("Hi from POST");
//     res.send("Hi from your first express app!");
// })

// http://localhost:3000/
// app.listen(3000);
