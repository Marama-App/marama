exports.up = (knex, Promise) => {
  return knex.schema.hasTable('users').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('companyname')
        table.string('email')
        table.string('username')
        table.string('hash')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
