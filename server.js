const express = require("express");
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 4000;

// Static folder setup
app.use(express.static(__dirname + "/public"));

// TODO: session setup
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUnitialized: true,
  store: new SequelizeStorelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// generic fxn
app.get("/", (req, res) => {
	res.json("Welcome to Parker App!");
});

app.listen(PORT, (err) => {
	if (err) {
		console.log("Whoops, an error occured.", err);
	} else {
		console.log(`Got it! Listening on PORT ${PORT}`);
	}
});
