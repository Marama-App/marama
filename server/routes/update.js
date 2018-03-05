const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getAll()
    .then((all) => {
      res.send(all)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const formData = req.body
  console.log(formData)
  db.addStudy(formData)
    .then((all) => {
      res.send(all)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
