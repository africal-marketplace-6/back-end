const db = require('../data/db-config')

module.exports= {
    find,
    findBy,
    findById
}

function find(){
    return db('users').select("*")
};

function findBy(filter) {
    return db('users')
      .select('user_id', 'username')
      .where(filter);
  }

function findById(user_id) {
    return db('users')
      .select('user_id', 'username')
      .where({ user_id })
      .first();
  }