exports.up = (knex, Promise) => {
  return knex.schema.hasTable('types_study_junction').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('types_study_junction', (table) => {
        table.increments('id').primary()
        table.integer('study_id').references('study.id')
        table.integer('types_id').references('interest_types.id')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('types_study_junction')
}
