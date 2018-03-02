
exports.seed = function (knex, Promise) {
  return knex('interest_types').del()
    .then(function () {
      return knex('interest_types').insert([
        {id: 1, name: 'animation', description: 'Learn to animate'},
        {id: 2, name: 'coding', description: 'Learn to code'},
        {id: 3, name: 'sound', description: 'Learn to sound'}
      ])
    })
}
