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
		latitude: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		longitude: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		numOpenSpace: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 5,
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id",
			},
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
