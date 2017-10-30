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
	},

	create: (req, res) => {
		User.create(req.body, (err, user) => {
			res.json({success: true, message: "User created.", user})
		})
	},

	update: (req, res) => {
		User.findById(req.params.id, (err, user) => {
			Object.assign(user, req.body)
			user.save((err, updatedUser) => {
				res.json({success: true, message: "User updated.", user})
			})
		})
	},

	destroy: (req, res) => {
		User.findByIdAndRemove(req.params.id, (err, user) => {
			res.json({success: true, message: "User deleted.", user})
		})
	}
}