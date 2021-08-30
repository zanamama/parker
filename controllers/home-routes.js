const router = require("express").Router();
const { Location, User, Car } = require("../models");

// Show home page
router.get("/", async (req, res) => {
  // TODO: add function to display all locations here and include all foreign properties
  let showSpots = false;
  const locations = await Location.findAll();
  const locationsData = locations.map((spot) => spot.get({ plain: true }));
  if (locationsData.length) showSpots = true;
  console.log(req.session.user_id);
  res.render("home", {
    showSpots,
    locationsData,
    logged_in: req.session.logged_in,
  });
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

router.put("/parking/:id", async (req,res) => {
  try{
    const userData = await User.findByPk(req.session.user_id, {
      include: [{ model: Car }]
    });
    
    const car = userData.car;

    if (car.location_id == req.params.id) {
      res.status(500).json({ message: "already parked"})
      return;
    }
    const carData = await Car.update({ location_id: req.params.id }, {
       where: { id: car.id }
      });
    res.status(200).json({ message: "Car successfully parked!" });
  } catch(err) {
    res.status(400).json(err);
  }
});

router.put("/uparking/:id", async (req,res) => {
  try{
    const userData = await User.findByPk(req.session.user_id, {
      include: { model: Car }
    });
    console.log(userData)
    
    const car = userData.car;
    console.log(car.id);
    console.log(req.body.car_id);

    if (car.id != req.body.car_id) {
      res.status(400).json({ message: "you cannot remove other users cars!"})
      return;
    } 
    const carData = await Car.update({ location_id: null }, {
      where: { id: req.body.car_id }
     });
    res.status(200).json({ message: "Car successfully removed!" });
  } catch(err) {
    res.status(400).json(err);
  }
});

// Work around to show navigation page
router.get("/menu", (req, res) => {
  res.render("menu", { logged_in: req.session.logged_in });
});

/* TODO: Guys you can work here instead of the /api folder, 
I think it makes more sense here because we are using 
res.render to call our handlebars pages */

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });

    if (!user) {
      res.status(400).json({
        message: "Incorrect Email or Password",
      });
      return;
    }

    const validPassword = await user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({
        message: "Incorrect Email or Password",
      });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;

      res.status(200).json({ message: "Successfully Logged In" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log("catch");
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/profile", async (req, res) => {
  const userData = await User.findByPk(req.session.user_id, {
    include: { model: Car }
  });

  const user = userData.dataValues;
  const car = user.car.dataValues;

  res.render("profile", {user, car} );
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

router.get("/addCar", (req, res) => {
  res.render("addCar");
});

router.post("/addCar", async (req, res) => {
  try {
    console.log("1")
    req.body.user_id = req.session.user_id;
    console.log(req.body);
    const car = await Car.create(req.body);
    res.status(200).json(car);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
