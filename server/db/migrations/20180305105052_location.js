exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('location', table => {
    table.increments('id').primary()
    table.string('location')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('location')
}
