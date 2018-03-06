exports.up = (knex, Promise) => {
  return knex.schema.createTable('interests', table => {
    table.increments('id').primary()
    table.string('interests')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('interests')
}
