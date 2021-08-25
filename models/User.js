const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const sequelize = require("../config/connection.js");

class User extends Model {
	checkPassword(loginPW) {
		return bcrypt.compareSync(loginPW, this.password);
	}
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		// TODO: Change first_name to firstname
		firstname: {
			// 1. TODO: Change types to type
			// 2. TODO: Change DataTypes.String to DataTypes.STRING
			type: DataTypes.STRING,
			allowNull: false,
		},
		// TODO: Change last_name to lastname
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [8],
			},
		},
	},
	{
		hooks: {
			// TODO: Correct beforeCaete to beforeCreate
			beforeCreate: async (newUserData) => {
				newUserData.password = await bcrypt.has(newUserData.password, 10);
				return newUserData;
			},
		},
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "user",
	}
);

module.exports = User;
