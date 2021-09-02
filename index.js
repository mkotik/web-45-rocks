const express = require("express");
require("dotenv").config(); //this allows to stash "artificial" env variables in a file
const cors = require("cors");
const path = require("path");

const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, "client/build")));

server.get("/api", (req, res) => {
  res.json({ message: "Web 45 is awesome!" });
});

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
