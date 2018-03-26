const express = require('express')
const bodyParser = require('body-parser')

const {userExists, createUser} = require('../db/users')
const token = require('../auth/token')
const router = express.Router()

router.use(bodyParser.json())

router.post('/register', register)

router.get('/username', token.decode, (req, res) => {
  res.json({
    username: req.user.username
  })
})

function register (req, res) {
  userExists(req.body.username).then(exists => {
    if (exists) {
      return res.status(400).send({ message: 'User exists' })
    }
    createUser(req.body.username, req.body.password)
      .then(() => res.status(201).end())
  })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}

module.exports = router
