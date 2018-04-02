exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  // return knex('users').del()
  //   .then(function () {
  // Inserts seed entries
  return knex('users').insert([
    { id: 1, companyname: 'Marama', email: 'info.marama.app@gmail.com', username: 'Admin', hash: 'secret' }
  ])
// })
}
