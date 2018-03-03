const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getInterests,
  getType,
  getTypeDetails,
  getGrants,
  getTypeDetailID
}

// test using your api route to see if the correct data shows

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
function getGrants (study, testConn) {
  const conn = testConn || connection
  return conn('grants')
    .join('grants_study_junction', 'grants_study_junction.grants_id', 'grants.id')
    .join('study', 'study.id', 'grants_study_junction.study_id')
    .where('study.id', study)
    .select()
}

function getTypeDetailID (typeDetail, testConn) {
  const study = 'Diploma in Sound'
  const conn = testConn || connection
  return conn('study')
    .where('study.name', study)
    .select('study.id')
}
