const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
// const development = require('../db/knexfile').development

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/:interests', (req, res) => {
  db.getTypeInfo()
    .then((typeInfo) => {
      res.send({typeInfo})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
