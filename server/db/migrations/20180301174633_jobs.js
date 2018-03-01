exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('jobs', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('link')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('jobs')
}
