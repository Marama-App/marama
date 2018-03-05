const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  // const interests = db.getInterests()
  // Promise.all([interests])
  db.getInterests()
    .then((interests) => {
      const result = {
        interests
      }
      res.send(result.interests)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

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
