
exports.seed = function (knex, Promise) {
  return knex('grants').del()
    .then(function () {
      return knex('grants').insert([
        {id: 1, name: 'Grant 1', description: 'Grant 1 gives money for coding.', link: 'url', conditions: 'Condition 1', amount: 1000},
        {id: 2, name: 'Grant 2', description: 'Grant 2 gives money for animation', link: 'url', conditions: 'Condition 2', amount: 2000},
        {id: 3, name: 'Grant 3', description: 'Grant 3 gives money for sound', link: 'url', conditions: 'Condition 3', amount: 3000}
      ])
    })
}
