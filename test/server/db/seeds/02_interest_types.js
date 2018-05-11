exports.seed = (knex, Promise) => {
  return knex('interest_types').insert([
    // Gaming
    {id: 1, name: 'Animation', description: 'Design virtual worlds and breathe life into game characters with design and animation.'},
    {id: 2, name: 'Coding', description: 'Build the structure which makes each part of your favourite game work.'},
    {id: 3, name: 'Sound', description: 'Create conversations between game characters, kick-ass sound effects, and more.'},
    // Music
    {id: 4, name: 'Instrumental', description: 'Play an instrument as part of a Classical Orchestra or meet others to form your own band and create music.'},
    {id: 5, name: 'Singing-&-Songwriting', description: 'Write and create your own music to share.'},
    {id: 6, name: 'DJ-&-Sound-Recording', description: 'Become part of the recording process to make hit music, and live the dream of travelling around the world as a DJ Artist.'},
    // Sport
    {id: 7, name: 'Personal-Training-&-Coaching', description: 'Learn how to help people reach their health and fitness goals.'},
    {id: 8, name: 'Nutrition', description: 'Learning how to balance nutrition in order to help improve not only the performance of yourself, but others also.'},
    {id: 9, name: 'Sport-Therapy', description: 'Become a therapist that specialises in sports injury rehab, ACC treatments, sports massage and many other areas.'},
    // Gadgets
    {id: 10, name: 'Engineering', description: 'Specialise in a certain aspect of engineering and potentially create the gadgets yourself.'},
    {id: 11, name: 'Marketing', description: 'Promoting and testing out all of the innovative and exciting new gadgets to consumers.'},
    {id: 12, name: 'Innovation', description: 'Manage and lead teams to create new ideas for the world.'},
    // Dancing
    {id: 13, name: 'Theatre', description: 'Become involved with incorperating dancing, acting, and singing all in one.'},
    {id: 14, name: 'Photography', description: 'Experience dancing on a whole new level.'},
    {id: 15, name: 'Dance-&-Choreography', description: 'Teach others to dance and help them to achieve their goals and dreams.'},
    // Food
    {id: 16, name: 'Hospitality', description: 'Learn the ins and outs of services in resturaunts, cafes etc.'},
    {id: 17, name: 'Culinary', description: 'If creating dishes is a passion of yours, why not turn it into a reality in the culinary industry'},
    {id: 18, name: 'Dietetics', description: 'Become an registered Dietitan with expert knowledge on diet and nutrition.'}
  ])
}
