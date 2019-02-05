const express = require("express");

const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/ZyppysDriver");

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(port, () => {
  console.log(5000);
});
