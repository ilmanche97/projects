// Setup empty JS object to act as endpoint for all routes
projectData = [];


// Require Express to run server and routes
const port = 1000;
//Lesson 2: Node and Express Environment
 const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
// Lesson 2: Creating A Local Server With Node & Express

const listener = app.listen(1000, function(){
    console.log('Listening on port ' + listener.address().port); });

//Lesson 3: HTTP Requests & Routes

app.get('/all', function (req, res) {
res.send(projectData) 
 projectData = [];
})


//Lesson 4: Chaining Promises!!

app.post('/add', addInput);

function addInput(req,res){

  newEntry = {
    temp: req.body.temp,
    date: req.body.date,
    content: req.body.content
  }

  projectData.push(newEntry)
}