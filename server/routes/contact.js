const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
// const development = require('../db/knexfile').development

// const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('okay')
})
