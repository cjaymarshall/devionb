module.exports = function(sequelize, DataTypes) {

	console.log('got here')

return sequelize.define('iondbs', {
	 ionId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ions: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ionCharge: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ionName: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ionNameA: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ionNameB: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ionNameC: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ionNameD: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	latin: {
		type: DataTypes.STRING,
		allowNull: true,
		defaultValue: 'No Latin Naming',
		validate: {
			notEmpty: true
		}
	},
	explanation: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	ox: {
		type: DataTypes.NUMERIC,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	typeall: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	typemono: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	typepa: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	typemustknowa: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	typemustknowb: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	isTransMetal: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	}
},{
	freezeTableName: true
});


}