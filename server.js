var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var PORT = 3000;

//GET home.html
app.get('/', function(req, res){
	res.sendFile(__dirname + '/app/public/home.html')
});
//GET survey.html
app.get('/survey' function(req, res){
	res.sendFile(__dirname + 'app/public/survey.html')
})
//listen on port 3000
app.listen(PORT, function(){
	console.log("listening on port http://localhost:" + PORT);
});