exports.seed = (knex, Promise) => {
  return knex('type-info').del()
    .then(() => {
      return knex('type-info').insert([
        {id: 1, name: 'Animation', description: 'Design virtual worlds and breathe life into game characters with design and animation.'},
        {id: 2, name: 'Coding', description: 'Build the structure that makes each part of your favourite game work.'},
        {id: 3, name: 'Sound', description: 'Create conversations between game characters, sound effects for activities and more.'}
      ])
    })
}
