var mongoose = require('mongoose')

var customer_schema = mongoose.Schema({
    name: String,
  
    phone: String,

    district: String,


})


var customer = mongoose.model('customers', customer_schema)
module.exports = customer