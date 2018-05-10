const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const apiKey = process.env.MAILGUN_API_KEY
const DOMAIN = 'sandbox3c744cc282d64cda9998c505e2785b05.mailgun.org'
const mailgun = require('mailgun-js')({ apiKey: apiKey, domain: DOMAIN })

module.exports = router

router.use(bodyParser.json())

router.post('/', (req, res) => {
  const data = {
    from: req.body.email,
    to: 'info.marama.app@gmail.com',
    subject: 'Website Enquiry from ' + req.body.name,
    text: req.body.message
  }

  mailgun.messages().send(data, (error, body) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.send('okay')
    }
  })
})
