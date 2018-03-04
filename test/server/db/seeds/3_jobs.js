
exports.seed = function (knex, Promise) {
  return knex('jobs').del()
    .then(function () {
      return knex('jobs').insert([
        {id: 1, name: 'PikPok', link: 'http://pikpok.com/'},
        {id: 2, name: 'Stickmen Studios', link: 'http://stickmenstudios.co.nz/'},
        {id: 3, name: 'Weta Digital', link: 'https://www.wetafx.co.nz/'},
        {id: 4, name: 'Titan Ideas', link: 'https://www.titanideas.com/'},
        {id: 5, name: 'Runaway', link: 'http://www.runawayplay.com/'},
        {id: 6, name: 'Grinding Gear Games', link: 'http://www.grindinggear.com/'},
        {id: 7, name: 'Metia Interactive', link: 'http://www.metia.co.nz/'},
        {id: 8, name: 'Morepork Games', link: 'http://www.moreporkgames.com/index'},
        {id: 9, name: 'Ninja Kiwi', link: 'https://ninjakiwi.com/'},
        {id: 10, name: 'Second Intention', link: 'http://www.secondintention.com/'},
        {id: 11, name: 'Straylight Studios', link: 'http://straylightstudios.com/'}
      ])
    })
}
