var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': 'iondbtest.sqlite'
});

var Ion = sequelize.define('iondbs', {
	ionId: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ions: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ionCharge: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ionName: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ionNameA: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ionNameB: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ionNameC: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ionNameD: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	latin: {
		type: Sequelize.STRING,
		allowNull: true,
		defaultValue: 'No Latin Naming',
		validate: {
			notEmpty: true
		}
	},
	explanation: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ox: {
		type: Sequelize.NUMERIC,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	typeall: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	typemono: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	typepa: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	typemustknowa: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	typemustknowb: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	isTransMetal: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	}
},{
	freezeTableName: true
});

	sequelize.sync({
 	force: false
 	}).then(function () {
		console.log('Everything is synced');

	 // Ion.create({
		// ionId: 0,
		// ions: "H",
		// ionCharge: "\u207A",
		// ionName: "Hydrogen",
		// ionNameA: "Hydride",
		// ionNameB: "Hydrate",
		// ionNameC: "Monohydride",
		// ionNameD: "Hydrogen (I)",
		// explanation: 0,
		// ox: 1,
		// typeall: 1,
		// typemono: 1,
		// typepa: 0,
		// typemustknowa: 1,
		// typemustknowb: 1,
		// isTransMetal: 0
 
 	// }).then(function(iondbtest) {
 	// 	return Ion.create({
 	// 	ionId: 1,
		// ions: "Li",
		// ionCharge: "\u207A",
		// ionName: "Lithium",
		// ionNameA: "Lithous",
		// ionNameB: "Lithate",
		// ionNameC: "Perlithate",
		// ionNameD: "Lithium (I)",
		// explanation: 0,
		// ox: 1,
		// typeall: 2,
		// typemono: 2,
		// typepa: 0,
		// typemustknowa: 1,
		// typemustknowb: 1,
		// isTransMetal: 0 
 	// 	});
 	 //}).then(function() {
 	 // 	return Ion.findById(100)
 	 // }).then(function(foundIon) {
 		// if(foundIon) {
 		// 	console.log(foundIon.toJSON());
 		// } else {
 		// 	console.log('no ion found');
 		// }
 	 	
 	//  	return Ion.findAll({
 	// 		where: {
 	// 			ionId: 30
 	// 		}
 	// 	});
 	// }).then(function(ionArray) {
 	// 	if(ionArray) {
 	// 		ionArray.forEach(function(ion) {
 	// 		console.log(ion.toJSON());
 	// 		});
 	// 	} else {
 	// 		console.log('no ion found');
 	// 	}

 		return Ion.findAll({
 			where: {
 				ions: {
 					$like: '%x%'
 				}
 			}
 		});
 	}).then(function(ionArray) {
 		if(ionArray) {
 			ionArray.forEach(function(ion) {
 			console.log(ion.toJSON());
 			});
 		} else {
 			console.log('no ion found');
 		}

 	}).catch(function (e) {
 		console.log(e);
 	});
//});
 
