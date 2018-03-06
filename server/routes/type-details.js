const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
// const development = require('../db/knexfile').development

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/:type', (req, res) => {
  const type = req.params.type
  const study = db.getStudy(type)
  const jobs = db.getJobs(type)
  const help = db.getHelp(type)
  const location = db.getLocation()
  Promise.all([study, jobs, help, location])
    .then(([study, jobs, help, location]) => {
      const result = {
        study,
        jobs,
        help,
        location
      }
      res.send(result)
    })

    .catch(err => {
      res.status(500).send(err.message)
    })
})
