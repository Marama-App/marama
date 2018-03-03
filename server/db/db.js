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

function getTypeDetails (testConn) {
  const conn = testConn || connection
  return conn('jobs').select()
}

// Tian and Emily
function getGrants (testConn) {
  const conn = testConn || connection
  return conn('grants')
    .join('grants_id', 'study_id')
    .select()
}
