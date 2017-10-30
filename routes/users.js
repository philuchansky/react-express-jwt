const
	express = require('express'),
	usersRouter = new express.Router()

usersRouter.route('/')
	.get((req, res) => {
		res.json({message: 'Users index.'})
	})

module.exports = usersRouter