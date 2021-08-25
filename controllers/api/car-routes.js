const router = require("express").Router();

// GET /api/cars
router.get("/", (req, res) => {
	res.status(200).json({ method: req.method, endpoint: "/api/cars" });
});

// GET /api/cars/:id
router.get("/:id", (req, res) => {
	res
		.status(200)
		.json({ method: req.method, endpoint: `/api/cars/${req.params.id}` });
});

// POST /api/cars
router.post("/", (req, res) => {
	res.status(200).json({
		method: req.method,
		endpoint: `/api/cars`,
		...req.body,
	});
});

module.exports = router;
