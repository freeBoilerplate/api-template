import express from 'express'
import dotenv = require('dotenv')
import bodyParser = require('body-parser')
import mongoose = require('mongoose')
import morgan = require('morgan')
import cors = require('cors')

// Adds Swagger
import swaggerUi = require('swagger-ui-express')
import swaggerDocument from './swagger.json'

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

// Setup Swagger Route
if (!isProduction) {
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}

// Setup API routing
import api from './routes/router'
app.use('/api', api)

// Model Initialization
/* tslint:disable no-var-requires */
require('./database/example.database')

// Find Port
const port = 8000
const host = '0.0.0.0'

// Initialize MongoDB Connection
const mongoString = process.env.MONGO_CONNECTION_STRING
if (mongoString) {
	mongoose.connect(mongoString)
	const db = mongoose.connection
	db.once('connected', () => {
		console.log('Database Connected')
	})
} else {
	console.log(
		'Looks like you are missing a MongoDB connection string in your .env!'
	)
}

// Service Connection
app.listen(port, host, () => {
	console.log(`App listening on port: ${port}`)
})

module.exports = app
