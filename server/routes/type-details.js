const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
// const development = require('../db/knexfile').development

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  const typeName = 'coding'
  const study = db.getStudy(typeName)
  const jobs = db.getJobs(typeName)
  const help = db.getHelp(typeName)
  Promise.all([study, jobs, help])
    .then(([study, jobs, help]) => {
      const result = {
        study,
        jobs,
        help
      }
      res.send(result)
    })

    .catch(err => {
      res.status(500).send(err.message)
    })
})
