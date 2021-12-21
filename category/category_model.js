const db = require('../data/db-config')

module.exports= {
    find,
    
}

function find(){
    return db('category').select("category_name")
}

