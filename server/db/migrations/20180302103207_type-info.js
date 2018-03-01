exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('type-info', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('type-info')
}
