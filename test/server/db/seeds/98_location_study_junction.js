exports.seed = function (knex, Promise) {
  return knex('location_study_junction').del()
    .then(function () {
      return knex('location_study_junction').insert([
        { id: 1, study_id: 1, location_id: 1 },
        { id: 2, study_id: 1, location_id: 7 },
        { id: 3, study_id: 1, location_id: 8 },
        { id: 4, study_id: 2, location_id: 1 },
        { id: 5, study_id: 3, location_id: 1 },
        { id: 6, study_id: 4, location_id: 1 },
        { id: 7, study_id: 5, location_id: 1 },
        { id: 8, study_id: 6, location_id: 1 },
        { id: 9, study_id: 7, location_id: 1 },
        { id: 10, study_id: 7, location_id: 7 },
        { id: 11, study_id: 8, location_id: 1 },
        { id: 12, study_id: 9, location_id: 7 },
        { id: 13, study_id: 10, location_id: 1 }
      ])
    })
}
