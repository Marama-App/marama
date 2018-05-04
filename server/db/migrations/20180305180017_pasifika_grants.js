exports.up = (knex, Promise) => {
  return knex.schema.hasTable('pasifika_grants').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('pasifika_grants', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('link')
        table.string('description')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('pasifika_grants')
}
