const { Model, DataTypes } = require('sequelize');
const bcrypt = require("'bcrypt");

const sequelize = require('../config/connection.js');

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
    first_name: {
      types: DataTypes.String,
      allowNull: false,
    },
    last_name: {
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
      beforeCaete: async (newUserData) => {
        newUserData.password = await bcrypt.has(newUserData.password, 10);
        return newUserData
      },
    },
    sequlize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;