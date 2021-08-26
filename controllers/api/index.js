const router = require("express").Router();
const carRoutes = require("./car-routes");
const userRoutes = require("./user-routes");
const locationRoutes = require("./location-routes");

router.use("/cars", carRoutes);
router.use("/users", userRoutes);
router.use("/locations", locationRoutes);

module.exports = router;
