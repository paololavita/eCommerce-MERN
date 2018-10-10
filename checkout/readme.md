#### STRIPE PAYMENT

NOTE THAT IT IS STILL A STANDALONE SOLUTION, so you need to start it separetely and go to you browser, see instructions below:

1 - SET UP:
    a) Go to checkout folder
    b) npm install
    c) node app.js
    d) go to your browser and use localhost:PORT . NOTE: see which port it's listening

2 - click on checkout

3 - use your REAL email and REAL phone number as it may ask you for confirmation.

4 - It is working on "test mode" so we do not need to use REAL credit card numbers, you can use:
    a) credit card # 4242 4242 4242 4242
    b) any expiry date, I used "01/21"

5 - it is charging $5 in the test credit card (not a real chage, see line 24 in app.js file)

6 - NEXT STEPS FROM DEVELOPMENT PERSPECTIVE:
    a) bring the app.js code to Islam's server.js file.
    b) FRONTEND:
        - Note that the index.html files creates a "checkout" button and listens to it, so it triggers STRIPE solution
        - we need to "connect" that button in our app
        - move the code related to the "route"  that is listening to the "click" to the right place in our app.

    c) Note line 24 in app.js "let amount = 500". STRIPE takes the amount in cents, that's way you see 500, which is $5
    d) we'll need to "connect" the product price that was chosen by the user to charge the correct amount

