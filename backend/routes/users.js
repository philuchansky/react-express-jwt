const
	express = require('express'),
	usersRouter = new express.Router(),
	usersCtrl = require('../controllers/users.js'),
	verifyToken = require('../serverAuth.js').verifyToken


// index route (get all users) and create route (create a new user)
usersRouter.route('/')
	.get(usersCtrl.index)
	.post(usersCtrl.create)

// Authenticate route (login)
usersRouter.post('/authenticate', usersCtrl.authenticate)
// Find one user for Auth; Seharusnya tidak perlu karena bisa digabung dengan authenticate
usersRouter.route('/:id')
	.get(usersCtrl.show)

usersRouter.route('/email/:email')
	.get(usersCtrl.showByEmail)

// ALL ROUTES BELOW THIS LINE ARE PROTECTED
usersRouter.use(verifyToken)

usersRouter.route('/:id')
	.patch(usersCtrl.update)
	.delete(usersCtrl.destroy)

module.exports = usersRouter