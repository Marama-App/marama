exports.up = (knex, Promise) => {
  return knex.schema.hasTable('grants_study_junction').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('grants_study_junction', (table) => {
        table.increments('id').primary()
        table.integer('grants_id').references('grants.id')
        table.integer('study_id').references('study.id')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('grants_study_junction')
}
