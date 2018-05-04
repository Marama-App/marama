exports.up = (knex, Promise) => {
  return knex.schema.hasTable('pasifika_grants').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('pasifika_grants', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('link')
<<<<<<< HEAD
        table.text('description')
=======
        table.string('description')
>>>>>>> a24d88c6fd7693a6823a8d96cf2ed3aed5eeee94
      })
    }
  })
}

exports.down = (knex, Promise) => {
<<<<<<< HEAD
  return knex.schema.dropTable('pasifika_grants')
=======
  return knex.schema.dropTableIfExists('pasifika_grants')
>>>>>>> a24d88c6fd7693a6823a8d96cf2ed3aed5eeee94
}
