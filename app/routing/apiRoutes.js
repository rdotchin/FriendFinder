

var path = require('path');
//requires the data from the friends.js file that includes the friends variable
var friendsData = require('../data/friends.js');
//hold the userArray survey arrayNumber results to compare to other scores
var userArray = []
//starting arrayNumber to compare different between the user score and the current friend
var comparisonNum = 500;

//variable set to hold the arrayNumber of the best friend to be returned
var bestFriend;
var difference = 0;
var arrayNum = 0
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

		
	//variable set to hold the friendNumber of the best friend to be returned
var bestFriend = 0;
var difference = 0;
var friendNum = 0;
	console.log(friendsData.length);
		function finalFriend(){
			res.send(bestFriend);
			reset();
			console.log("final best friend" + bestFriend.name);
		}
		
		
		//compare user vs friend
		function compareScores(){
			if(friendNum == friendsData.length ){
				//once all friends are compared the function to return the details of the best friend is called
				finalFriend();
			}
			else{
			console.log("========================")
			console.log("friendNum: " + friendNum)
			difference = 0;
			for(var i = 0; i < userArray.length; i++){
				difference += Math.abs(friendsData[friendNum].scores[i] - userArray[i]);
			}
			console.log("comp friend: " + friendsData[friendNum].name);
			console.log("diff " + difference)
			bestScore(difference, friendNum);
		}
		}

		//if current friend score is less than previous he becomes the new best friend
		function bestScore(difference, friendfriendNum) {
			friendNum +=1;
			
			if (difference < comparisonNum){
				bestFriend = friendsData[friendfriendNum]
				comparisonNum = difference;
				console.log("comp num " + comparisonNum)
				console.log("current best friend : " + bestFriend.name)
				/*friendNum += 1;*/
				compareScores();	
			} else {
				console.log("current best friend : " + bestFriend.name)
				console.log("comp num " + comparisonNum)
				/*friendNum += 1;*/
				compareScores();
			}
		}
		compareScores();
		
		//push the users info to the friends array and reset all the variables to compare the next user
		function reset(){
			friendsData.push(req.body);
			difference = 0;
			arrayNum = 0;
			comparisonNum = 500;
			bestFriend;
			userArray = [];
		}



	}); //app.post end

} //modules.export end


