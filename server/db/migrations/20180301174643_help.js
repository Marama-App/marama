exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('help', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.string('link')
    table.integer('types_id').references('interest_types.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('help')
}
