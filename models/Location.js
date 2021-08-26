const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Location extends Model {
	hasOpenSpace() {
		return this.numOpenSpace > 0;
	}
}

Location.init(
	{
		// TODO: Change adress to address
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		numOpenSpace: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
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