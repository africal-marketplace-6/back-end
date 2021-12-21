const router = require('express').Router()
const Items = require('./items_model')



router.get('/', (req, res) => {
    Items.find()
    .then(items => {
      res.json(items);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get all items' });
    });
  });



  module.exports = router 

  