const express = require("express");
require("dotenv").config(); //this allows to stash "artificial" env variables in a file

const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h1>web 45 ROCKS</h1>");
});

server.get("/api", (req, res) => {
  res.json({ message: "Web 45 is awesome!" });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
