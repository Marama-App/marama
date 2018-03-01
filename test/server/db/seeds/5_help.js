exports.seed = function (knex, Promise) {
  return knex('help').del()
    .then(function () {
      return knex('help').insert([
        {id: 1, name: 'Resource 1', description: 'This resource helps you code', link: 'https://www.google.com'},
        {id: 2, name: 'Resource 2', description: 'This resource helps you animate', link: 'https://www.google.com'},
        {id: 3, name: 'Resource 3', description: 'This resource helps you sound', link: 'https://www.google.com'}
      ])
    })
}
