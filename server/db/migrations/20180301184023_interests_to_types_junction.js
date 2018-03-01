exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('interests_to_types_junction', table => {
    table.increments('id').primary()
    table.integer('interest_id').references('interests.id')
    table.integer('type_id').references('interest_types.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('interests_to_types_junction')
}
