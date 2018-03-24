const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
// const development = require('../db/knexfile').development

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  // console.log(process.env.NODE_ENV, process.env.MAILGUN_API_KEY)
  db.getInterests()
    .then((interests) => {
      res.send({interests})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
