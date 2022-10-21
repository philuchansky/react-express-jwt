const User = require('../models/User.js')
const signToken = require('../serverAuth.js').signToken

module.exports = {
	// list all users
	index: (req, res) => {
		User.find({}, (err, users) => {
			res.json(users)
		})
	},

	// get one user
	show: (req, res) => {
		console.log("Current User:")
		User.findOne({username: req.params.id}, (err, user) => {
			res.json(user)
		})
		// User.findById(req.params.id, (err, user) => {
		// 	res.json(user)
		// })
	},

	// create a new user
	create: (req, res) => {
		User.create(req.body, (err, user) => {
			if(err) return res.json({success: false, code: err.code})
			// once user is created, generate a token to "log in":
			const token = signToken(user)
			res.json({success: true, message: "User created. Token attached.", token})
		})
	},

	// update an existing user
	update: (req, res) => {
		User.findOneAndUpdate({username: req.params.id}, req.body, {new: true}, (err, user) => {
			if(err) return res.json({success: false, code: err.code})
			res.json({success: true, message: "User updated.", user})
		}
		)
	},

	// delete an existing user
	destroy: (req, res) => {
		User.findOneAndDelete(req.params.id, (err, user) => {
			res.json({success: true, message: "User deleted.", user})
		})
	},

	// the login route
	authenticate: (req, res) => {
		// check if the user exists
		User.findOne({username: req.body.username}, (err, user) => {
			// if there's no user or the password is invalid
			if(!user || !user.validPassword(req.body.password)) {
				// deny access
				return res.json({success: false, message: "Invalid credentials."})
			}
			const token = signToken(user)
			res.json({success: true, message: "Token attached.", token})
		})
	},
	showByEmail: (req, res) => {
		User.findOne({email: req.params.email}, (err, user) => {
			res.json(user)
		}
		)
	}
}