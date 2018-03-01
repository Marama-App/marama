const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getHome
}

function getHome (testConn) {
  const conn = testConn || connection
  return conn('interests').select()
}
