var mongoose = require('mongoose')


var schema = new mongoose.Schema({
    name: { type: String, required: true },
    sizes: {}
})


module.exports = mongoose.model('Drink', schema)