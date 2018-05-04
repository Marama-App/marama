exports.up = (knex, Promise) => {
  return knex.schema.hasTable('iwi_grants').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('iwi_grants', (table) => {
        table.increments('id').primary()
        table.string('iwi')
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
  return knex.schema.dropTable('iwi_grants')
=======
  return knex.schema.dropTableIfExists('iwi_grants')
>>>>>>> a24d88c6fd7693a6823a8d96cf2ed3aed5eeee94
}
