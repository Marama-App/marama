const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getInterests,
  getType,
  getTypeDetails,
  getGrants
}

function getInterests (testConn) {
  const conn = testConn || connection
  return conn('interests').select()
}

function getType (testConn) {
  const conn = testConn || connection
  return conn('interest_types').select()
}

// function getTypeInfo (testConn) {
//   // const conn = testConn || connection
//   return Promise.resolve([
//     {id: 1, name: 'Animation', description: 'Design virtual worlds and breathe life into game characters with design and animation.'}
//   ])
// }

function getTypeDetails (testConn) {
  const conn = testConn || connection
  return conn('jobs').select()
}

function getGrants (testConn) {
  const conn = testConn || connection
  return conn('grants').select()
}
