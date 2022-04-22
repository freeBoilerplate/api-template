import express from 'express'
const app = express()

// Initialize the env variables
import dotenv = require('dotenv')
dotenv.config()

// Initialize the body parser
import bodyParser = require('body-parser')
app.use(bodyParser.json())

// Check the server status endpoint
app.get('/', (req, res) => {
	res.json('Service up!')
})

// Setup API routing
import Routes from './controllers/router'
app.use('/api', Routes)

import { startup } from './startup'
if (process.env.NODE_ENV !== 'test') startup(app)

module.exports = app
