
exports.seed = function (knex, Promise) {
  return knex('jobs').del()
    .then(function () {
      return knex('jobs').insert([
        {id: 1, name: 'PikPok', link: 'https://www.google.com'},
        {id: 2, name: 'Stickmen Studios', link: 'https://www.google.com'},
        {id: 3, name: 'Weta Digital', link: 'https://www.google.com'}
      ])
    })
}
