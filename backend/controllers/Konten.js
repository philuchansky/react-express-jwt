const konten = require('../models/Konten');
const signToken = require('../serverAuth.js').signToken;

module.exports = {
//    // list all konten
   index: (req, res) => {
       konten.find({}, (err, konten) => {
           res.json(konten)
       })
   },
//    // get one konten
   show: (req, res) => {
       konten.findById(req.params.id, (err, konten) => {
           res.json(konten)
       })
   },
//    create a new konten
    create: (req, res) => {
        konten.create(req.body, (err, konten) => {
            res.json({success: true, message: "konten created. Token attached.",id: konten._id})
        })
    },
//    // update an existing konten
    update: (req, res) => {
        konten.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, konten) => {
            res.json({success: true, message: "konten updated.", konten})
        })
    },
//    // delete an existing konten
    destroy: (req, res) => {
        konten.findByIdAndRemove(req.params.id, (err, konten) => {
            res.json({success: true, message: "konten deleted.", konten})
        })
    }
}