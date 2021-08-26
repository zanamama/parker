const Car = require("./Car");
const User = require("./User");
const Location = require("./Location");

// Define models relationships or association

// TODO: User have one car (lets change to many cars)
User.hasOne(Car, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Car.belongsTo(User, {
  foreignKey: 'user_id',
});

// TODO: Car have one location (at any given time)
Location.hasMany(Car, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE'
});

Car.belongsTo(Location, {
  foreignKey: 'location_id',
})

// TODO: Location have many cars

module.exports = { Car, User, Location };