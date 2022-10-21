const
    express = require('express'),
    kontenRouter = new express.Router(),
    kontenCtrl = require('../controllers/Konten.js'),
    verifyToken = require('../serverAuth.js').verifyToken

kontenRouter.use(verifyToken)
kontenRouter.route('/')
    .get(kontenCtrl.index)
    .post(kontenCtrl.create)
kontenRouter.route('/:id')
    .get(kontenCtrl.show)
    .patch(kontenCtrl.update)
    .delete(kontenCtrl.destroy)



module.exports = kontenRouter