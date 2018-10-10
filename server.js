var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");
const dotenv = require("dotenv").config();

// ***** STRIPE PAYMENT ***** keyPublishable and keySecret identify developer account when you communicate with Stripe
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const stripe = require("stripe")(keySecret);
// ***** STRIPE PAYMENT ***** 


// Require all models

var db = require("./models");

//var PORT = 4000;

// Connect to Port on Heroku using env variable or local instance
var PORT = process.env.PORT || 3000;

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


app.get(`/api/look/prod/`, (req, res) => {

  db.Production.find({})
    .then(result => { res.json(result) })

})

app.post('/api/production', (req, res) => {

  db.Production.create(req.body)
    .then(function (dbproduction) {
      console.log("table created..");
    })
    .catch(function (err) {
      console.log(err.message)
    });

});

app.post('/api/user', (req, res) => {

  db.Invuser.create(req.body)
    .then(function (dbuser) {
      console.log("table created..");
    })
    .catch(function (err) {
      console.log(err.message)
    });

});

// //*** STRIPE PAYMENT CODE BEGIN **** Express server exposes a POST route that receives payment token an creates the charge

// app.post("/charge", (req, res) => {
//   let amount = 500;

//   stripe.customers.create({
//     email: req.body.email,
//     card: req.body.id
//   })
//     .then(customer =>
//       stripe.charges.create({
//         amount,
//         description: "Sample Charge",
//         currency: "usd",
//         customer: customer.id
//       }))
//     .then(charge => res.send(charge))
//     .catch(err => {
//       console.log("Error:", err);
//       res.status(500).send({ error: "Purchase Failed" });
//     });
// });
// // ***** STRIPE CODE END *****

// // require('./routes/routes.js')(app);

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});