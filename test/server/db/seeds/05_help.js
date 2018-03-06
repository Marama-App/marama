exports.seed = (knex, Promise) => {
  return knex('help').insert([
    {id: 1, help_name: 'Resource 1', help_description: 'This resource helps you code', help_link: 'https://www.google.com', types_id: 1},
    {id: 2, help_name: 'Resource 2', help_description: 'This resource helps you animate', help_link: 'https://www.google.com', types_id: 2},
    {id: 3, help_name: 'Resource 3', help_description: 'This resource helps you sound', help_link: 'https://www.google.com', types_id: 3}
  ])
}
