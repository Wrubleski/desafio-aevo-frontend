const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("Server is up and running.");
});
