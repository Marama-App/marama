exports.up = (knex, Promise) => {
  return knex.schema.hasTable('interests_to_types_junction').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('interests_to_types_junction', (table) => {
        table.increments('id').primary()
        table.integer('interest_id').references('interests.id')
        table.integer('type_id').references('interest_types.id')
      })
    }
  })
}

exports.down = (knex, Promise) => {
<<<<<<< HEAD
  return knex.schema.dropTable('interests_to_types_junction')
=======
  return knex.schema.dropTableIfExists('interests_to_types_junction')
>>>>>>> a24d88c6fd7693a6823a8d96cf2ed3aed5eeee94
}
