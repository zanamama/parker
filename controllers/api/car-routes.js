const router = require("express").Router();

// GET /api/cars
router.get("/", (req, res) => {
	// TODO: add function to display all cars here and include all foreign properties
	res.status(200).json({ method: req.method, endpoint: "/api/cars" });
});

// GET /api/cars/:id
router.get("/:id", (req, res) => {
	// TODO: add fetching of individual cars function here using id
	res
		.status(200)
		.json({ method: req.method, endpoint: `/api/cars/${req.params.id}` });
});

// POST /api/cars
router.post("/", (req, res) => {
	// TODO: add create car function here


	res.status(200).json({
		method: req.method,
		endpoint: `/api/cars`,
		...req.body,
	});
});

// PUT /api/cars/:id
router.put("/:id", (req, res) => {
	// TODO: add update car function here
	Car.update(
		{ location_id: req.params.id },
		{
			where: {
				id: req.session.user.car_id,
			},
		}
	);

	res.status(200).json({
		method: req.method,
		endpoint: `/api/cars/${req.params.id}`,
		...req.body,
	});

	res.render("parking");
});

// DELETE /api/cars/:id
router.delete("/:id", (req, res) => {
	// TODO: add update car function here

	res.status(200).json({
		method: req.method,
		endpoint: `/api/cars/${req.params.id}`,
	});
});

module.exports = router;
