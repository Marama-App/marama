exports.seed = (knex, Promise) => {
  return knex('pasifika_grants').insert([
    {id: 1, name: 'Careers New Zealand', link: 'https://www.careers.govt.nz/courses/scholarships-grants-and-awards/scholarships-grants-and-awards-for-pasifika-students/#cID_652', description: 'This website offers a great deal of infomation about where to find Scholarships, grants and awards for Pasifika students'},
    {id: 2, name: 'Pacific Education Foundation Scholarships', link: 'http://www.education.govt.nz/further-education/information-for-students/scholarships/pacific-education-foundation-scholarships-pef/', description: 'To be eligible for these scholarships, you must be enrolled in a tertiary institution in New Zealand and be a New Zealand citizen or resident of Pacific Island decent. For more details see the guidelines and regulations for each scholarship.'},
    {id: 3, name: 'Core Education', link: 'https://www.core-ed.org/giving-back/pasifika-education-grant/', description: 'Pasifika Education Grant'}
  ])
}
