import express from 'express'
import dotenv = require('dotenv')
import bodyParser = require('body-parser')
import mongoose = require('mongoose')
import morgan = require('morgan')
import cors = require('cors')

// Create App
const app = express()

// Initialize the environment
dotenv.config()

// Check NODE_ENV
const isProduction = process.env.NODE_ENV === 'production'

// Express Config Defaults
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Setup API routing
import api from './routes/router'
app.use('/api', api)

// Model Initialization
/* tslint:disable no-var-requires */
require('./database/example.database')

// Find Port
const port = process.env.PORT || 8000

// Initialize MongoDB Connection
const mongoString = process.env.MONGO_CONNECTION_STRING
mongoose.connect(mongoString)
const db = mongoose.connection
db.once('connected', () => {
	console.log('Database Connected')
})

// Service Connection
app.listen(port, () => {
	console.log(`App listening on port: ${port}`)
})

module.exports = app
