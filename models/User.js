const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const sequelize = require("../config/connection.js").default;

class User extends Model {
	checkPassword(loginPW) {
		return bcrypt.compareSync(loginPW, this.password);
	}
}

User.init(
	{
		firstname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastname: {
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
			beforeCreate: async (newUser) => {
				newUser.password = await bcrypt.hash(newUser.password, 10);
				return newUser;
			},
			beforeUpdate: async (updatedUser) => {
				updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
				return updatedUser;
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
