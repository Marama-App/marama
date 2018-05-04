exports.up = (knex, Promise) => {
  return knex.schema.hasTable('location_study_junction').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('location_study_junction', (table) => {
        table.increments('id').primary()
        table.integer('location_id').references('location.id')
        table.integer('study_id').references('study.id')
      })
    }
  })
}

exports.down = (knex, Promise) => {
<<<<<<< HEAD
  return knex.schema.dropTable('location_study_junction')
=======
  return knex.schema.dropTableIfExists('location_study_junction')
>>>>>>> a24d88c6fd7693a6823a8d96cf2ed3aed5eeee94
}
