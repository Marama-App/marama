exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('types_study_junction', table => {
    table.increments('id').primary()
    table.integer('study_id').references('study.id')
    table.integer('types_id').references('interest_types.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('types_study_junction')
}
