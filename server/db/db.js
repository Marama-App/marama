const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getInterests,
  getType,
  getStudy,
  getHelp,
  getJobs,
  getGrants,
  getStudyId,
  getInterestTypesName
}

function getInterests (interests, testConn) {
  const conn = testConn || connection
  return conn('interests')
    .select()
}

function getType (interests, testConn) {
  const conn = testConn || connection
  // console.log(interests)
  return conn('interest_types')
    .join('interests_to_types_junction', 'interests_to_types_junction.type_id', 'interest_types.id')
    .join('interests', 'interests_to_types_junction.interest_id', 'interests.id')
    .where('interests.interests', interests)
    .select()
}
// Cat and Kimmi
function getStudy (typeId, testConn) {
  const conn = testConn || connection
  return conn('study')
    .join('types_study_junction', 'types_study_junction.study_id', 'study.id')
    .join('interest_types', 'interest_types.id', 'types_study_junction.types_id')
    .where('interest_types.name', typeId)
    .select()
}

function getHelp (typeId, testConn) {
  const conn = testConn || connection
  return conn('help')
    .join('interest_types', 'interest_types.id', 'help.types_id')
    .where('interest_types.name', typeId)
    .select()
}

function getJobs (typeName, testConn) {
  const conn = testConn || connection
  return conn('interest_types')
    .join('types_jobs_junction', 'types_jobs_junction.types_id', 'interest_types.id')
    .where('interest_types.name', typeName)
    .join('jobs', 'jobs.id', 'types_jobs_junction.jobs_id')
    .select('jobs.name as job_name', 'jobs.link', 'interest_types.name', 'types_jobs_junction.jobs_id', 'types_jobs_junction.types_id')
}

function getInterestTypesName (interestType, testConn) {
  const conn = testConn || connection
  return conn('interest_types')
    .where('interest_types.name', interestType)
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
