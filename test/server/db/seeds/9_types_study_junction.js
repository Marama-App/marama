exports.seed = function (knex, Promise) {
  return knex('types_study_junction').del()
    .then(function () {
      return knex('types_study_junction').insert([
        {id: 1, study_id: 1, types_id: 1},
        {id: 2, study_id: 2, types_id: 1},
        {id: 3, study_id: 3, types_id: 1},
        {id: 4, study_id: 4, types_id: 1},
        {id: 5, study_id: 5, types_id: 2},
        {id: 6, study_id: 6, types_id: 2},
        {id: 7, study_id: 7, types_id: 2},
        {id: 8, study_id: 8, types_id: 3},
        {id: 9, study_id: 9, types_id: 3},
        {id: 10, study_id: 10, types_id: 3}
      ])
    })
}
