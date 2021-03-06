const router = require('express').Router()
const Users = require('./users_model')

const auth = require('../api/auth/auth-middleware')


router.get('/', (req, res) => {
    Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get all users' });
    });
  });

  router.get('/:id', auth, (req,res)=>{
    Users.findById(req.params.id)
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message: 'failed to get user'})
    })
})
router.get('/:id/items',(req, res) => {
    Users.findItemsByUserId(req.params.id, 'user_id')
        .then(items => {
            res.status(200).json(items);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'failed to get users items'})
        })
})


  module.exports = router 