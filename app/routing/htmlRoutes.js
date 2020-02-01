// Requirements
var path = require('path');
// Routing via express

module.exports = function(app) {

  app.get('', function(req, res) {
    res.sendFile(path.join(__dirname, './../'));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};
