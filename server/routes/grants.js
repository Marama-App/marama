const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
// const development = require('../db/knexfile').development

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  // console.log('action is here')
  db.getGrants()
    .then((grants) => {
      // console.log(grants)
      res.send({grants})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
