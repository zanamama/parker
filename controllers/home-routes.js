const router = require("express").Router();

router.get("/", (req, res) => {
	// res.json("Welcome to home routes page");

	// TODO: Render the home.handlebars page here
	res.render("home");
});

module.exports = router;
