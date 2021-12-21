const db = require('../../data/db-config')

module.exports = {
    add,
    findBy,
    findById,
    find
}
function find() {
  return db('users').select('id','username')
}
async function add(user) {
    const [user_id] = await db('users').insert(user);
    return findById(user_id);
  }

  function findBy(filter) {
    return db('users').where(filter);
  }

  function findById(user_id) {
    return db('users')
      .where({ user_id })
      .first();
  }