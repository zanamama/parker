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
	{
		firstname: "Joe",
		lastname: "joey",
		email: "joe@gmail.com",
		password: "joe123",
	},
	{
		firstname: "Jame",
		lastname: "jamey",
		email: "jame@gmail.com",
		password: "jame123",
	},
	{
		firstname: "mike",
		lastname: "k",
		email: "mike@gmail.com",
		password: "mike111",
	},
	{
		firstname: "logan",
		lastname: "l",
		email: "loganl@gmail.com",
		password: "logan222",
	},
	{
		firstname: "ben",
		lastname: "j",
		email: "ben@gmail.com",
		password: "benj123",
	},
	{
		firstname: "kevin",
		lastname: "l",
		email: "kevinl@gmail.com",
		password: "kevin321",
	},
	{
		firstname: "hassan",
		lastname: "h",
		email: "hassanh@gmail.com",
		password: "hassan111",
	},
	{
		firstname: "nafis",
		lastname: "y",
		email: "nafis@gmail.com",
		password: "nafis222",
	},
];

const userData = () => User.bulkCreate(users);

module.exports = userData;
