import express from 'express'
const app = express()
const port: number = 8000

app.get('/ping', (req, res) => {
	res.status(200).json({ data: 'pong' })
})

app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`)
})

module.exports = app
