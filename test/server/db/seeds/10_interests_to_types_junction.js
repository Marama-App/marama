exports.seed = (knex, Promise) => {
  return knex('interests_to_types_junction').insert([
    {id: 1, interest_id: 1, type_id: 1},
    {id: 2, interest_id: 1, type_id: 2},
    {id: 3, interest_id: 1, type_id: 3},
    {id: 4, interest_id: 2, type_id: 4},
    {id: 5, interest_id: 2, type_id: 5},
    {id: 6, interest_id: 2, type_id: 6},
    // Needing Data in future, for following Interest Types
    {id: 7, interest_id: 3, type_id: 1},
    {id: 8, interest_id: 3, type_id: 1},
    {id: 9, interest_id: 3, type_id: 1},
    {id: 10, interest_id: 4, type_id: 1},
    {id: 11, interest_id: 4, type_id: 1},
    {id: 12, interest_id: 4, type_id: 1},
    {id: 13, interest_id: 5, type_id: 1},
    {id: 14, interest_id: 5, type_id: 1},
    {id: 15, interest_id: 5, type_id: 1},
    {id: 16, interest_id: 6, type_id: 1},
    {id: 17, interest_id: 6, type_id: 1},
    {id: 18, interest_id: 6, type_id: 1}
  ])
}
