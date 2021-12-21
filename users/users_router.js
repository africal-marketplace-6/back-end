const router = require('express').Router()
const Users = require('./users_model')

//const authenticate = require('../auth/authenticate-middleware')


router.get('/', (req, res) => {
    Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get all users' });
    });
  });


  module.exports = router 