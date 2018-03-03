const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
// const development = require('../db/knexfile').development

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  // const typeDetail = req.params.typeDetails
  const typeDetail = 'Diploma in Sound'
  db.getTypeDetailID(typeDetail)
    .then((grants) => {
      // console.log(grants)
      res.send({grants})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
