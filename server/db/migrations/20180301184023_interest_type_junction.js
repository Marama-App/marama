exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('interest_type_junction', table => {
    table.increments('id').primary()
    table.integer('interest_id').references('interests.id')
    table.integer('type_id').references('interest_type.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('interest_type_junction')
}
