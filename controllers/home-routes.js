const router = require("express").Router();

router.get("/", (req, res) => {
	// res.json("Welcome to home routes page");

	// TODO: Render the home.handlebars page here
	res.render("home");
});

router.get("/login", (req, res) => {
	res.render("login");
});

router.get("/profile", (req, res) => {
	res.render("profile");
});

router.get("/parking", (req, res) => {
	res.render("parking");
});

module.exports = router;
