const
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
kontentSchema = new mongoose.Schema({
    title: {type: String},
    content: { type: String},
    date: {type: Date, default: Date.now},
    user: {type: String},
})


const Konten = mongoose.model('Konten', kontentSchema)
module.exports = Konten