const router = require("express").Router();
const axios = require("axios");
const { Location } = require("../../models");

// GET /api/locations
router.get("/", (req, res) => {
	// TODO: add function to display all locations here and include all foreign properties
	res.status(200).json({ method: req.method, endpoint: "/api/locations" });
});

// GET /api/locations/:id
router.get("/:id", (req, res) => {
	// TODO: add function to fetch individual locations here using id
	res
		.status(200)
		.json({ method: req.method, endpoint: `/api/locations/${req.params.id}` });
});

// POST /api/locations
router.post("/", (req, res) => {
	// TODO: Extract the lat and lng from the req.body to make the position api call
	const { latitude, longitude } = req.body;
	const positionUrl = `http://api.positionstack.com/v1/reverse?access_key=${process.env.POSITION_API_KEY}&query=${latitude},${longitude}&limit=1`;

	// TODO: Using axios make an api call to positionstack
	axios
		.get(positionUrl)
		.then((positionstackResponse) => {
			if (positionstackResponse) {
				let locationData = positionstackResponse.data.data[0]; // The first index

				// TODO: Store the response data formatted_address, latitude and longitude in our locations table
				const parkingSpot = {
					latitude: locationData.latitude,
					longitude: locationData.longitude,
					address: locationData.label,
					user_id: 3, // TODO: change this to be dynamic user id from session
				};
				Location.create(parkingSpot);

				// TODO: Send back json response to conditionally refresh the homepage to fetch the newly added location
				res.status(200).json({
					error: false,
					message: "Fetched location data from position stack api",
				});
			} else {
				res.status(400).json({
					error: true,
					message: "Unable to fetch location data from position stack api",
				});
			}
		})
		.catch((err) => {});
});

// PUT /api/locations/:id
router.put("/:id", (req, res) => {
	// TODO: add update location function here

	res.status(200).json({
		method: req.method,
		endpoint: `/api/locations/${req.params.id}`,
		...req.body,
	});
});

// DELETE /api/locations/:id
router.delete("/:id", (req, res) => {
	// TODO: add update location function here

	res.status(200).json({
		method: req.method,
		endpoint: `/api/locations/${req.params.id}`,
	});
});

module.exports = router;
