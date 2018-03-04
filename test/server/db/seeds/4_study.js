
exports.seed = function (knex, Promise) {
  return knex('study').del()
    .then(function () {
      return knex('study').insert([
        // Gaming Animation Courses
        {id: 1, course: 'Diploma in Game Art & Development', provider: 'Yoobee', link: 'https://www.yoobee.ac.nz/courses/game-art-development/diploma-in-game-art-development', domestic_price: 16668.44, international_price: 0, duration: 2, level: 7},
        {id: 2, course: 'Bachelor of Animation', provider: 'Animation College', link: 'http://www.animationcollege.co.nz/bachelor-of-animation/degree/', domestic_price: 9457, international_price: 0, duration: 3, level: 7},
        {id: 3, course: 'Bachelor of Design or Bachelor of Visual Arts', provider: 'AUT', link: 'http://www.aut.ac.nz/study-at-aut/study-areas/art-and-design-at-aut-university-auckland/undergraduate/game-and-play-design', domestic_price: 0, international_price: 0, duration: 3, level: 7},
        {id: 4, course: 'Digital Creativity Foundation Programme', provider: 'Media Design School', link: 'https://www.mediadesignschool.com/courses/foundation-course', domestic_price: 9296, international_price: 21500, duration: 1, level: 4},
        //  Gaming Coding Courses
        {id: 5, course: 'Bachelor of Software Engineering', provider: 'Media Design School', link: 'https://www.mediadesignschool.com/courses/game-programming', domestic_price: 10920.40, international_price: 26400, duration: 3, level: 7},
        {id: 6, course: 'Bachelor of Computer and Information Sciences', provider: 'AUT', link: 'http://www.aut.ac.nz/study-at-aut/study-areas/engineering-computer-and-mathematical-sciences/undergraduate-study/bachelor-of-computer-and-information-sciences---overview', domestic_price: 0, international_price: 0, duration: 3, level: 7},
        {id: 7, course: 'Web Development Bootcamp', provider: 'Enspiral Dev Academy', link: 'https://devacademy.co.nz/', domestic_price: 11000, international_price: 0, duration: 0.5, level: 0},
        // Gaming Sound Courses
        {id: 8, course: 'Bachelor of Design', provider: 'AUT', link: 'https://www.aut.ac.nz/study-at-aut/study-areas/art-and-design-at-aut-university-auckland/undergraduate/bachelor-of-design-overview', domestic_price: 0, international_price: 0, duration: 3, level: 7},
        {id: 9, course: 'Bachelor of Music', provider: 'Victoria University', link: 'https://www.victoria.ac.nz/explore/study-areas/music/study?subject=sonic-arts-and-music-technology', domestic_price: 0, international_price: 0, duration: 3, level: 7},
        {id: 10, course: 'Diploma in Audio Engineering', provider: 'SAE', link: 'http://auckland.sae.edu/courses/audio/diploma-in-audio-engineering/', domestic_price: 12861, international_price: 24849, duration: 1, level: 7}
      ])
    })
}
