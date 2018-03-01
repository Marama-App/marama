exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('help', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.string('link')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('help')
}
