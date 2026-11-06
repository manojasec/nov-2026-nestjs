const express = require('express');
const app = express()
const port = 3000
const ejs = require('ejs');



app.set('view engine', 'ejs');

const myroutes = require('./router.js'); // Import the router
app.use(myroutes); // Use the router
const timeLog = require('./middelware.js'); // Import the middleware
app.use(timeLog); // Use the middleware
const  db = require('./db.js'); // Import the database connection
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})