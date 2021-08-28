const router = require("express").Router();

// GET /api/users
router.get("/", (req, res) => {
	// TODO: add function to display all users here and include all foreign properties
	res.status(200).json({ method: req.method, endpoint: "/api/users" });
});

// GET /api/users/:id
router.get("/:id", (req, res) => {
	// TODO: add function to fetch individual users here using id
	res
		.status(200)
		.json({ method: req.method, endpoint: `/api/users/${req.params.id}` });
});

// POST /api/users
router.post("/", (req, res) => {
	// TODO: add create user function here

	res.status(200).json({
		method: req.method,
		endpoint: `/api/users`,
		...req.body,
	});
});


router.post("/login", (req, res) => {
	// TODO: add user login function here and redirect use to a handlebars page using res.render

	res.status(200).json({
		method: req.method,
		endpoint: `/api/users/login`,
		...req.body,
	});
});

// PUT /api/users/:id
router.put("/:id", (req, res) => {
	// TODO: add update user function here

	res.status(200).json({
		method: req.method,
		endpoint: `/api/users/${req.params.id}`,
		...req.body,
	});
});

// DELETE /api/users/:id
router.delete("/:id", (req, res) => {
	// TODO: add update user function here

	res.status(200).json({
		method: req.method,
		endpoint: `/api/users/${req.params.id}`,
	});
});

module.exports = router;
