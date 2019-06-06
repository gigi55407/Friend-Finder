
// Here we are linking to our data source
var friends = require("../data/friends");

module.exports = function (app) {
  // The get for the api/friends route 
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
console.log("Hiiii!");
console.log("Friends: "+JSON.stringify(friends));
    // Each time a user takes the survey, our server will compare the results against 
    // every user in the database. It will then calculate the difference between each of the numbers 
    // and the user's numbers. Then it will choose the user with the least differences as the "best 
    // friend match." In the case of multiple users with the same result it will choose the first match.
    // After the test, it will push the user's data to the database. 

    // We will use this object to hold the "best match". It will constantly be updated as it 
    // loops through all of the options 

    // These variables hold the results of the user's survey.
    var userData 	= req.body;
    var userScores 	= userData.scores;
    var scoresArr = [];
    var bestMatch = 0;

    for(var i=0;i<friends.length;i++){
      var scoreDiff = 0;

      for(var j=0;j<userScores.length;j++){
        scoreDiff = scoreDiff + (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j])));
      }

      scoresArr.push(scoreDiff);
    }
//[20,16,24]
    for(var i=0;i<scoresArr.length;i++){
      if(scoresArr[i]<=scoresArr[bestMatch])
      {
        bestMatch = i;
      }
    }


    var bestFriend = friends[bestMatch];
    console.log("Best Friend: "+bestFriend);
    res.json(bestFriend);

    // This variable hold calculate the difference between the user's scores and the scores of
    // each user in the database
    var totalDifference = 0;
  });
}
  

