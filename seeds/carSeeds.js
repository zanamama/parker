const { Car } = require("../models");

const cars = [
	{
		brand: "Honda",
		model: "Civic",
		color: "White",
		user_id: 1,
		location_id: 2,
	},

	{
		brand: "Nissan",
		model: "Maxima",
		color: "Black",
		user_id: 3,
		location_id: 1,
	},

	{
		brand: "BMW",
		model: "X1",
		color: "Red",
		user_id: 2,
		location_id: 4,
	},

	{
		brand: "Toyota",
		model: "Highlander",
		color: "gray",
		user_id: 4,
		location_id: 3,
	},
];

const carsData = () => Car.bulkCreate(cars);

module.exports = carsData;
