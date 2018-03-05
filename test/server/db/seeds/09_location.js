exports.seed = (knex, Promise) => {
  return knex('location').insert([
    { id: 1, location: 'Auckland' },
    { id: 2, location: 'Rotorua' },
    { id: 3, location: 'Tauranga' },
    { id: 4, location: 'Otaki' },
    { id: 5, location: 'Invercargill' },
    { id: 6, location: 'Hamilton' },
    { id: 7, location: 'Wellington' },
    { id: 8, location: 'Christchurch' },
    { id: 9, location: 'Palmerston North' },
    { id: 10, location: 'Wanganui' },
    { id: 11, location: 'Masterton' },
    { id: 12, location: 'Northland' },
    { id: 13, location: 'Otago' }
  ])
}
