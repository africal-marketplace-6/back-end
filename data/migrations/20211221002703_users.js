exports.up = async (knex) => {
    await knex.schema
      .createTable('users', (tbl) => {
        tbl.increments('user_id')
        tbl.string('username', 200).notNullable().unique()
        tbl.string('password', 200).notNullable()
        tbl.string("email").notNull()
      })
      .createTable('category', tbl =>{
        tbl.increments('category_id');
        tbl.string('category_name',100)
        .notNullable()
      })
      .createTable('items', tbl =>{
        tbl.increments('item_id');
        tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        tbl.integer('category_id')
        .unsigned()
        .notNullable()
        .references('category_id')
        .inTable('category')
        tbl.string('location',100)
        tbl.string('item', 100)
        .notNullable()
        tbl.text('description', 200)
        tbl.integer('price')
  })
}
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('category')
      .dropTableIfExists('items')
      .dropTableIfExists('users')
  };