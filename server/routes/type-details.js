const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
// const development = require('../db/knexfile').development

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/interests/:type-details', (req, res) => {
  db.getTypeDetails()
    .then((typeDetails) => {
      res.send({typeDetails})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
