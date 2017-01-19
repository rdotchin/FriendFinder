var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;


//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//require apiRoutes.js and htmlRoutes.js
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//listen on port 3000
app.listen(PORT, function(){
	console.log("listening on port http://localhost:" + PORT);
});