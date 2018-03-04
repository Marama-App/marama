
exports.seed = function (knex, Promise) {
  return knex('interest_types').del()
    .then(function () {
      return knex('interest_types').insert([
        {id: 1, name: 'Animation', description: 'Design virtual worlds and breathe life into game characters with design and animation.'},
        {id: 2, name: 'Coding', description: 'Build the structure which makes each part of your favourite game work.'},
        {id: 3, name: 'Sound', description: 'Create conversations between game characters, kick-ass sound effects, and more.'}
      ])
    })
}
