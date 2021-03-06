"use strict";

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		first_name : {
			type : DataTypes.STRING,
			allowNull : false,
		},
		last_name : {
			type : DataTypes.STRING,
			allowNull : false,
		},
		email_address : {
			type : DataTypes.STRING,
			allowNull : false,
		},
		password : {
			type : DataTypes.STRING,
			allowNull : false,
		},
	},
	{
		timestamps : false,
		tableName : "user",
		underscored: true,
		classMethods: {
			associate: function(models) {
				User.belongsToMany(models.Course, { through: 'course_user', timestamps: false });
			}
		}
	});
	return User;
};