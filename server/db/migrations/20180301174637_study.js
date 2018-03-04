exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('study', table => {
    table.increments('id').primary()
    table.string('course')
    table.string('provider')
    table.string('link')
    table.integer('domestic_price')
    table.integer('international_price')
    table.integer('duration')
    table.integer('level')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('study')
}
