exports.up = (knex, Promise) => {
  return knex.schema.createTableIfNotExists('type_job_junction', table => {
    table.increments('id').primary()
    table.integer('job_id').references('job.id')
    table.integer('type_id').references('interest_type.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('type_job_junction')
}
