const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')

const server = express()
server.use(passport.initialize())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, 'public')))

const interestRoutes = require('./routes/interests')
const typeRoutes = require('./routes/types')
const typeDetailRoutes = require('./routes/type-details')
const grantsRoutes = require('./routes/grants')
const iwiGrantRoutes = require('./routes/iwi-grants')
const contactRoutes = require('./routes/contact')
const pasifikaRoutes = require('./routes/pasifika-grants')

const authRoutes = require('./routes/auth')
const addRoutes = require('./routes/add')
const adddbRoutes = require('./routes/adddb')

// these are the routes we have created
server.use('/api/v1/interests', interestRoutes)
server.use('/api/v1/types', typeRoutes)
server.use('/api/v1/typeDetails', typeDetailRoutes)
server.use('/api/v1/grants', grantsRoutes)
server.use('/api/v1/iwi-grants', iwiGrantRoutes)
server.use('/api/v1/contact', contactRoutes)
server.use('/api/v1/pasifika-grants', pasifikaRoutes)

server.use('/api/v1/auth', authRoutes)
server.use('/api/v1/add', addRoutes)
server.use('/api/v1/adddb', adddbRoutes)

// Default route for non-API requests
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
