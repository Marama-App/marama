const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const interestRoutes = require('./routes/interests')
const typeRoutes = require('./routes/type')
const typeDetailRoutes = require('./routes/type-details')
const grantsRoutes = require('./routes/grants')

const server = express()
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())

// these are the routes we have created
server.use('/api/v1/interests', interestRoutes)
server.use('/api/v1/type', typeRoutes)
server.use('/api/v1/type-details', typeDetailRoutes)
server.use('/api/v1/grants', grantsRoutes)

// Default route for non-API requests
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
