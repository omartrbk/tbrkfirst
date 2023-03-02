var mongoose = require('mongoose')

var paymentSchema = mongoose.Schema({
    bill: { type: mongoose.Types.ObjectId },
  
    amountdue: Number,

    amountpaid: Number,

    
   
    
},{ timestamps: true })



var payment = mongoose.model('payment', paymentSchema)
module.exports = payment