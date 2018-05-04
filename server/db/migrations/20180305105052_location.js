exports.up = (knex, Promise) => {
  return knex.schema.hasTable('location').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('location', (table) => {
        table.increments('id').primary()
        table.string('location')
      })
    }
  })
}

exports.down = (knex, Promise) => {
<<<<<<< HEAD
  return knex.schema.dropTable('location')
=======
  return knex.schema.dropTableIfExists('location')
>>>>>>> a24d88c6fd7693a6823a8d96cf2ed3aed5eeee94
}
