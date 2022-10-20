const
	express = require('express'),
	usersRouter = new express.Router(),
	usersCtrl = require('../controllers/users.js'),
	verifyToken = require('../serverAuth.js').verifyToken

usersRouter.route('/')
	.get(usersCtrl.index)
	.post(usersCtrl.create)

usersRouter.post('/authenticate', usersCtrl.authenticate)
usersRouter.route('/:id')
	.get(usersCtrl.show)

usersRouter.route('/email/:email')
	.get(usersCtrl.showByEmail)

usersRouter.use(verifyToken)

usersRouter.route('/:id')
	.patch(usersCtrl.update)
	.delete(usersCtrl.destroy)

module.exports = usersRouter