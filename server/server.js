const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())



// Default route for non-API requests
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
