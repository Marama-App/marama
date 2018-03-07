exports.up = (knex, Promise) => {
  return knex.schema.hasTable('iwi_grants').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('iwi_grants', (table) => {
        table.increments('id').primary()
        table.string('iwi')
        table.string('link')
        table.text('description')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('iwi_grants')
}
