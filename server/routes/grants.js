const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/:typeDetails', (req, res) => {
  const studyName = req.params.typeDetails
  db.getGrants(studyName)
    .then(result => {
      res.send({result})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
