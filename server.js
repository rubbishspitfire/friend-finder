// Add the requirements for server
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
// Create express app/port info
var app = express();
var PORT = process.env.PORT | 3000;

// Parse application and JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// Create routes for express
// require('./app/routing/apiRoutes')(app);
// require('./app/routing/htmlRoutes')(app)
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

app.use(express.static(path.join(__dirname, "./public/home.html")))
app.use('/', htmlRoutes)

// Creating a listening function

app.listen(PORT, function() {
    console.log("App Listening on PORT " + PORT)
})