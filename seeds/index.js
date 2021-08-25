const sequelize = require('../config/connection');
const users = require('./users');
const location = require('./location');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await users();

  await location();

  process.exit(0);
};

seedAll();
