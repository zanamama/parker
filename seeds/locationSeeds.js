const { Location } = require("../models");

const locations = [
	{
		address: "212 crestwood drive Valley stream, NY 11278",
		latitude: 40.982937897,
		longitude: -70.6238678,
		user_id: 2,
		numOpenSpace: 1,
	},
	{
		address: "119 Golf Street Freeport, NY 11520",
		latitude: 40.282937897,
		longitude: -70.5238678,
		user_id: 2,
		numOpenSpace: 4,
	},

	{
		address: "8424 N. Paris Hill Ave. Bridgewater, NJ 08807",
		latitude: 40.282937897,
		longitude: -70.7238678,
		user_id: 3,
		numOpenSpace: 3,
	},

	{
		address: "7218 St Louis Street West Babylon, NY 11704",
		latitude: 40.882937897,
		longitude: -70.1238678,
		user_id: 1,
		numOpenSpace: 5,
	},
];

const locationData = () => Location.bulkCreate(locations);

module.exports = locationData;
