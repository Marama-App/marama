const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getInterests,
  getType,
  getStudy,
  getHelp,
  getGrants,
  getStudyId,
  getInterestTypesID
}

// test using your api route to see if the correct data shows

function getInterests (testConn) {
  const conn = testConn || connection
  return conn('interests').select()
}

// stina and elyse
function getType (testConn) {
  const conn = testConn || connection
  return conn('interest_types').select()
}
// Cat and Kimmi
function getStudy (testConn) {
  const conn = testConn || connection
  return conn('study')
    .join('types_study_junction', 'types_study_junction.study_id', 'study.id')
    .join('interest_types', 'interest_types.id', 'types_study_junction.types_id')
    .select()
}

function getHelp (testConn) {
  const conn = testConn || connection
  return conn('help')
    .join('interest_types', 'interest_types.id', 'help.types_id')
    .select()
}

function getJobs () {

}

function getInterestTypesID (interestType, testConn) {
  const conn = testConn || connection
  return conn('interest_types')
    .where('interest_types.id', interestType)
    .select('interest_types.id')
}

// Tian and Emily
function getGrants (testConn) {
  const conn = testConn || connection
  return conn('grants')
    .join('grants_study_junction', 'grants_study_junction.grants_id', 'grants.id')
    .join('study', 'study.id', 'grants_study_junction.study_id')
    .select()
}
// Tian and Emily
function getStudyId (typeDetail, testConn) {
  const conn = testConn || connection
  return conn('study')
    .where('study.name', typeDetail)
    .select('study.id')
}
