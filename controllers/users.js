const User = require('../models/User.js')

module.exports = {
	index: (req, res) => {
		User.find({}, (err, users) => {
			res.json(users)
		})
	},

	show: (req, res) => {
		User.findById(req.params.id, (err, user) => {
			res.json(user)
		})
	}
}