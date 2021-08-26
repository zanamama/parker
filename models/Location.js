const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Location extends Model {}

Location.init(
	{
		// TODO: Change adress to address
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		isOpen: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "location",
	}
);

module.exports = Location;