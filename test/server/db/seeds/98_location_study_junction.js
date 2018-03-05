exports.seed = function (knex, Promise) {
  return knex('location_study_junction').del()
    .then(function () {
      return knex('location_study_junction').insert([
        // GAMING
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
        { id: 13, study_id: 10, location_id: 1 },
        // MUSIC
        { id: 14, study_id: 11, location_id: 14 },
        { id: 15, study_id: 12, location_id: 1 },
        { id: 16, study_id: 13, location_id: 1 },
        { id: 17, study_id: 14, location_id: 1 },
        { id: 18, study_id: 15, location_id: 7 },
        { id: 19, study_id: 16, location_id: 1 },
        { id: 20, study_id: 17, location_id: 1 },
        { id: 21, study_id: 18, location_id: 1 },
        { id: 22, study_id: 19, location_id: 5 }
      ])
    })
}
