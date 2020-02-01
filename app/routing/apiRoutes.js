// Load Data from other files
var friendsData = require('../data/friends');
var path = require('path');
// Route data using express/
module.exports = function(app) {
  app.get('/', function(req, res) {
    res.json(friendsData);
  });
  app.post("/api/friends", function(req, res) {
     var bestDifferent = 25;
     var matchScore = 0;

     for (var i = friendsData.length -1; i >=0; i--) {
      console.log("Comparing with " + friendsData[i].name);
      var totalDifference = 0;

      for (var j = 0; j < 10; j++) {
        totalDifference = totalDifference + Math.abs(friendsData[i].scores[j]- req.body.scores[j]);
      }
      if (totalDifference < bestDifferent) {
        bestDifferent = totalDifference;
        matchScore = i;
      }
      console.log("Total differnce: " + friendsData[i].name + " is " + totalDifference);
    }

    console.log("----------------------------------------");
    console.log("Best Match is: " + friendsData[matchScore].name + " is " + totalDifference);
    console.log("----------------------------------------");

    // Push user input to the array of friends
    friendsData.push(req.body);

    // Respond with the best match
    res.join({name: friendsData[matchScore].name, photo: friendsData[matchScore].photo});
  });
}