var PORT = process.env.PORT||3000;
//set express variable to require the express module-instantiates an instance of express
var express = require('express');
//set bodyParser variable to require the body-parser module-this will be used for post requests where this functionality will correctly parse the body information sent with the post request
var bodyParser = require('body-parser');
//set the underscore mark variable to require underscore-this module adds functionality that will help find and validata specific records
var _ = require('underscore');
//set the middleware variable to require the file 'middleware.js', a custom middleware script that adds a logger function to app
var middleware = require('./middleware.js')
// set app variable to the express function
var app = express();
//sample data to make sure everything is working before transferring to a db
var useThisArray = [
	{
	ionId: 0,
	ions: "H",
	ionCharge: "\u207A",
	ionName: "Hydrogen",
	ionNameA: "Hydride",
	ionNameB: "Hydrate",
	ionNameC: "Monohydride",
	ionNameD: "Hydrogen (I)",
	latin: "",
	explanation: 0,
	ox: 1,
	typeall: 1,
	typemono: 1,
	typea: 0,
	typemustknowa: 1,
	typemustknowb: 1,
	isTransMetal: 0
 	},
	{
	ionId: 1,
	ions: "Li",
	ionCharge: "\u207A",
	ionName: "Lithium",
	ionNameA: "Lithous",
	ionNameB: "Lithate",
	ionNameC: "Perlithate",
	ionNameD: "Lithium (I)",
	latin: "",
	explanation: 0,
	ox: 1,
	typeall: 2,
	typemono: 2,
	typea: 0,
	typemustknowa: 1,
	typemustknowb: 1,
	isTransMetal: 0 
	},
	{
	ionId: 2,
	ions: "Na",
	ionCharge: "\u207A",
	ionName: "Sodium",
	ionNameA: "Sodide",
	ionNameB: "Sodic",
	ionNameC: "Sodium (I)",
	ionNameD: "Monosodate",
	latin: "",
	explanation: 0,
	ox: 1,
	typeall: 1,
	typemono: 1,
	typea: 0,
	typemustknowa: 1,
	typemustknowb: 1,
	isTransMetal: 0
	},
	{
	ionId: 3,
	ions: "K",
	ionCharge: "\u207A",
	ionName: "Potassium",
	ionNameA: "Potassic",
	ionNameB: "Monopotassium",
	ionNameC: "Potassium (I)",
	ionNameD: "Hypopotasside",
	latin: "",
	explanation: 0,
	ox: 1,
	typeall: 1,
	typemono: 1,
	typea: 0,
	typemustknowa: 1,
	typemustknowb: 1,
	isTransMetal: 0
	},
	{
	ionId: 4,
	ions: "Rb",
	ionCharge: "\u207A",
	ionName: "Rubidium",
	ionNameA: "Rubidiate",
	ionNameB: "Rubidium (I)",
	ionNameC: "Rubidiide",
	ionNameD: "Rubidic",
	latin: "",
	explanation: 0,
	ox: 1,
	typeall: 1,
	typemono: 1,
	typea: 0,
	typemustknowa: 1,
	typemustknowb: 1,
	isTransMetal: 0
	},
	{
	ionId: 5,
	ions: "Cs",
	ionCharge: "\u207A",
	ionName: "Cesium",
	ionNameA: "Cesiide",
	ionNameB: "Cesious",
	ionNameC: "Cesium (I)",
	ionNameD: "Cesiate",
	latin: "",
	explanation: 0,
	ox: 1,
	typeall: 1,
	typemono: 1,
	typea: 0,
	typemustknowa: 1,
	typemustknowb: 1,
	isTransMetal: 0
	},
	{
	ionId: 6,
	ions: "Mg",
	ionCharge: "\u00B2\u207A",
	ionName: "Magnesium",
	ionNameA: "Magneside",
	ionNameB: "Permagnesidate",
	ionNameC: "Magnesium (II)",
	ionNameD: "Magnesic",
	latin: "",
	explanation: 0,
	ox: 2,
	typeall: 1,
	typemono: 1,
	typea: 0,
	typemustknowa: 1,
	typemustknowb: 1,
	isTransMetal: 0
	},
	{
	ionId: 7,
	ions: "Ca",
	ionCharge: "\u00B2\u207A",
	ionName: "Calcium",
	ionNameA: "Calcite",
	ionNameB: "Monocalcium",
	ionNameC: "Calcium (II)",
	ionNameD: "Calcious",
	latin: "",
	explanation: 0,
	ox: 2,
	typeall: 1,
	typemono: 1,
	typea: 0,
	typemustknowa: 1,
	typemustknowb: 1,
	isTransMetal: 0
	},
	{
	ionId: 8,
	ions: "Sr",
	ionCharge: "\u00B2\u207A",
	ionName: "Strontium",
	ionNameA: "Strontious",
	ionNameB: "Monostrontium",
	ionNameC: "Strontium (II)",
	ionNameD: "Strontide",
	latin: "",
	explanation: 0,
	ox: 2,
	typeall: 1,
	typemono: 1,
	typea: 0,
	typemustknowa: 1,
	typemustknowb: 1,
	isTransMetal: 0
	},
	{
	ionId: 9,
	ions: "Ba",
	ionCharge: "\u00B2\u207A",
	ionName: "Barium",
	ionNameA: "Baride",
	ionNameB: "Baric",
	ionNameC: "Barium (II)",
	ionNameD: "Hypobarite",
	latin: "",
	explanation: 0,
	ox: 2,
	typeall: 1,
	typemono: 1,
	typea: 0,
	typemustknowa: 1,
	typemustknowb: 1,
	isTransMetal: 0
	}
]


app.use(bodyParser.json());

//var http = require('http').Server(app);



//get request is a request to the browser for information-user sends info related to the request, browser sends a respons
//--first arg is route
//--second arg is anonymous function-first arg is all info sent by user, second arg is response-info to send back to use from browser
//

// app.get('/', function (req, res) {

//  	res.send('Hello Express');
//  	});



app.use(middleware.logger);

//the about path-just gets the page with 'about us' on it
app.get('/about', function (req,res) {

	res.send('About Us');

 });

// GET /useThisArray?ox=2

app.get('/useThisArray', function (req, res) {
	var queryParams = req.query;
	var filteredUseThisArray = useThisArray;

	if (queryParams.hasOwnProperty('ox')) {

		var val = parseInt(queryParams.ox,10);
		console.log(val);
		obj = new Object ();
		obj.ox = val
		console.log(obj)

		filteredUseThisArray = _.where(filteredUseThisArray, obj)
		
	}

	res.json(filteredUseThisArray);

});

// GET /useThisArray/:ionid--gets a specific ion

app.get('/useThisArray/:ionId', function (req, res) {
	//res.json('Asking for ion with id of ' + req.params.ionId);

	var ionIda = parseInt(req.params.ionId, 10);
	var matchedIonId = _.findWhere(useThisArray, {ionId: ionIda});

	console.log(matchedIonId);
	if (matchedIonId) {

		res.json(matchedIonId);

	} else {

		res.status(404).send();

	}

});

app.post('/useThisArray', function (req,res) {

	var body = _.pick(req.body, 'ionId', 'ions', 'ionCharge', 'ionName', 'ionNameA', 'ionNameB', 'ionNameC', 'ionNameD', 'latin', 'explanation', 'ox', 'typeall', 'typemono', 'typea', 'typemustknowa', 'typemustknowb', 'isTransMetal');

	 if 	(!_.isNumber(body.ionId) ||				//makes certain all fields contain the right info
			!_.isString(body.ions) ||
	 		body.ions.trim().length === 0 ||
	 		!_.isString(body.ionCharge) ||
			body.ionCharge.trim().length === 0 ||
			!_.isString(body.ionName) ||
			body.ionName.trim().length === 0 ||
			!_.isString(body.ionNameA) ||
			body.ionNameA.trim().length === 0 ||
			!_.isString(body.ionNameB) ||
			body.ionNameB.trim().length === 0 ||
			!_.isString(body.ionNameC) ||
			body.ionNameC.trim().length === 0 ||
			!_.isString(body.ionNameD) ||
			body.ionNameD.trim().length === 0 ||
			//!_.isString(body.latin) ||
			//body.latin.trim().length === 0 ||
			!_.isNumber(body.explanation) ||
			!_.isNumber(body.ox) ||
			!_.isNumber(body.typeall) ||
			!_.isNumber(body.typemono) ||
			!_.isNumber(body.typea) ||
			!_.isNumber(body.typemustknowa) ||
	 		!_.isNumber(body.typemustknowb) ||
	 		!_.isNumber(body.isTransMetal)
	)  

	 {

	 		return res.status(400).send();
	 }

	console.log('Ion Name: ' + body.ionName);

	body.ions = body.ions.trim();				//makes sure only 'trimmed' values are placed in array
	body.ionCharge = body.ionCharge.trim();
	body.ionName = body.ionName.trim();
	body.ionNameA = body.ionNameA.trim();
	body.ionNameB = body.ionNameB.trim();
	body.ionNameC = body.ionNameC.trim();
	body.ionNameD = body.ionNameD.trim();
	body.latin = body.latin.trim();
	
	useThisArray.push(body);

	res.json(body);



});

app.delete('/useThisArray/:ionId', function (req, res) {
	//res.json('Asking for ion with id of ' + req.params.ionId);

	var ionIda = parseInt(req.params.ionId, 10);					//makes sure ionId is seen as an integer
	var matchedIonId = _.findWhere(useThisArray, {ionId: ionIda});  //surfs the array finding the record in which the ionId equals the searched for value

	console.log(matchedIonId);
	

	if(!matchedIonId) {

		res.status(404).json({"error": "No ion found with this id"});

	} else {

		useThisArray = _.without(useThisArray, matchedIonId);
		res.json(matchedIonId);

	}

});

app.put('/useThisArray/:ionId', function (req,res) {

	var ionIda = parseInt(req.params.ionId, 10);					//makes sure ionId is seen as an integer
	var matchedIonId = _.findWhere(useThisArray, {ionId: ionIda});  //surfs the array finding the record in which the ionId equals the searched for value

	console.log(matchedIonId);

	if(!matchedIonId) {													//if no matched id, sends back an error message

		return res.status(404).json({"error": "No ion found with this id"});  //using return stops action

	} 
	//create var that will hold 'picked' key:value pairs-pick used to prevent bad data from being added
	var body = _.pick(req.body, 'ionId', 'ions', 'ionCharge', 'ionName', 'ionNameA', 'ionNameB', 'ionNameC', 'ionNameD', 'latin', 'explanation', 'ox', 'typeall', 'typemono', 'typea', 'typemustknowa', 'typemustknowb', 'isTransMetal');
	//create var that will hold final values to be updated
	var validAttributes = {};

	//validate selected fields using 'has own property' in combo with 'isString', return an error if there is a problem
	if (body.hasOwnProperty('ionId') && _.isNumber(body.ionId)) {
		validAttributes.ionId = body.ionId
	} else if (body.hasOwnProperty('ionId')) {
		return res.status(400).json({"error": "Problem with ionId field"});
	}

	if (body.hasOwnProperty('ions') && _.isString(body.ions) && body.ions.trim().length >0) {
		validAttributes.ions = body.ions
	} else if (body.hasOwnProperty('ions')) {
		return res.status(400).json({"error": "Problem with ions field"});
	}

	if (body.hasOwnProperty('ionCharge') && _.isString(body.ionCharge) && body.ionCharge.trim().length >0) {
		validAttributes.ionCharge = body.ionCharge
	} else if (body.hasOwnProperty('ionCharge')) {
		return res.status(400).json({"error": "Problem with ionCharge field"});
	}

	if (body.hasOwnProperty('ionName') && _.isString(body.ionName) && body.ionName.trim().length >0) {
		validAttributes.ionName = body.ionName
	} else if (body.hasOwnProperty('ionName')) {
		return res.status(400).json({"error": "Problem with ionName field"});
	}

	if (body.hasOwnProperty('ionNameA') && _.isString(body.ionNameA) && body.ionNameA.trim().length >0) {
		validAttributes.ionNameA = body.ionNameA
	} else if (body.hasOwnProperty('ionNameA')) {
		return res.status(400).json({"error": "Problem with ionNameA field"});
	}
	if (body.hasOwnProperty('ionNameB') && _.isString(body.ionNameB) && body.ionNameB.trim().length >0) {
		validAttributes.ionNameB = body.ionNameB
	} else if (body.hasOwnProperty('ionNameB')) {
		return res.status(400).json({"error": "Problem with ionNameA field"});
	}
	if (body.hasOwnProperty('ionNameC') && _.isString(body.ionNameC) && body.ionNameC.trim().length >0) {
		validAttributes.ionNameC = body.ionNameC
	} else if (body.hasOwnProperty('ionNameC')) {
		return res.status(400).json({"error": "Problem with ionNameB field"});
	}

	if (body.hasOwnProperty('ionNameD') && _.isString(body.ionNameD) && body.ionNameD.trim().length >0) {
		validAttributes.ionNameD = body.ionNameD
	} else if (body.hasOwnProperty('ionNameD')) {
		return res.status(400).json({"error": "Problem with ionNameC field"});
	}

	if (body.hasOwnProperty('latin') && _.isString(body.latin) && body.latin.trim().length >0) {
		validAttributes.ionName = body.ionName
	} else {
		validAttributes.latin = null
	}

	if (body.hasOwnProperty('explanation') && _.isNumber (body.explanation)) {
		validAttributes.explanation = body.explanation
	} else if (body.hasOwnProperty('explanation')) {
		return res.status(400).json({"error": "Problem with epxlanation field"});
	}
	if (body.hasOwnProperty('ox') && _.isNumber (body.ox)) {
		validAttributes.ox = body.ox
	} else if (body.hasOwnProperty('ox')) {
		return res.status(400).json({"error": "Problem with ox field"});
	}
	if (body.hasOwnProperty('typeall') && _.isNumber (body.typeall)) {
		validAttributes.typeall = body.typeall
	} else if (body.hasOwnProperty('typeall')) {
		return res.status(400).json({"error": "Problem with typeall field"});
	}
	if (body.hasOwnProperty('typemono') && _.isNumber (body.typemono)) {
		validAttributes.typemono = body.typemono
	} else if (body.hasOwnProperty('typemono')) {
		return res.status(400).json({"error": "Problem with typemono field"});
	}
	if (body.hasOwnProperty('typea') && _.isNumber(body.typea)) {
		validAttributes.typea = body.typea
	} else if (body.hasOwnProperty('typea')) {
		return res.status(400).json({"error": "Problem with typea field"});
	}
	if (body.hasOwnProperty('typemustknowa') && _.isNumber (body.typemustknowa)) {
		validAttributes.typemustknowa = body.typemustknowa
	} else if (body.hasOwnProperty('typemustknowa')) {
		return res.status(400).json({"error": "Problem with typemustknowa field"});
	}
	if (body.hasOwnProperty('typemustknowb') && _.isNumber (body.typemustknowb)) {
		validAttributes.typemustknowb = body.typemustknowb
	} else if (body.hasOwnProperty('typemustknowb')) {
		return res.status(400).json({"error": "Problem with typemustknowb field"});
	}
	if (body.hasOwnProperty('isTransMetal') && _.isNumber (body.isTransMetal)) {
		validAttributes.isTransMetal = body.isTransMetal
	} else if (body.hasOwnProperty('isTransMetal')) {
		return res.status(400).json({"error": "Problem with isTransMetal field"});
	}

	_.extend(matchedIonId, validAttributes);
	res.json(matchedIonId);


});

app.use(express.static(__dirname + '/public')) 

app.listen(PORT, function() {

	console.log("Server Started on port " + PORT  + "!");

});







































