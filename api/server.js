require("dotenv").config();
require("colors");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session")

const server = express();

const authRouter = require('../api/auth/auth-router');
const usersRouter = require('../users/users_router.js')
const categoryRouter = require('../category/category_router')
const itemsRouter = require('../items/items_router')

server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use(session({
//   resave:false, 
//   saveUninitialized: false, 
//   secret: process.env.JWT_SECRET, 
// }))

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
server.use("/api/items", itemsRouter)
server.use("/api/category", categoryRouter)


server.get("/api", (req, res) => {
  res.json({ message: "Your API is up and running" });
});

module.exports = server;