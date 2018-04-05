// server/db/users.js
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
const hash = require('../auth/hash')

const jwt = require('jsonwebtoken')

const db = require('../db/users')

module.exports = {
  createUser,
  userExists,
  getUserByName,
  issue
}

// server/db/users.js

function issue (req, res) {
  db.getUserByName(req.body.username)
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    username: user.username
  }, secret, {
    expiresIn: '1d'
  })
}

function createUser (username, password, testConn) {
  const passwordHash = hash.generate(password)
  const conn = testConn || connection
  return conn('users')
    .insert({username, hash: passwordHash})
}

function userExists (username, testConn) {
  const conn = testConn || connection
  return conn('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username, testConn) {
  const conn = testConn || connection
  return conn('users')
    .select()
    .where('username', username)
    .first()
}
