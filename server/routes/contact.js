const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
// const apiKey = 'YOUR_API_KEY'
// const DOMAIN = 'YOUR_DOMAIN_NAME'
// const mailgun = require('mailgun-js')({apiKey: apiKey, domain: DOMAIN})

module.exports = router

router.use(bodyParser.json())

router.post('/', (req, res) => {
  // console.log(req.body)
  res.send('okay')
})

// const data = {
//   from: 'Excited User <me@samples.mailgun.org>',
//   to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
//   subject: 'Hello',
//   text: 'Testing some Mailgun awesomness!'
// }

// mailgun.messages().send(data, (error, body) => {
// // console.log(body)
// })
