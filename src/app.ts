import express from 'express'
const app = express()
const port: number = 8000

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

// Setup server
if (process.env.NODE_ENV != 'test')
	app.listen(port, () => {
		console.log(`App listening on port: ${port}`)
	})

module.exports = app
