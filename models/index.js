const Car = require('./Car');
const User = require('./User');
const Location = require('./Location');

User.hasOne(Car, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Car.belongsTo(User, {
  foreignKey: 'user_id',
});

modules.exports = { Car, User, Location };