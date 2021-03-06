// Add the requirements for server
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Create express app/port info
var app = express();
var PORT = process.env.PORT || 3000;

// Parse application and JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

// Create routes for express
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, function() {
    console.log("App listening on port: " + port)
});
