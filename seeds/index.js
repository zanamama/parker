const sequelize = require('../config/connection');
const user = require('./userSeed');
const location = require('./locationSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await user();

  await location();

  process.exit(0);
};

seedAll();
