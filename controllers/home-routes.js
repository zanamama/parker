const router = require("express").Router();

router.get("/", (req, res) => {
	res.json("Welcome to home page");
	res.render("/home");
});

module.exports = router;
