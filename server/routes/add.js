const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.post('/', (req, res) => {
  const formData = req.body.interestSelector
  db.getType(formData)
    .then((type) => {
      res.send(type)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
