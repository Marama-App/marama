const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const db = require('../db/db.js')

module.exports = router

router.use(bodyParser.json())

router.post('/', (req, res) => {
  const formData = req.body
  db.addStudy(formData)
    .then((idArray) => {
      if (idArray.length > 0) {
        const id = idArray[0]
        return db.addTypesStudyJunction(id, formData)
      }
      return Promise.reject(new Error('Study not inserted'))
    })
    .then((typesIdArray) => {
      if (typesIdArray.length > 0) {
        return res.send({})
      }
      return Promise.reject(new Error('Study type not inserted'))
    }
    )
    .catch(err => {
      res.status(500).send(err.message)
    })
})
