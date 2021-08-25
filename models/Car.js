const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

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
      refernece: {
        model: 'user',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelname: 'product',
  }
);

module.exports = Car;