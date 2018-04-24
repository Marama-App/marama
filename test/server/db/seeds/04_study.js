exports.seed = (knex, Promise) => {
  return knex('study').insert([
    // GAMING --  Animation Courses
    {id: 1, course: 'Diploma in Game Art & Development', provider: 'Yoobee', link: 'https://www.yoobee.ac.nz/courses/game-art-development/diploma-in-game-art-development', domestic_price: 16668.44, international_price: 0, duration: 2, level: 7},
    {id: 2, course: 'Bachelor of Animation', provider: 'Animation College', link: 'http://www.animationcollege.co.nz/bachelor-of-animation/degree/', domestic_price: 9457, international_price: 0, duration: 3, level: 7},
    {id: 3, course: 'Bachelor of Design or Bachelor of Visual Arts', provider: 'AUT', link: 'http://www.aut.ac.nz/study-at-aut/study-areas/art-and-design-at-aut-university-auckland/undergraduate/game-and-play-design', domestic_price: 0, international_price: 0, duration: 3, level: 7},
    {id: 4, course: 'Digital Creativity Foundation Programme', provider: 'Media Design School', link: 'https://www.mediadesignschool.com/courses/foundation-course', domestic_price: 9296, international_price: 21500, duration: 1, level: 4},
    // GAMING -- Coding Courses
    {id: 5, course: 'Bachelor of Software Engineering', provider: 'Media Design School', link: 'https://www.mediadesignschool.com/courses/game-programming', domestic_price: 10920.40, international_price: 26400, duration: 3, level: 7},
    {id: 6, course: 'Bachelor of Computer and Information Sciences', provider: 'AUT', link: 'http://www.aut.ac.nz/study-at-aut/study-areas/engineering-computer-and-mathematical-sciences/undergraduate-study/bachelor-of-computer-and-information-sciences---overview', domestic_price: 0, international_price: 0, duration: 3, level: 7},
    {id: 7, course: 'Web Development Bootcamp', provider: 'Enspiral Dev Academy', link: 'https://devacademy.co.nz/', domestic_price: 11000, international_price: 0, duration: 0.5, level: 0},
    // GAMING -- Sound Courses
    {id: 8, course: 'Bachelor of Design', provider: 'AUT', link: 'https://www.aut.ac.nz/study-at-aut/study-areas/art-and-design-at-aut-university-auckland/undergraduate/bachelor-of-design-overview', domestic_price: 0, international_price: 0, duration: 3, level: 7},
    {id: 9, course: 'Bachelor of Music, Majoring in Sonic Arts and Music Technology', provider: 'Victoria University', link: 'https://www.victoria.ac.nz/explore/study-areas/music/study?subject=sonic-arts-and-music-technology', domestic_price: 0, international_price: 0, duration: 3, level: 7},
    {id: 10, course: 'Diploma in Audio Engineering', provider: 'SAE', link: 'http://auckland.sae.edu/courses/audio/diploma-in-audio-engineering/', domestic_price: 12861, international_price: 24849, duration: 1, level: 7},
    // MUSIC -- Musical Instrument Courses
    {id: 11, course: 'Bachelor of Music, endorsed in Composition', provider: 'Otago University', link: 'http://www.otago.ac.nz/courses/subjects/cpsn.html', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 12, course: 'Bachelor of Creativity', provider: 'Whitireia', link: 'https://www.whitireia.ac.nz/study-programmes/music/bachelor-of-creativity-music', domestic_price: 0, international_price: 0, duration: 3, level: 7},
    {id: 13, course: 'Bachelor of Commercial Music, Majoring in Music Practice', provider: 'Massey University', link: 'http://www.massey.ac.nz/massey/learning/programme-course/programme.cfm?prog_id=93542', domestic_price: 0, international_price: 0, duration: 3, level: 7},
    // MUSIC -- Singing/Songwriting Courses
    {id: 14, course: 'Diploma in Contemporary Music', provider: 'Unitec', link: 'http://www.unitec.ac.nz/career-and-study-options/music/diploma-in-contemporary-music', domestic_price: 6215, international_price: 0, duration: 2, level: 5},
    {id: 15, course: 'Bachelor of Music, Majoring in Instrumental/Vocal Composition', provider: 'Victoria University', link: 'https://www.victoria.ac.nz/explore/study-areas/music/study?subject=instrumentalvocal-composition', domestic_price: 7698, international_price: 0, duration: 3, level: 7},
    {id: 16, course: 'Bachelor of Creativity', provider: 'Whitireia', link: 'https://www.whitireia.ac.nz/study-programmes/music/bachelor-of-creativity-music', domestic_price: 0, international_price: 0, duration: 3, level: 7},
    // MUSIC -- DJ/Sound Recording Courses
    {id: 17, course: 'Bachelor of Recording Arts', provider: 'SAE', link: 'http://auckland.sae.edu/courses/audio/bachelor-of-recording-arts/', domestic_price: 9683, international_price: 0, duration: 3, level: 7},
    {id: 18, course: 'Certificate in DJ Music', provider: 'Whitireia', link: 'https://www.whitireia.ac.nz/study-programmes/music/certificate-in-dj-music', domestic_price: 6217, international_price: 19950, duration: 1, level: 4},
    {id: 19, course: 'DJ Mixing and Turntablism', provider: 'SIT', link: 'https://www.sit.ac.nz/programme/course/DJ%20Mixing%20and%20Turntablism', domestic_price: 250, international_price: 0, duration: 0.5, level: 0},
    // SPORT -- Personal Training
    {id: 17, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 18, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 19, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // SPORT -- Nutrition
    {id: 17, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 18, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 19, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // SPORT -- Sport Therapy
    {id: 17, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 18, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 19, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // GADGETS -- Engineering
    {id: 17, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 18, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 19, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // GADGETS -- Marketing
    {id: 17, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 18, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 19, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // GADGETS -- Gaming
    {id: 17, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 18, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 19, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // DANCING -- Theatre
    {id: 17, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 18, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 19, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // DANCING -- Photographer
    {id: 17, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 18, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 19, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // DANCING -- Choreographer
    {id: 17, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 18, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 19, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // FOOD -- Hospitality
    {id: 17, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 18, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 19, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // FOOD -- Cooking
    {id: 17, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 18, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 19, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // FOOD -- Dietitian
    {id: 17, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 18, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 19, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0}
  ])
}
