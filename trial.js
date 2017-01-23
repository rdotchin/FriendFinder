var userArray = [1, 1, 1, 1, 1, 1, 1, 1, 2, 1];
var friendsData = require('./app/data/friends.js');
//starting number to compare different between the user score and the current friend
var comparisonNum = 500;

//variable set to hold the friendNumber of the best friend to be returned
var bestFriend = 0;
var difference = 0;
var friendNum = 0;
	console.log(friendsData.length);
		function finalFriend(){
			res.send(bestFriend);
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