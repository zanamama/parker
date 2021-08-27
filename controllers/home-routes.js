const router = require("express").Router();

router.get("/", (req, res) => {
	// res.json("Welcome to home routes page");

	// TODO: Render the home.handlebars page here
	res.render("home");
});

router.get("/menu", (req, res) => {
	res.render("menu");
});

router.get("/login", (req, res) => {
	res.render("login");
});

router.get("/register", (req, res) => {
	res.render("register");
});

router.get("/profile", (req, res) => {
	res.render("profile");
});

router.get("/parking", (req, res) => {
	res.render("parking");
});

router.get("/how", (req, res) => {
	res.render("how");
});

router.get("/privacy", (req, res) => {
	res.render("privacy");
});

router.get("/developers", (req, res) => {
	res.render("developers");
});

module.exports = router;
