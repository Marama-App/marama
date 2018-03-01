exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('interests', table => {
    table.increments('id').primary()
    table.string('interests')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('interests')
}
