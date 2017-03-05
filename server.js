var PORT = process.env.PORT||3000;
//set express variable to require the express module-instantiates an instance of express
var express = require('express');
// set app variable to the express function
var app = express();
var useThisArray = [
	{
	ionId: 1,
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
	ionId: 2,
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
	ionId: 3,
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
	ionId: 4,
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
	ionId: 5,
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
	ionId: 6,
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
	ionId: 7,
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
	ionId: 8,
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
	ionId: 9,
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
	ionId: 10,
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

// GET /useThisArray

app.get('/useThisArray', function (req, res) {
	res.json(useThisArray);
});

// GT /useThisArray/:ionid

app.use(express.static(__dirname + '/public')) 

app.listen(PORT, function() {

	console.log("Server Started on port " + PORT  + "!");

});







































