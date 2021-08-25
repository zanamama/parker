const express = require("express");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const routes = require("./controllers");

const app = express();
const PORT = process.env.PORT || 4000;

// Static folder setup
app.use(express.static(__dirname + "/public"));

// Handlebars setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Routes setup
app.use(routes);

// Sequelize setup
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, (err) => {
		if (err) {
			console.log("Whoops, an error occured.", err);
		} else {
			console.log(`Got it! Listening on PORT ${PORT}`);
		}
	});
});
