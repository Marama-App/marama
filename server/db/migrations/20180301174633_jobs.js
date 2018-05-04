exports.up = (knex, Promise) => {
  return knex.schema.hasTable('jobs').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('jobs', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('link')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableI('jobs')
}
