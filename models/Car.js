const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Car extends Model {}

Car.init(
	{
		brand: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		model: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		color: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id",
			},
		},
		location_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "location",
				key: "id",
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		// TODO: Change product to car
		modelName: "car",
	}
);

module.exports = Car;
