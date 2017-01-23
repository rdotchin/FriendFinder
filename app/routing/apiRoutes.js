var path = require('path');
//requires the data from the friends.js file that includes the friends variable
var friendsData = require('../data/friends.js');
//hold the userArray survey number results to compare to other scores
var userArray = []
//starting number to compare different between the user score and the current friend
var comparisonNum = 500;

//variable set to hold the number of the best friend to be returned
var bestFriend;
var currentDifference = 0;
/*sets the required data from friends.js to the variable friends so it can be 
called in app.get*/

//exporting from survey.js the express app function
module.exports = function(app){
	//displays the variable friends data (from the friends.js file) in JSON format
	app.get('/api/friends', function(req, res){
		//display the friends data in json format
		res.json(friendsData);
	});



	app.post("/api/friends", function(req, res){
		
		//turns string into a number and pushes it in the userArray
		for(var i = 0; i <req.body.scores.length; i++){
			userArray.push(parseInt(req.body.scores[i]))
		}
		
	
	
		
		//choose the friend array to compare to user
		function friendArray(){
			var x = 0;
			//if there are not enough friends it will return bestFriend info
			if(x > friendsData.lenght){
				console.log(bestFriend);
				return bestFriend
			}
			else {
			//reset current Difference;
			currentDifference = 0;
			compareScores(friend[x], x);
			x +=1;
			}
		}

		//compare user vs friend
		function compareScores(friendArray, friendNum){
			for(var i = 0; i < userArray.length; i++){
				currentDifferent += Math.abs(friendArray.scores[i] - userArray[i]);
				
			}
			bestScore(currentDifference, friendNum);
		}

		//if current friend score is less than previous he becomes the new best friend
		function bestScore(difference, friendNum) {
			if (difference < comparisonNum){
				bestFriend = friendNum
				friendArray();
			}
			else {
				friendArray();
			}
		}



	}); //app.post end

} //modules.export end
