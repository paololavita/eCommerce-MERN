
// keyPublishable and keySecret. These keys identify your account when you communicate with Stripe
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const PORT = process.env.PORT || 8000;


const express = require("express");
const stripe = require("stripe")(keySecret);
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Express server exposes a POST route that receives payment token an creates the charge

app.post("/charge", (req, res) => {
    let amount = 500;

    stripe.customers.create({
        email: req.body.email,
        card: req.body.id
    })
        .then(customer =>
            stripe.charges.create({
                amount,
                description: "Sample Charge",
                currency: "usd",
                customer: customer.id
            }))
        .then(charge => res.send(charge))
        .catch(err => {
            console.log("Error:", err);
            res.status(500).send({ error: "Purchase Failed" });
        });
});


// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});