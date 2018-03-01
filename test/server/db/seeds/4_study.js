
exports.seed = function (knex, Promise) {
  return knex('study').del()
    .then(function () {
      return knex('study').insert([
        {id: 1, name: 'Diploma in Web Development', provider: 'EDA', link: 'https://www.google.com', domestic_price: 5000, international_price: 10000, duration: 0.5, level: 7},
        {id: 2, name: 'Certificate in Animation', provider: 'Google', link: 'https://www.google.com', domestic_price: 4000, international_price: 12000, duration: 1, level: 7},
        {id: 3, name: 'Diploma in Sound', provider: 'Sound College', link: 'https://www.google.com', domestic_price: 6000, international_price: 11000, duration: 2, level: 7},
      ])
    })
}
