const router = require("express").Router();
const { Location, User, Car } = require("../models");

// Show home page
router.get("/", async (req, res) => {
	// TODO: add function to display all locations here and include all foreign properties
	let showSpots = false;
	const locations = await Location.findAll();
	const locationsData = locations.map((spot) => spot.get({ plain: true }));
	if (locationsData.length) showSpots = true;
	res.render("home", { showSpots, locationsData });
});

// Show parked cars in a specific locations using the location id
router.get("/parking/:id", async (req, res) => {
	let showParkedCars = false;
	const location = await Location.findByPk(req.params.id, {
		include: [{ model: Car }],
	});
	const locationData = location.get({ plain: true });
	if (locationData) showParkedCars = true;
	res.render("parking", { showParkedCars, locationData });
});

// Work around to show navigation page
router.get("/menu", (req, res) => {
	res.render("menu");
});

/* TODO: Guys you can work here instead of the /api folder, 
I think it makes more sense here because we are using 
res.render to call our handlebars pages */

router.get("/login", (req, res) => {
	res.render("login");
});

router.get("/register", (req, res) => {
	res.render("register");
});

router.get("/profile", (req, res) => {
	res.render("profile");
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
