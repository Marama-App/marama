exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  // return knex('users').del()
  //   .then(function () {
  // Inserts seed entries
  return knex('users').insert([
    { id: 1, orgname: 'Maramateam', email: 'info.marama.app@gmail.com', hash: 'secret' }
  ])
// })
}
