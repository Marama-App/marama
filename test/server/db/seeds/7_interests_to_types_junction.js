exports.seed = function (knex, Promise) {
  return knex('interests_to_types_junction').del()
    .then(function () {
      return knex('interests_to_types_junction').insert([
        {id: 1, interest_id: 1, type_id: 1},
        {id: 2, interest_id: 1, type_id: 2},
        {id: 3, interest_id: 1, type_id: 3},
        {id: 4, interest_id: 2, type_id: 2},
        {id: 5, interest_id: 2, type_id: 3},
        {id: 6, interest_id: 3, type_id: 2},
        {id: 7, interest_id: 5, type_id: 3},
        {id: 8, interest_id: 6, type_id: 2}
      ])
    })
}
