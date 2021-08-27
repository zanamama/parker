require("dotenv").config();
const sequelize = require("../config/connection");
const car = require("./carSeeds");
const user = require("./userSeeds");
const location = require("./locationSeeds");

const seedAll = async () => {
	await sequelize.sync({ force: true });

	await user();

	await location();

	await car();

	process.exit(0);
};

seedAll();
