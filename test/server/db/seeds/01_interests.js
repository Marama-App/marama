exports.seed = (knex, Promise) => {
  return knex('interests').insert([
    {id: 1, interests: 'Gaming'},
    {id: 2, interests: 'Music'},
    {id: 3, interests: 'Sport'},
    {id: 4, interests: 'Gadgets'},
    {id: 5, interests: 'Dancing'},
    {id: 6, interests: 'Food'}
  ])
}
