const { User } = require("../models");

const users = [
	{
		firstname: "Hassan",
		lastname: "Yusuf",
		username: "HassY",
		email: "hassy@gmail.com",
		password: "hassy123",
	},
	{
		firstname: "Burak",
		lastname: "Aksu",
		username: "BurakA",
		email: "burakA@gmail.com",
		password: "burak321",
	},
	{
		firstname: "Gospel",
		lastname: "Chukwu",
		username: "GospelC",
		email: "gospelc@gmail.com",
		password: "gospel111",
	},
	{
		firstname: "Zana",
		lastname: "Mathuthu",
		username: "ZanaM",
		email: "zanaM@gmail.com",
		password: "Zana222",
	},
];

const userData = () => User.bulkCreate(users);

module.exports = userData;
