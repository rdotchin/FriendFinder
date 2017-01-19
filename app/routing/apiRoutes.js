
//A POST route /api/friends that will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic


/*sets the required data from friends.js to the variable friends so it can be 
called in app.get*/
var friends = require('../data/friends.js');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		console.log(friends);
		res.json(friends);
	});

/*	app.post('/api/friends', function(req, res){

	})*/

}