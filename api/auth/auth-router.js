const router = require('express').Router()
const Users = require('./auth-model')
const bcrypt = require('bcryptjs');
const db = require('../../data/db-config')
const jwt = require('jsonwebtoken')
const SECRET = "shh";


router.post("/register", (req, res, next) => {
bcrypt.hash(req.body.password, 8)
.then (hashedPassword=> {
return db('users').insert({
     username: req.body.username,
     password: hashedPassword,
     email:req.body.email
  })
  .returning(["username",  "email"])
  .then(users => {
     res.json(users[0])
  })
  .catch(err => next(err))
  })
})


  router.post('/login', (req, res, next) => {
    db('users')
    .where({email: req.body.email})
        .first()
        .then(user => {
           if(!user){
              res.status(401).json({
                 error: "No user by that email"
              })
           }else{
              return bcrypt
              .compare(req.body.password, user.password)
              .then(isAuthenticated => {
                 if(!isAuthenticated){
                    res.status(401).json({
                       error: "Unauthorized Access!"
                    })
                 }else{
                  return jwt.sign(user, SECRET, (error, token) => {
                    res.status(200).json({ message: `Welcome ${user.username}!`})
                 })
                }
              })
           }
        })
   
  });


module.exports = router;