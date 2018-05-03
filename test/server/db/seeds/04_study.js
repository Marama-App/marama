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
    // SPORT -- Personal Training and Coaching
    {id: 20, course: 'Bachelor of Sport and Recreation, Majoring in Sport and Exercise Science', provider: 'AUT', link: 'https://autdev.aut.ac.nz/study/study-options/sport-and-recreation/courses/bachelor-of-sport-and-recreation/sport-and-exercise-science-major', domestic_price: 6000, international_price: 0, duration: 3, level: 7},
    {id: 21, course: 'Bachelor of Sport Coaching', provider: 'University of Canterbury', link: 'http://www.canterbury.ac.nz/study/qualifications-and-courses/bachelors-degrees/bachelor-of-sport-coaching/', domestic_price: 5971, international_price: 0, duration: 3, level: 7},
    {id: 22, course: 'Bachelor of Sport Coaching', provider: 'Unitec', link: 'https://www.unitec.ac.nz/career-and-study-options/sport/bachelor-of-sport-coaching', domestic_price: 7432, international_price: 0, duration: 3, level: 7},
    // SPORT -- Nutrition
    {id: 23, course: 'Bachelor of Science, Majoring in Health Nutrition', provider: 'Otago University', link: 'https://www.otago.ac.nz/courses/qualifications/bsc.html', domestic_price: 8000, international_price: 0, duration: 3, level: 7},
    {id: 24, course: 'Bachelor of Science, Majoring in Human Nutrition', provider: 'Massey University', link: 'http://www.massey.ac.nz/massey/learning/programme-course/programme.cfm?major_code=PHMNT&prog_id=92411', domestic_price: 6632, international_price: 0, duration: 3, level: 7},
    {id: 25, course: 'Bachelor of Sport and Recreation, Majoring in Exercise Science and Nutrition', provider: 'AUT', link: 'https://www.aut.ac.nz/study/study-options/sport-and-recreation/courses/bachelor-of-sport-and-recreation/exercise-science-and-nutrition-major', domestic_price: 6000, international_price: 0, duration: 3, level: 7},
    // SPORT -- Sport Therapy
    {id: 26, course: 'Bachelor of Health Science, Majoring in Physiotherapy', provider: 'AUT', link: 'https://www.aut.ac.nz/study/study-options/health-sciences/courses/bachelor-of-health-science-in-physiotherapy', domestic_price: 6450, international_price: 0, duration: 4, level: 7},
    {id: 27, course: 'Bachelor of Physiotherapy', provider: 'Otago University', link: 'https://www.otago.ac.nz/courses/qualifications/bphty.html', domestic_price: 6923, international_price: 0, duration: 4, level: 7},
    {id: 28, course: 'Bachelor of Applied Science (Human Biology)', provider: 'Unitec', link: 'https://www.unitec.ac.nz/career-and-study-options/osteopathy/bachelor-of-applied-science-human-biology', domestic_price: 7404, international_price: 0, duration: 3, level: 7},
    // GADGETS -- Engineering
    {id: 29, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 30, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 31, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // GADGETS -- Marketing
    {id: 32, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 33, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 34, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // GADGETS -- Gaming
    {id: 35, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 36, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 37, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // DANCING -- Theatre
    {id: 38, course: 'Bachelor of Creative Arts', provider: 'MIT', link: 'https://www.manukau.ac.nz/study/areas-of-study/creative-arts/performing-arts/bachelor-of-creative-arts-in-performing-arts-level-7', domestic_price: 6400, international_price: 0, duration: 3, level: 7},
    {id: 39, course: 'Bachelor of Performing Arts', provider: 'Otago University', link: 'https://www.otago.ac.nz/courses/qualifications/bpa.html', domestic_price: 5793, international_price: 0, duration: 3, level: 7},
    {id: 40, course: 'Bachelor of Performing Arts', provider: 'Toi Whakaari', link: 'http://toiwhakaari.ac.nz/acting/', domestic_price: 6000, international_price: 0, duration: 3, level: 7},
    // DANCING -- Photographer
    {id: 41, course: 'Bachelor of Creative Enterprise', provider: 'Unitec', link: 'https://www.unitec.ac.nz/career-and-study-options/transmedia/bachelor-of-creative-enterprise', domestic_price: 6736, international_price: 0, duration: 3, level: 7},
    {id: 42, course: 'Diploma in Photography', provider: 'MIT', link: 'https://www.manukau.ac.nz/study/areas-of-study/creative-arts/photography/new-zealand-diploma-in-photography-level-5', domestic_price: 5900, international_price: 0, duration: 0.5, level: 5},
    {id: 43, course: 'Bachelor of Visual Arts', provider: 'AUT', link: 'https://www.aut.ac.nz/study/study-options/art-and-design/courses/bachelor-of-visual-arts?gclid=CjwKCAjwoKDXBRAAEiwA4xnqv2STpcqvCsN7EV5CHQO4wSVFC9flQ1TPTc3sE32_RubaHgOtRruoLxoCqOQQAvD_BwE', domestic_price: 6498, international_price: 0, duration: 3, level: 7},
    // DANCING -- Choreographer
    {id: 44, course: 'Bachelor of Dance Studies', provider: 'University of Auckland', link: 'https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-dance-studies-bdancest.html', domestic_price: 6920, international_price: 0, duration: 3, level: 7},
    {id: 45, course: 'Bachelor of Preforming and Screen Arts', provider: 'Unitec', link: 'https://www.unitec.ac.nz/career-and-study-options/contemporary-dance', domestic_price: 6000, international_price: 0, duration: 3, level: 7},
    {id: 46, course: 'Diploma in Dance Preformance', provider: 'NZ School Of Dance', link: 'http://www.nzschoolofdance.ac.nz/diploma', domestic_price: 6155, international_price: 0, duration: 3, level: 7},
    // FOOD -- Hospitality
    {id: 47, course: 'Bachelor of International Hospitality Management', provider: 'AUT', link: 'https://www.aut.ac.nz/study/study-options/hospitality-tourism-and-events/courses/bachelor-of-international-hospitality-management?gclid=CjwKCAjww6XXBRByEiwAM-ZUIJphhEfAGU2ShmhOlH891p8KhRuip1Bh9fIAk83o_a2Vbk_pVK9p3hoCUiQQAvD_BwE', domestic_price: 6760, international_price: 0, duration: 3, level: 7},
    {id: 48, course: 'New Zealand Diploma in Hospitality Management', provider: 'NZMA', link: 'https://www.nzma.ac.nz/courses/hospitality-courses/new-zealand-diploma-in-hospitality-management-level-6', domestic_price: 6000, international_price: 0, duration: 1, level: 6},
    {id: 49, course: 'New Zealand Diploma in Hospitality Management', provider: 'MIT', link: 'https://www.manukau.ac.nz/study/areas-of-study/culinary-hospitality-and-baking/hotel-reception-portering-and-concierge/new-zealand-diploma-in-hospitality-management-level-5', domestic_price: 7100, international_price: 0, duration: 1, level: 5},
    // FOOD -- Cooking
    {id: 50, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 51, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 52, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    // FOOD -- Dietitian
    {id: 53, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 54, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0},
    {id: 55, course: '', provider: '', link: '', domestic_price: 0, international_price: 0, duration: 0, level: 0}
  ])
}
