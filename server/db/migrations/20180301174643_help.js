exports.up = (knex, Promise) => {
  return knex.schema.hasTable('help').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('help', (table) => {
        table.increments('id').primary()
        table.string('help_name')
        table.string('help_description')
        table.string('help_link')
        table.integer('types_id').references('interest_types.id')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('help')
}
