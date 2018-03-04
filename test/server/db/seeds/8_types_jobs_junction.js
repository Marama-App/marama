exports.seed = function (knex, Promise) {
  return knex('types_jobs_junction').del()
    .then(function () {
      return knex('types_jobs_junction').insert([
        {id: 1, jobs_id: 1, types_id: 1},
        {id: 2, jobs_id: 1, types_id: 2},
        {id: 3, jobs_id: 1, types_id: 3},
        {id: 4, jobs_id: 2, types_id: 1},
        {id: 5, jobs_id: 2, types_id: 2},
        {id: 6, jobs_id: 3, types_id: 1},
        {id: 7, jobs_id: 3, types_id: 2}
      ])
    })
}
