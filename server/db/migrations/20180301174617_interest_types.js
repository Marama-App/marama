exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('interest_types', table => {
    table.increments('id').primary()
    table.string('name')
    table.text('description')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('interest_types')
}
