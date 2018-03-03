const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
// const development = require('../db/knexfile').development

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/:interests/:type/:type-details/:grants', (req, res) => {
  db.getGrants()
    .then((grants) => {
      res.send({grants})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
