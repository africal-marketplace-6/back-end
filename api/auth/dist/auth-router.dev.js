"use strict";

var router = require('express').Router();

var Users = require('./auth-model');

var bcrypt = require('bcryptjs');

var db = require('../../data/db-config');

var jwt = require('jsonwebtoken');

router.post("/register", function (req, res, next) {
  bcrypt.hash(req.body.password, 8).then(function (hashedPassword) {
    return db('users').insert({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email
    }).returning(["username", "email"]).then(function (users) {
      res.json(users[0]);
    })["catch"](function (err) {
      return next(err);
    });
  });
}); //   router.post('/login', (req, res, next) => {
//     db('users')
//     .where({email: req.body.email})
//         .first()
//         .then(user => {
//            if(!user){
//               res.status(401).json({
//                  error: "No user by that email"
//               })
//            }else{
//               return bcrypt
//               .compare(req.body.password, user.password)
//               .then(isAuthenticated => {
//                  if(!isAuthenticated){
//                     res.status(401).json({
//                        error: "Unauthorized Access!"
//                     })
//                  }else{
//                   return jwt.sign(user, SECRET, (error, token) => {
//                     res.status(200).json({ message: `Welcome ${user.username}!`, token })
//                  })
//                 }
//               })
//            }
//         })
//   });

router.post('/login', function (req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;
  Users.findBy({
    email: email
  }).first().then(function (user) {
    if (user && bcrypt.compareSync(password, user.password)) {
      var token = generateToken(user);
      var user_id = user.user_id;
      res.status(200).json({
        message: "Welcome ".concat(user.username, "!"),
        token: token,
        user_id: user_id
      });
    } else {
      res.status(401).json({
        message: "Invalid Credentials"
      });
    }
  })["catch"](function (error) {
    res.status(500).json(error);
  });
});

function generateToken(user) {
  var payload = {
    username: user.username,
    user_id: user.user_id
  };
  var options = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, process.env.JWT_SECRET || 'bla', options);
}

module.exports = router;