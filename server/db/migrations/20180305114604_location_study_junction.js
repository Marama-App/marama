exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('location_study_junction', table => {
    table.increments('id').primary()
    table.integer('location_id').references('location.id')
    table.integer('study_id').references('study.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('location_study_junction')
}
