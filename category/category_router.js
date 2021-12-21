const router = require('express').Router()
const Category = require('./category_model')



router.get('/', (req, res) => {
    Category.find()
    .then(category => {
      res.json(category);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get all categories' });
    });
  });



  module.exports = router 

  