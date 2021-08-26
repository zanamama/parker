require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const path = require("path");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 4000;

// URL-encoded & JSON bodies setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder setup
// TODO: Remeber to uncomment the express.static line below
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "public")));

// Handlebars setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// // TODO: const hbs = exphbs.create({ helpers });

// const exphbs = require("express-handlebars");
// const hbs = exphbs.create({});
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

// Routes setup
app.use(routes);

// Session setup
const sess = {
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
	cookie: {},
};
app.use(session(sess));

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
