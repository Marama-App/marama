exports.seed = (knex, Promise) => {
  return knex('interests').del()
    .then(() => {
      return knex('interests').insert([
        {id: 1, interests: 'Gaming'},
        {id: 2, interests: 'Music'},
        {id: 3, interests: 'Cars'},
        {id: 4, interests: 'Skateboarding'},
        {id: 5, interests: 'Dance'},
        {id: 6, interests: 'Sports'}
      ])
    })
}
