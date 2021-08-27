const { User } = require("../models");

const users = [
	{
		firstname: "Hassan",
		lastname: "Yusuf",
		email: "hassy@gmail.com",
		password: "hassy123",
	},
	{
		firstname: "Burak",
		lastname: "Aksu",
		email: "burakA@gmail.com",
		password: "burak321",
	},
	{
		firstname: "Gospel",
		lastname: "Chukwu",
		email: "gospelc@gmail.com",
		password: "gospel111",
	},
	{
		firstname: "Zana",
		lastname: "Mathuthu",
		email: "zanaM@gmail.com",
		password: "Zana222",
	},
];

const userData = () => User.bulkCreate(users);

module.exports = userData;
