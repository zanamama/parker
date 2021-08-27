const router = require("express").Router();

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
	// TODO: add create location function here
	const lat = req.body.lat;
	const lng = req.body.lng;
	const positionUrl = `http://api.positionstack.com/v1/reverse?access_key=${process.env.POSITION_API_KEY}&query=${lat},${lng}`;

	res.status(200).json({
		method: req.method,
		endpoint: `/api/locations`,
		...req.body,
		geoCoderResult: {
			country: "USA",
			state: "New York",
			city: "Manhattan",
			street: "234 54th Street, Manhattan, New York, 10001",
			zipCode: 10001,
		},
	});
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
