exports.up = (knex, Promise) => {
  return knex.schema.hasTable('interest_types').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('interest_types', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.text('description')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('interest_types')
}
