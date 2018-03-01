exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('interest_type_junction', table => {
    table.increments('id').primary()
    table.integer('study_id').references('study.id')
    table.integer('type_id').references('interest-type.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('interest_type_junction')
}
