const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getPasifikaGrants()
    .then(result => {
      res.send({result})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
