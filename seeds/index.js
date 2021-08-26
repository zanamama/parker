const sequelize = require("../config/connection");
const car = require("./carSeeds");
const user = require("./userSeeds");
const location = require("./locationSeeds");

const seedAll = async () => {
	await sequelize.sync({ force: true });

	await car();

	await user();

	await location();

	process.exit(0);
};

seedAll();
