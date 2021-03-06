var PORT = process.env.PORT||3000;
//set express variable to require the express module-instantiates an instance of express
var express = require('express');
//set bodyParser variable to require the body-parser module-this will be used for post requests where this functionality will correctly parse the body information sent with the post request
var bodyParser = require('body-parser');
//set the underscore mark variable to require underscore-this module adds functionality that will help find and validata specific records
var _ = require('underscore');

var db = require('./db.js');


//set the middleware variable to require the file 'middleware.js', a custom middleware script that adds a logger function to app

var middleware = require('./middleware.js')
// set app variable to the express function
var app = express();

app.use(bodyParser.json());

var http = require('http').Server(app);
var io = require('socket.io')(http);



//get request is a request to the browser for information-user sends info related to the request, browser sends a respons
//--first arg is route
//--second arg is anonymous function-first arg is all info sent by user, second arg is response-info to send back to use from browser
//

// app.get('/', function (req, res) {

//  	res.send('Hello Express');
//  	});



app.use(middleware.logger);

//the about path-just gets the page with 'about us' on it
// app.get('/about', function (req,res) {

// 	res.send('About Us');

//  });

// GET /useThisArray?ox=2

// app.get('/useThisArray', function (req, res) {

// 	var query = req.query;
// 	var where = {};

// 	if (query.hasOwnProperty('ox')) {

// 		var val = parseInt(query.ox,10);
// 	 	console.log(val);
// 	 	where.ox = val;
// 	}

// 	if (query.hasOwnProperty('q') && query.q.length >0) {

// 		where.ions = {
// 			$like: query.q + '%'
// 		};

// 	}

// 	db.getIons.findAll({where: where}).then(function (foundIons) {

// 		res.json(foundIons);

// 	}, function(e) {
// 		res.status(500).send();
// 	});

// });

	//var queryParams = req.query;

	// var filteredUseThisArray = useThisArray;

	// if (queryParams.hasOwnProperty('ox')) {

	// 	var val = parseInt(queryParams.ox,10);
	// 	console.log(val);
	// 	obj = new Object ();
	// 	obj.ox = val
	// 	console.log(obj)

	// 	filteredUseThisArray = _.where(filteredUseThisArray, obj)
		
	// }

	// if (queryParams.hasOwnProperty('q') && queryParams.q.length>0) {
	// 	filteredUseThisArray = _.filter(filteredUseThisArray, function (useThisArray) {
	// 		return useThisArray.ionName.indexOf(queryParams.q) > -1;
	// 	});
	// }

	// res.json(filteredUseThisArray);

// });

// GET /useThisArray/:ionid--gets a specific ion

// app.get('/useThisArray/:id', function (req, res) {
// 	//res.json('Asking for ion with id of ' + req.params.ionId);

// 	var ionIda = parseInt(req.params.id, 10);

// 	db.getIons.findById(ionIda).then(function (foundIon) {
// 		if(!!foundIon) {
// 			res.json(foundIon.toJSON());
// 		} else {
// 			res.status(404).send();
// 		}
// 	}, function(e) {
// 		res.status(500).send();
// 	});


	// var matchedIonId = _.findWhere(useThisArray, {ionId: ionIda});

	// console.log(matchedIonId);
	// if (matchedIonId) {

	// 	res.json(matchedIonId);

	// } else {

	// 	res.status(404).send();

	// }

// });

// app.post('/useThisArray', function (req,res) {

// 	var body = _.pick(req.body, 'ionId', 'ions', 'ionCharge', 'ionName', 'ionNameA', 'ionNameB', 'ionNameC', 'ionNameD', 'latin', 'explanation', 'ox', 'typeall', 'typemono', 'typepa', 'typemustknowa', 'typemustknowb', 'isTransMetal');

// 	db.getIons.create(body).then(function(addedIon) {
// 		res.json(addedIon.toJSON());
// 	},function(e) {
// 		res.status(400).json(e);
// 	});

	//  if 	(!_.isNumber(body.ionId) ||				//makes certain all fields contain the right info
	// 		!_.isString(body.ions) ||
	//  		body.ions.trim().length === 0 ||
	//  		!_.isString(body.ionCharge) ||
	// 		body.ionCharge.trim().length === 0 ||
	// 		!_.isString(body.ionName) ||
	// 		body.ionName.trim().length === 0 ||
	// 		!_.isString(body.ionNameA) ||
	// 		body.ionNameA.trim().length === 0 ||
	// 		!_.isString(body.ionNameB) ||
	// 		body.ionNameB.trim().length === 0 ||
	// 		!_.isString(body.ionNameC) ||
	// 		body.ionNameC.trim().length === 0 ||
	// 		!_.isString(body.ionNameD) ||
	// 		body.ionNameD.trim().length === 0 ||
	// 		//!_.isString(body.latin) ||
	// 		//body.latin.trim().length === 0 ||
	// 		!_.isNumber(body.explanation) ||
	// 		!_.isNumber(body.ox) ||
	// 		!_.isNumber(body.typeall) ||
	// 		!_.isNumber(body.typemono) ||
	// 		!_.isNumber(body.typea) ||
	// 		!_.isNumber(body.typemustknowa) ||
	//  		!_.isNumber(body.typemustknowb) ||
	//  		!_.isNumber(body.isTransMetal)
	// )  

	//  {

	//  		return res.status(400).send();
	//  }

	// console.log('Ion Name: ' + body.ionName);

	// body.ions = body.ions.trim();				//makes sure only 'trimmed' values are placed in array
	// body.ionCharge = body.ionCharge.trim();
	// body.ionName = body.ionName.trim();
	// body.ionNameA = body.ionNameA.trim();
	// body.ionNameB = body.ionNameB.trim();
	// body.ionNameC = body.ionNameC.trim();
	// body.ionNameD = body.ionNameD.trim();
	// body.latin = body.latin.trim();
	
	// useThisArray.push(body);

	// res.json(body);



// });

// app.delete('/useThisArray/:id', function (req, res) {
// 	//res.json('Asking for ion with id of ' + req.params.ionId);

// 	var ionIda = parseInt(req.params.id, 10);

// 	db.getIons.destroy({
// 		where: {
// 			id: ionIda
// 		}
// 	}).then(function (recordsDeleted) {
// 		if (recordsDeleted ===0) {
// 			res.status(404).json({
// 				error: 'No ion with id'
// 			});
// 		} else {
// 			res.status(204).send();
// 		}
// 	}, function () {
// 		res.status(500).send();
// 	});

// app.delete('/useThisArray/:ionId', function (req, res) {
// 	//res.json('Asking for ion with id of ' + req.params.ionId);

// 	var ionIda = parseInt(req.params.ionId, 10);

// 	db.getIons.destroy({
// 		where: {
// 			ionId: ionIda
// 		}
// 	}).then(function (recordsDeleted) {
// 		if (recordsDeleted ===0) {
// 			res.status(404).json({
// 				error: 'No ion with id'
// 			});
// 		} else {
// 			res.status(204).send();
// 		}
// 	}, function () {
// 		res.status(500).send();
// 	});

	// app.delete('/useThisArray/:ionName', function (req, res) {
	// //res.json('Asking for ion with id of ' + req.params.ionId);

	// var ionNameA = req.params.ionName;

	// db.getIons.destroy({
	// 	where: {
	// 		ionName: ionNameA
	// 	}
	// }).then(function (recordsDeleted) {
	// 	if (recordsDeleted ===0) {
	// 		res.status(404).json({
	// 			error: 'No ion with name'
	// 		});
	// 	} else {
	// 		res.status(204).send();
	// 	}
	// }, function () {
	// 	res.status(500).send();
	// });

	//makes sure ionId is seen as an integer
	// var matchedIonId = _.findWhere(useThisArray, {ionId: ionIda});  //surfs the array finding the record in which the ionId equals the searched for value

	// console.log(matchedIonId);
	

	// if(!matchedIonId) {

	// 	res.status(404).json({"error": "No ion found with this id"});

	// } else {

	// 	useThisArray = _.without(useThisArray, matchedIonId);
	// 	res.json(matchedIonId);

	// }

// });

// app.put('/useThisArray/:id', function (req,res) {

// 	var ionIda = parseInt(req.params.id, 10);	
// 	var body = _.pick(req.body, 'ionId', 'ions', 'ionCharge', 'ionName', 'ionNameA', 'ionNameB', 'ionNameC', 'ionNameD', 'latin', 'explanation', 'ox', 'typeall', 'typemono', 'typea', 'typemustknowa', 'typemustknowb', 'isTransMetal');
// 	var attributes = {};

// 	if (body.hasOwnProperty('ionId')) {
// 			attributes.ionId = body.ionId
// 		}
// 	if (body.hasOwnProperty('ions')) {
// 			attributes.ions = body.ions
// 	}	
// 	if (body.hasOwnProperty('ionCharge')) {
// 			attributes.ionCharge = body.ionCharge
// 	} 
// 	if (body.hasOwnProperty('ionName')) {
// 			attributes.ionName = body.ionName
// 	}
// 	if (body.hasOwnProperty('ionNameA')) {
// 			attributes.ionNameA = body.ionNameA
// 	} 
// 	if (body.hasOwnProperty('ionNameB')) {
// 			attributes.ionNameB = body.ionNameB
// 	} 
// 	if (body.hasOwnProperty('ionNameC')) {
// 			attributes.ionNameC = body.ionNameC
// 	} 
// 	if (body.hasOwnProperty('ionNameD')) {
// 			attributes.ionNameD = body.ionNameD
// 	} 
// 	if (body.hasOwnProperty('latin')) {
// 			attributes.latin = body.latin
// 	}
// 	if (body.hasOwnProperty('explanation')) {
// 			attributes.explanation = body.explanation
// 	}
// 	if (body.hasOwnProperty('ox')) {
// 			attributes.ox = body.ox
// 	} 
// 	if (body.hasOwnProperty('typeall')) {
// 			attributes.typeall = body.typeall
// 	} 
// 	if (body.hasOwnProperty('typemono')) {
// 		attributes.typemono = body.typemono
// 	} 
// 	if (body.hasOwnProperty('typea')) {
// 			attributes.typea = body.typea
// 	} 
// 	if (body.hasOwnProperty('typemustknowa')) {
// 			attributes.typemustknowa = body.typemustknowa
// 	} 
// 	if (body.hasOwnProperty('typemustknowb')) {
// 			attributes.typemustknowb = body.typemustknowb
// 	} 
// 	if (body.hasOwnProperty('isTransMetal')) {
// 			attributes.isTransMetal = body.isTransMetal
// 	} 

	// db.getIons.findById(ionIda).then(function (foundIon) {
	// 	if (foundIon) {
	// 		foundIon.update(attributes).then(function (foundIon) {
	// 			res.json(foundIon.toJSON());
	// 		}, function (e) {
	// 			res.status(400).json(e);
	// 		});
	// 	} else {
	// 		res.status(404).send();
	// 		}
	// 	}, function () {
	// 		res.status(500).send();
	// });

					//makes sure ionId is seen as an integer
	// var matchedIonId = _.findWhere(useThisArray, {ionId: ionIda});  //surfs the array finding the record in which the ionId equals the searched for value

	// console.log(matchedIonId);

	// if(!matchedIonId) {													//if no matched id, sends back an error message

	// 	return res.status(404).json({"error": "No ion found with this id"});  //using return stops action

	// } 
	//create var that will hold 'picked' key:value pairs-pick used to prevent bad data from being added
	// var body = _.pick(req.body, 'ionId', 'ions', 'ionCharge', 'ionName', 'ionNameA', 'ionNameB', 'ionNameC', 'ionNameD', 'latin', 'explanation', 'ox', 'typeall', 'typemono', 'typea', 'typemustknowa', 'typemustknowb', 'isTransMetal');
	//create var that will hold final values to be updated
	// var validAttributes = {};

	//validate selected fields using 'has own property' in combo with 'isString', return an error if there is a problem
	// if (body.hasOwnProperty('ionId') && _.isNumber(body.ionId)) {
	// 	validAttributes.ionId = body.ionId
	// } else if (body.hasOwnProperty('ionId')) {
	// 	return res.status(400).json({"error": "Problem with ionId field"});
	// }

	// if (body.hasOwnProperty('ions') && _.isString(body.ions) && body.ions.trim().length >0) {
	// 	validAttributes.ions = body.ions
	// } else if (body.hasOwnProperty('ions')) {
	// 	return res.status(400).json({"error": "Problem with ions field"});
	// }

	// if (body.hasOwnProperty('ionCharge') && _.isString(body.ionCharge) && body.ionCharge.trim().length >0) {
	// 	validAttributes.ionCharge = body.ionCharge
	// } else if (body.hasOwnProperty('ionCharge')) {
	// 	return res.status(400).json({"error": "Problem with ionCharge field"});
	// }

	// if (body.hasOwnProperty('ionName') && _.isString(body.ionName) && body.ionName.trim().length >0) {
	// 	validAttributes.ionName = body.ionName
	// } else if (body.hasOwnProperty('ionName')) {
	// 	return res.status(400).json({"error": "Problem with ionName field"});
	// }

	// if (body.hasOwnProperty('ionNameA') && _.isString(body.ionNameA) && body.ionNameA.trim().length >0) {
	// 	validAttributes.ionNameA = body.ionNameA
	// } else if (body.hasOwnProperty('ionNameA')) {
	// 	return res.status(400).json({"error": "Problem with ionNameA field"});
	// }
	// if (body.hasOwnProperty('ionNameB') && _.isString(body.ionNameB) && body.ionNameB.trim().length >0) {
	// 	validAttributes.ionNameB = body.ionNameB
	// } else if (body.hasOwnProperty('ionNameB')) {
	// 	return res.status(400).json({"error": "Problem with ionNameA field"});
	// }
	// if (body.hasOwnProperty('ionNameC') && _.isString(body.ionNameC) && body.ionNameC.trim().length >0) {
	// 	validAttributes.ionNameC = body.ionNameC
	// } else if (body.hasOwnProperty('ionNameC')) {
	// 	return res.status(400).json({"error": "Problem with ionNameB field"});
	// }

	// if (body.hasOwnProperty('ionNameD') && _.isString(body.ionNameD) && body.ionNameD.trim().length >0) {
	// 	validAttributes.ionNameD = body.ionNameD
	// } else if (body.hasOwnProperty('ionNameD')) {
	// 	return res.status(400).json({"error": "Problem with ionNameC field"});
	// }

	// if (body.hasOwnProperty('latin') && _.isString(body.latin) && body.latin.trim().length >0) {
	// 	validAttributes.latin = body.latin
	// } else {
	// 	validAttributes.latin = null
	// }

	// if (body.hasOwnProperty('explanation') && _.isNumber (body.explanation)) {
	// 	validAttributes.explanation = body.explanation
	// } else if (body.hasOwnProperty('explanation')) {
	// 	return res.status(400).json({"error": "Problem with epxlanation field"});
	// }
	// if (body.hasOwnProperty('ox') && _.isNumber (body.ox)) {
	// 	validAttributes.ox = body.ox
	// } else if (body.hasOwnProperty('ox')) {
	// 	return res.status(400).json({"error": "Problem with ox field"});
	// }
	// if (body.hasOwnProperty('typeall') && _.isNumber (body.typeall)) {
	// 	validAttributes.typeall = body.typeall
	// } else if (body.hasOwnProperty('typeall')) {
	// 	return res.status(400).json({"error": "Problem with typeall field"});
	// }
	// if (body.hasOwnProperty('typemono') && _.isNumber (body.typemono)) {
	// 	validAttributes.typemono = body.typemono
	// } else if (body.hasOwnProperty('typemono')) {
	// 	return res.status(400).json({"error": "Problem with typemono field"});
	// }
	// if (body.hasOwnProperty('typea') && _.isNumber(body.typea)) {
	// 	validAttributes.typea = body.typea
	// } else if (body.hasOwnProperty('typea')) {
	// 	return res.status(400).json({"error": "Problem with typea field"});
	// }
	// if (body.hasOwnProperty('typemustknowa') && _.isNumber (body.typemustknowa)) {
	// 	validAttributes.typemustknowa = body.typemustknowa
	// } else if (body.hasOwnProperty('typemustknowa')) {
	// 	return res.status(400).json({"error": "Problem with typemustknowa field"});
	// }
	// if (body.hasOwnProperty('typemustknowb') && _.isNumber (body.typemustknowb)) {
	// 	validAttributes.typemustknowb = body.typemustknowb
	// } else if (body.hasOwnProperty('typemustknowb')) {
	// 	return res.status(400).json({"error": "Problem with typemustknowb field"});
	// }
	// if (body.hasOwnProperty('isTransMetal') && _.isNumber (body.isTransMetal)) {
	// 	validAttributes.isTransMetal = body.isTransMetal
	// } else if (body.hasOwnProperty('isTransMetal')) {
	// 	return res.status(400).json({"error": "Problem with isTransMetal field"});
	// }

	


// });


db.sequelize.sync({
 	force: false
 	}).then(function () {

	 //app.listen(PORT, function() {

	app.use(express.static(__dirname + '/public')); 

	io.on('connection', function(socket) {
		console.log('User connected via socket.io');

		socket.send('Send message');
		socket.emit('test',5);
		socket.on('testBack', function (data) {
			console.log(data);
		});
		socket.on('quizType', function (data) {
			console.log(data)

			where = {};

			if(data === 1) {
				console.log('quizType is All Ions');
				where.typeall = 1
			}
			if(data === 2) {
				console.log('quizType is Ions You Must Know-High School (just main group and polyatomic ions');
				where.typemustknowa = 1
			}
			if(data === 3) {
				console.log('quizType is all polyatomic ions');
				where.typepa = 1
			}

				
			db.getIons.findAll({

				where: where,
				order: [db.Sequelize.fn('RANDOM')]
				

			}).then(function (foundIons) {
			socket.emit('useThisArray',foundIons);
					
			console.log(foundIons);

				});

			//});
		

	});

		socket.on('disconnect', function () {
			console.log ('A user disconnected');

		
		});
	});
	
	

	http.listen(PORT, function () {

		console.log("Server Started on port " + PORT  + "!");

	});

	
});









































