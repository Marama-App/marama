exports.up = (knex, Promise) => {
  return knex.schema.hasTable('types_jobs_junction').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('types_jobs_junction', (table) => {
        table.increments('id').primary()
        table.integer('jobs_id').references('jobs.id')
        table.integer('types_id').references('interest_types.id')
      })
    }
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('types_jobs_junction')
}
