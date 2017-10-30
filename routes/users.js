const
	express = require('express'),
	usersRouter = new express.Router(),
	usersCtrl = require('../controllers/users.js')

usersRouter.route('/')
	.get(usersCtrl.index)

module.exports = usersRouter