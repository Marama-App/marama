exports.seed = (knex, Promise) => {
  return knex('interest_types').insert([
    // Gaming
    {id: 1, name: 'Animation', description: 'Design virtual worlds and breathe life into game characters with design and animation.'},
    {id: 2, name: 'Coding', description: 'Build the structure which makes each part of your favourite game work.'},
    {id: 3, name: 'Sound', description: 'Create conversations between game characters, kick-ass sound effects, and more.'},
    // Music
    {id: 4, name: 'Instrumental', description: 'Play an instrument as part of a Classical Orchestra or meet others to form your own band and create music.'},
    {id: 5, name: 'Singing/Songwriting', description: 'Write and create your own music to share.'},
    {id: 6, name: 'DJ/Sound Recording', description: 'Become part of the recording process to make hit music, and live the dream of travelling around the world as a DJ Artist.'}
  ])
}
