exports.up = (knex, Promise) => {
  return knex.schema.hasTable('location').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('location', (table) => {
        table.increments('id').primary()
        table.string('location')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('location')
}
