
//requires the data from the friends.js file that includes the friends variable
var friendsData = require('../data/friends.js');

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
		friendsData.push(req.body);
		console.log("-------------------")
		console.log(friendsData);
	})

}