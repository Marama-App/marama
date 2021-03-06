exports.seed = (knex, Promise) => {
  return knex('types_study_junction').insert([
    // GAMING
    {id: 1, study_id: 1, types_id: 1},
    {id: 2, study_id: 2, types_id: 1},
    {id: 3, study_id: 3, types_id: 1},
    {id: 4, study_id: 4, types_id: 1},
    {id: 5, study_id: 5, types_id: 2},
    {id: 6, study_id: 6, types_id: 2},
    {id: 7, study_id: 7, types_id: 2},
    {id: 8, study_id: 8, types_id: 3},
    {id: 9, study_id: 9, types_id: 3},
    {id: 10, study_id: 10, types_id: 3},
    // MUSIC
    {id: 11, study_id: 11, types_id: 4},
    {id: 12, study_id: 12, types_id: 4},
    {id: 13, study_id: 13, types_id: 4},
    {id: 14, study_id: 14, types_id: 5},
    {id: 15, study_id: 15, types_id: 5},
    {id: 16, study_id: 16, types_id: 5},
    {id: 17, study_id: 17, types_id: 6},
    {id: 18, study_id: 18, types_id: 6},
    {id: 19, study_id: 19, types_id: 6},
    // SPORT
    { id: 20, study_id: 20, types_id: 7 },
    { id: 21, study_id: 21, types_id: 7 },
    { id: 22, study_id: 22, types_id: 7 },
    { id: 23, study_id: 23, types_id: 8 },
    { id: 24, study_id: 24, types_id: 8 },
    { id: 25, study_id: 25, types_id: 8 },
    { id: 26, study_id: 26, types_id: 9 },
    { id: 27, study_id: 27, types_id: 9 },
    { id: 28, study_id: 28, types_id: 9 },
    // GADGETS
    { id: 29, study_id: 29, types_id: 10 },
    { id: 31, study_id: 30, types_id: 10 },
    { id: 32, study_id: 31, types_id: 10 },
    { id: 33, study_id: 32, types_id: 11 },
    { id: 34, study_id: 33, types_id: 11 },
    { id: 35, study_id: 34, types_id: 11 },
    { id: 36, study_id: 35, types_id: 12 },
    { id: 37, study_id: 36, types_id: 12 },
    { id: 38, study_id: 37, types_id: 12 },
    // DANCING
    { id: 39, study_id: 38, types_id: 13 },
    { id: 40, study_id: 39, types_id: 13 },
    { id: 41, study_id: 40, types_id: 13 },
    { id: 42, study_id: 41, types_id: 14 },
    { id: 43, study_id: 42, types_id: 14 },
    { id: 44, study_id: 43, types_id: 14 },
    { id: 45, study_id: 44, types_id: 15 },
    { id: 46, study_id: 45, types_id: 15 },
    { id: 47, study_id: 46, types_id: 15 },
    // FOOD
    { id: 48, study_id: 47, types_id: 16 },
    { id: 49, study_id: 48, types_id: 16 },
    { id: 50, study_id: 49, types_id: 16 },
    { id: 51, study_id: 50, types_id: 17 },
    { id: 52, study_id: 51, types_id: 17 },
    { id: 53, study_id: 52, types_id: 17 },
    { id: 54, study_id: 53, types_id: 18 },
    { id: 55, study_id: 54, types_id: 18 },
    { id: 56, study_id: 55, types_id: 18 }
  ])
}
