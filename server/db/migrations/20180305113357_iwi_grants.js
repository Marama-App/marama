exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('iwi_grants', table => {
    table.increments('id').primary()
    table.string('iwi')
    table.string('link')
    table.string('description')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('iwi_grants')
}
