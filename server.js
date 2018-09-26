var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");

// Require all models


var db = require("./models");

var PORT = 4000;

// Initialize Express

var path = require('path');

var app = express();

// app.use(express.static(path.join(__dirname+ 'public')));
// app.use(express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbconnection = require('./config/Connection.js');

// mongoose.connect("mongodb://localhost:27017/inventory");

mongoose.Promise = global.Promise;

mongoose.connect(dbconnection.Connection, {
 
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});



app.post('/api/production', (req,res)=>{

    db.Production.create(req.body)
        .then(function(dbproduction){
          console.log("table created..");
        })
        .catch(function(err){
          console.log(err.message)
        });

});

app.post('/api/user', (req,res)=>{

  db.Invuser.create(req.body)
      .then(function(dbuser){
        console.log("table created..");
      })
      .catch(function(err){
        console.log(err.message)
      });

});
// require('./routes/routes.js')(app);

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});