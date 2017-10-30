const
	mongoose = require('mongoose'),
	userSchema = new mongoose.Schema({
		name: { type: String },
		email: { type: String, required: true },
		password: { type: String, required: true }
	})

const User = mongoose.model('User', userSchema)
module.exports = User