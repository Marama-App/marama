exports.seed = (knex, Promise) => {
  return knex('iwi_grants').insert([
    {id: 1, iwi: 'Ngai Tahu', link: 'http://ngaitahu.iwi.nz/whanau/opportunities/', description: 'Multiple funding opportunities for members of Ngai Tahu'},
    {id: 2, iwi: 'Ngapuhi', link: 'https://www.kahungunu.iwi.nz/scholarships--internships', description: 'Funding and Scholarships for Tertiary Education'},
    {id: 3, iwi: 'Ngati Kahungungu', link: 'https://www.kahungunu.iwi.nz/scholarships--internships', description: 'Scholarships for members of Ngati Kahungungu during their 3rd year of study'},
    {id: 4, iwi: 'Ngati Mutunga', link: 'http://ngatimutunga.iwi.nz/event/education-grants-semester-one-2018/', description: 'Scholarships for members of Ngati Mutunga for all areas of study'},
    {id: 5, iwi: 'Ngati Toa', link: 'http://www.ngatitoa.iwi.nz/grants/education-grants', description: 'Education grants for members of Ngati Toa'},
    {id: 6, iwi: 'Ngati Wai', link: 'http://www.ngatiwai.iwi.nz/scholarships.html', description: '$750 for members of Ngati Awa studying in tertiary education'},
    {id: 7, iwi: 'Parininihi ki Waitotara', link: 'http://pkw.co.nz/he-oranga/#next3', description: 'Education grants for members of Parininihi ki Waitotara'},
    {id: 8, iwi: 'Raukawa', link: 'https://www.raukawa.org.nz/rct/education-grants/', description: 'Funding for members of Ngati Raukawa for short courses, dipolomas and undergraduate study'},
    {id: 9, iwi: 'Ruanui', link: 'https://www.ruanui.co.nz/education-grant/', description: 'Education grants for members of Ruanui'},
    {id: 10, iwi: 'Taranaki', link: 'https://taranaki.iwi.nz/education-grants/', description: 'Scholarships for members of Taranaki Iwi in multiple areas of study'},
    {id: 11, iwi: 'Te Arawa', link: 'http://www.terarawa.co.nz', description: 'Funding for Te Rarawa decendants for tertiary education, in areas related iwi development'},
    {id: 12, iwi: 'Te Arawa Fisheries', link: 'http://www.tearawafisheries.maori.nz', description: '$1000 scholarship for decendants of Te Arawa for any recognised education provider'},
    {id: 13, iwi: 'Te Aupouri', link: 'http://www.teaupouri.iwi.nz/tangata-funding-december-2017/', description: 'Funding for Te Aupouri Decendants for Study'},
    {id: 14, iwi: 'Tuwharetoa', link: 'https://www.tuwharetoa.co.nz/education/', description: 'Scholarships for members of Tuwharetoa '}
  ])
}
