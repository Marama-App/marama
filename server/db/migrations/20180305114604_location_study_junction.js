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
  return knex.schema.dropTable('location_study_junction')
}
