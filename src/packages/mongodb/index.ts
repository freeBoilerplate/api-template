import mongoose = require('mongoose')
const mongoString = process.env.MONGO_CONNECTION_STRING

let database
const mongoConnect = () => {
	mongoose.connect(mongoString)
	database = mongoose.connection

	database.on('error', (err: any) => {
		console.log(err)
	})

	database.once('connected', () => {
		console.log('Database Connected')
	})
}

export { mongoConnect, database }
