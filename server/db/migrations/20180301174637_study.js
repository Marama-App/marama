exports.up = (knex, Promise) => {
  return knex.schema.hasTable('study').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('study', (table) => {
        table.increments('id').primary()
        table.string('course')
        table.string('provider')
        table.string('link')
        table.float('domestic_price')
        table.float('international_price')
        table.float('duration')
        table.integer('level')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('study')
}
