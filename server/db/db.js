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
  getInterestTypesName,
  getIwiGrants,
  getPasifikaGrants,
  getAll,
  addStudy,
  addInterestsToTypesJunction,
  addTypesStudyJunction,
  getLocation
}

function getInterests (interests, testConn) {
  const conn = testConn || connection
  return conn('interests')
    .select()
}

function getType (interests, testConn) {
  const conn = testConn || connection
  return conn('interest_types')
    .join('interests_to_types_junction', 'interests_to_types_junction.type_id', 'interest_types.id')
    .join('interests', 'interests_to_types_junction.interest_id', 'interests.id')
    .where('interests.interests', interests)
    .select()
}

function getStudy (typeId, testConn) {
  const conn = testConn || connection
  return conn('study')
    .join('types_study_junction', 'types_study_junction.study_id', 'study.id')
    .join('interest_types', 'interest_types.id', 'types_study_junction.types_id')
    .where('interest_types.name', typeId)
    .select()
} // need to fix

function getLocation (testConn) {
  const conn = testConn || connection
  return conn('location')
    .join('location_study_junction', 'location_study_junction.location_id', 'location.id')
    .join('study', 'study.id', 'location_study_junction.study_id')
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
    .select('jobs.id as job_id', 'jobs.name as job_name', 'jobs.link as job_link', 'interest_types.name', 'types_jobs_junction.jobs_id', 'types_jobs_junction.types_id')
}

function getInterestTypesName (interestType, testConn) {
  const conn = testConn || connection
  return conn('interest_types')
    .where('interest_types.name', interestType)
    .select('interest_types.id')
}

// Tian and Emily
function getGrants (studyName, testConn) {
  const conn = testConn || connection
  return conn('grants')
    .join('grants_study_junction', 'grants_study_junction.grants_id', 'grants.id')
    .join('study', 'study.id', 'grants_study_junction.study_id')
    .where('study.course', studyName)
    .select()
}

function getAll (testConn) {
  const conn = testConn || connection
  return conn('study')
    .select()
}

function addStudy (formData, testConn) {
  const conn = testConn || connection
  return conn('study')
    .insert({course: formData.course, provider: formData.provider, link: formData.link, domestic_price: formData.domestic_price, international_price: formData.international_price, duration: formData.duration, level: formData.level}
    )
    .returning('id')
}

function addInterestsToTypesJunction (formData, testConn) {
  const conn = testConn || connection
  return conn('interests_to_types_junction')
    .insert({interest_id: formData.interestId, type_id: formData.typeId}
    )
    .select()
}

function addTypesStudyJunction (id, formData, testConn) {
  const conn = testConn || connection
  return conn('types_study_junction')
    .insert({study_id: id, types_id: formData.typeId}
    )
    .returning('id')
}
// stina iwi-grants
function getIwiGrants (iwiGrants, testConn) {
  const conn = testConn || connection
  return conn('iwi_grants')
    .select()
}
// stina pasifika-grants
function getPasifikaGrants (pasifikaGrants, testConn) {
  const conn = testConn || connection
  return conn('pasifika_grants')
    .select()
}
