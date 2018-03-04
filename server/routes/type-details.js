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
