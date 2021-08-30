const { Car } = require("../models");

const cars = [
	{
		brand: "Honda",
		model: "Civic",
		color: "White",
		user_id: 1,
		location_id: 1,
	},

	{
		brand: "Nissan",
		model: "Maxima",
		color: "Black",
		user_id: 2,
		location_id: 1,
	},

	{
		brand: "BMW",
		model: "X1",
		color: "Red",
		user_id: 3,
		location_id: 1,
	},

	{
		brand: "Toyota",
		model: "Highlander",
		color: "gray",
		user_id: 4,
		location_id: 2,
	},
	{
		brand: "Toyota",
		model: "Camery",
		color: "black",
		user_id: 5,
		location_id: 2,
	},

	{
		brand: "Ford",
		model: "Mustang",
		color: "Blue",
		user_id: 6,
		location_id: 2,
	},

	{
		brand: "Lexus",
		model: "RX",
		color: "silver",
		user_id: 7,
		location_id: 2,
	},

	{
		brand: "Tesla",
		model: "Model s",
		color: "Red",
		user_id: 8,
		location_id: 3,
	},
	{
		brand: "Subaru",
		model: "Outback",
		color: "baby blue",
		user_id: 9,
		location_id: 3,
	},

	{
		brand: "Fiat",
		model: "500x",
		color: "Black",
		user_id: 10,
		location_id: 3,
	},

	{
		brand: "Bently",
		model: "Wraith",
		color: "black",
		user_id: 11,
		location_id: 4,
	},

	{
		brand: "Dodge",
		model: "Challanger",
		color: "red",
		user_id: 12,
		location_id: 4,
	},
];

const carsData = () => Car.bulkCreate(cars);

module.exports = carsData;
