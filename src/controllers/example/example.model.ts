import mongoose = require('mongoose')
const exampleSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	Example: String,
})
module.exports = mongoose.model('Example', exampleSchema)
