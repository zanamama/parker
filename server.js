const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

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
