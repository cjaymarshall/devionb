var PORT = process.env.PORT||3000;
//set express variable to require the express module-instantiates an instance of express
var express = require('express');
// set app variable to the express function
var app = express();
var middleware = require('./middleware.js')

//var http = require('http').Server(app);



//get request is a request to the browser for information-user sends info related to the request, browser sends a respons
//--first arg is route
//--second arg is anonymous function-first arg is all info sent by user, second arg is response-info to send back to use from browser
//

// app.get('/', function (req, res) {

//  	res.send('Hello Express');
//  	});

var middleware = {
	logger: function(req, res, next) {
		console.log('Request: ' + new Date().toString() + req.method + ' ' + req.originalUrl);			
		next();
		}	
	};

app.use(middleware.logger);
app.get('/about', function (req,res) {

	res.send('About Us');

 });

app.use(express.static(__dirname + '/public')) 

app.listen(PORT, function() {

	console.log("Server Started on port " + PORT  + "!");

})

// ;
