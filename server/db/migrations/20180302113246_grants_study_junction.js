exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('grants_study_junction', table => {
    table.increments('id').primary()
    table.integer('grants_id').references('grants.id')
    table.integer('study_id').references('study.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('grants_study_junction')
}
