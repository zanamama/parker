require("dotenv").config();
const path = require("path");
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 4000;

// URL-encoded & JSON bodies setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder setup
app.use(express.static(path.join(__dirname, "public")));

// Handlebars setup
// TODO: const hbs = exphbs.create({ helpers });
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Routes setup


// Session setup
const sess = {
  secret: process.env.SESSION_SECRET,
	cookie: { 
		path: '/',
		httpOnly: false,
	 	maxAge: 24*60*60*1000
	},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
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
