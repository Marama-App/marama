exports.up = (knex, Promise) => {
  return knex.schema.hasTable('grants').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('grants', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.text('description')
        table.string('grant_link')
        table.text('conditions')
        table.float('amount')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('grants')
}
