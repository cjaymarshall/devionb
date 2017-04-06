var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': 'data/iondb.sqlite'
});

var db = {};

	db.getIons = sequelize.import('models/useThisArray.js');
	db.sequelize = sequelize;
	db.Sequelize = Sequelize;

module.exports = db;