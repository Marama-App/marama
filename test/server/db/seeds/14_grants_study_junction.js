exports.seed = (knex, Promise) => {
  return knex('grants_study_junction').insert([
    // Gaming Animation Courses (Study_Id)
    {id: 1, study_id: 1, grants_id: 1},
    {id: 2, study_id: 1, grants_id: 2},
    {id: 3, study_id: 2, grants_id: 1},
    {id: 4, study_id: 2, grants_id: 3},
    {id: 5, study_id: 2, grants_id: 4},
    {id: 6, study_id: 2, grants_id: 5},
    {id: 7, study_id: 2, grants_id: 6},
    {id: 8, study_id: 2, grants_id: 7},
    {id: 9, study_id: 2, grants_id: 2},
    {id: 10, study_id: 2, grants_id: 8},
    {id: 11, study_id: 3, grants_id: 1},
    {id: 12, study_id: 3, grants_id: 3},
    {id: 13, study_id: 3, grants_id: 4},
    {id: 14, study_id: 3, grants_id: 5},
    {id: 15, study_id: 3, grants_id: 6},
    {id: 16, study_id: 3, grants_id: 7},
    {id: 17, study_id: 3, grants_id: 2},
    {id: 18, study_id: 3, grants_id: 8},
    {id: 19, study_id: 4, grants_id: 9},
    {id: 20, study_id: 4, grants_id: 10},
    {id: 21, study_id: 4, grants_id: 2},
    // Gaming and Coding Courses (Study_Id)
    {id: 22, study_id: 5, grants_id: 3},
    {id: 23, study_id: 5, grants_id: 1},
    {id: 24, study_id: 5, grants_id: 4},
    {id: 25, study_id: 5, grants_id: 5},
    {id: 26, study_id: 5, grants_id: 6},
    {id: 27, study_id: 5, grants_id: 7},
    {id: 28, study_id: 5, grants_id: 2},
    {id: 29, study_id: 5, grants_id: 11},
    {id: 30, study_id: 5, grants_id: 12},
    {id: 31, study_id: 5, grants_id: 13},
    {id: 32, study_id: 5, grants_id: 14},
    {id: 33, study_id: 5, grants_id: 15},
    {id: 34, study_id: 5, grants_id: 8},
    {id: 35, study_id: 6, grants_id: 3},
    {id: 36, study_id: 6, grants_id: 1},
    {id: 37, study_id: 6, grants_id: 4},
    {id: 38, study_id: 6, grants_id: 5},
    {id: 39, study_id: 6, grants_id: 6},
    {id: 40, study_id: 6, grants_id: 7},
    {id: 41, study_id: 6, grants_id: 2},
    {id: 42, study_id: 6, grants_id: 8},
    {id: 43, study_id: 7, grants_id: 16},
    {id: 44, study_id: 7, grants_id: 17},
    // Gaming Sound Courses (Study_Id)
    {id: 45, study_id: 8, grants_id: 23},
    {id: 46, study_id: 8, grants_id: 19},
    {id: 47, study_id: 8, grants_id: 20},
    {id: 48, study_id: 8, grants_id: 21},
    {id: 49, study_id: 9, grants_id: 22},
    {id: 50, study_id: 9, grants_id: 23},
    // Music Musical Instrument Courses
    {id: 51, study_id: 11, grants_id: 20},
    {id: 52, study_id: 12, grants_id: 20},
    {id: 53, study_id: 13, grants_id: 20},
    // Music Singing/Songwriting Courses
    {id: 54, study_id: 14, grants_id: 21},
    {id: 55, study_id: 14, grants_id: 22},
    {id: 56, study_id: 15, grants_id: 21},
    {id: 57, study_id: 15, grants_id: 22},
    {id: 58, study_id: 16, grants_id: 21},
    {id: 59, study_id: 16, grants_id: 22},
    // Music DJ/Sound Recording Courses
    {id: 60, study_id: 17, grants_id: 18},
    {id: 61, study_id: 18, grants_id: 18},
    {id: 62, study_id: 19, grants_id: 18},
    // Food Dietition Courses
    {id: 63, study_id: 53, grants_id: 30},
    {id: 64, study_id: 53, grants_id: 31},
    {id: 65, study_id: 53, grants_id: 32},
    // Sports/Personal Training and Coaching
    {id: 66, study_id: 20, grants_id: 27},
    {id: 67, study_id: 21, grants_id: 27},
    {id: 68, study_id: 22, grants_id: 27},
    // Sports/Nutrition
    {id: 69, study_id: 23, grants_id: 27},
    {id: 70, study_id: 23, grants_id: 28},
    {id: 71, study_id: 23, grants_id: 29},
    {id: 72, study_id: 24, grants_id: 27},
    {id: 73, study_id: 24, grants_id: 29},
    {id: 74, study_id: 25, grants_id: 27},
    {id: 75, study_id: 25, grants_id: 29},
    // Sports/Sport Therapy
    {id: 76, study_id: 26, grants_id: 27},
    {id: 77, study_id: 27, grants_id: 27},
    {id: 78, study_id: 28, grants_id: 27}
    // Dancing/Theatre Courses
    // {id: 76, study_id: 38, grants_id: 00},
    // {id: 77, study_id: 39, grants_id: 00},
    // {id: 78, study_id: 40, grants_id: 00}
    // Dancing/Photography Courses
    // Dancing/Choreography Courses
  ])
}
