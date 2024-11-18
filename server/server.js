const express = require("express");
const jsonServer = require("json-server");
const cors = require("cors");
const server = express();

server.use(cors());
server.use("/", jsonServer.router("db.json"));

server.listen(3001);