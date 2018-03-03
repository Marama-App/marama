const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getInterests,
  getType,
  getTypeDetails,
  getGrants,
  getStudyId
}

// test using your api route to see if the correct data shows

function getInterests (interests, testConn) {
  const conn = testConn || connection
  return conn('interests')
    .select()
}

function getType (testConn) {
  const conn = testConn || connection
  return conn('interest_types')
    .join('interests_to_types_junction', 'interests_to_types_junction.type_id', 'interest_types.id')
    .join('interests', 'interests_to_types_junction.interest_id', 'interests.id')
    .where('interests.id', 2)
    .select()
}

function getTypeDetails (testConn) {
  const conn = testConn || connection
  return conn('jobs').select()
}

// Tian and Emily
function getGrants (testConn) {
  const conn = testConn || connection
  return conn('grants')
    .join('grants_study_junction', 'grants_study_junction.grants_id', 'grants.id')
    .join('study', 'study.id', 'grants_study_junction.study_id')
    .select()
}

function getStudyId (typeDetail, testConn) {
  const conn = testConn || connection
  return conn('study')
    .where('study.name', typeDetail)
    .select('study.id')
}
