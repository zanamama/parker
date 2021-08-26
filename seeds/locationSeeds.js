const { Location } = require("../models");

const locations = [
	{
		address: "212 crestwood drive Valley stream, NY 11278",
		numOpenSpace: 1,
	},
	{
		address: "119 Golf Street Freeport, NY 11520",
		numOpenSpace: 4,
	},

	{
		address: "8424 N. Paris Hill Ave. Bridgewater, NJ 08807",
		numOpenSpace: 3,
	},

	{
		address: "7218 St Louis Street West Babylon, NY 11704",
		numOpenSpace: 5,
	},
];

const locationData = () => Location.bulkCreate(locations);

module.exports = locationData;
