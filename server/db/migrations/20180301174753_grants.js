exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('grants', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.string('link')
    table.text('conditions')
    table.integer('amount')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('grants')
}
