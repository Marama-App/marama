exports.seed = function (knex, Promise) {
  return knex('grants_study_junction').del()
    .then(function () {
      return knex('grants_study_junction').insert([
        {id: 1, study_id: 1, grants_id: 1},
        {id: 2, study_id: 1, grants_id: 2},
        {id: 3, study_id: 1, grants_id: 3},
        {id: 4, study_id: 2, grants_id: 1},
        {id: 5, study_id: 2, grants_id: 2},
        {id: 6, study_id: 3, grants_id: 3}
      ])
    })
}
