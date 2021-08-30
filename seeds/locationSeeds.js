const { Location } = require("../models");

const locations = [
	{
		address: "205 Crestwood Cir, Centerville, GA 31028",
		latitude: 32.636410,
		longitude: -83.670776,
		user_id: 2,
		numOpenSpace: 1,
	},
	{
		address: "15 Westfield Ave, Roosevelt NY 11520",
		latitude: 40.670930,
		longitude: -73.582710,
		user_id: 2,
		numOpenSpace: 4,
	},

	{
		address: "55 Lexington Ave, New York, NY 10010",
		latitude: 40.740429,
		longitude: -73.983910,
		user_id: 3,
		numOpenSpace: 3,
	},

	{
		address: "290 15th St, West Babylon, NY 11704",
		latitude: 40.724320,
		longitude: -73.375550,
		user_id: 1,
		numOpenSpace: 5,
	},
];

const locationData = () => Location.bulkCreate(locations);

module.exports = locationData;
