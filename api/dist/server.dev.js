"use strict";

require("dotenv").config();

require("colors");

var express = require("express");

var cors = require("cors");

var helmet = require("helmet");

var session = require("express-session");

var server = express();

var authRouter = require('../api/auth/auth-router');

var usersRouter = require('../users/users_router.js');

var categoryRouter = require('../category/category_router');

var itemsRouter = require('../items/items_router');

server.use(helmet());
server.use(cors());
server.use(express.json()); // server.use(session({
//   resave:false, 
//   saveUninitialized: false, 
//   secret: process.env.JWT_SECRET, 
// }))

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use("/api/items", itemsRouter);
server.use("/api/category", categoryRouter);
server.get("/api", function (req, res) {
  res.json({
    message: "Your API is up and running"
  });
});
module.exports = server;