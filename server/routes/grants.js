const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
// const development = require('../db/knexfile').development

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  const typeDetail = req.params.typeDetails
  // const typeDetail = 'Diploma in Sound'
  const id = db.getStudyId(typeDetail)
  const grants = db.getGrants()

  Promise.all([id, grants])
    .then(([studyTable, grantsTable]) => {
      const result = grantsTable.filter(grants => {
        return grants.study_id === studyTable[0].id
      })

      res.send({result})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
