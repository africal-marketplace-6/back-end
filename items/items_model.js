const db = require('../data/db-config')

module.exports= {
    find,
    
}

function find(){
    return db('items').select("item", "price")
}

