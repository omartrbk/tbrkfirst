var mongoose = require('mongoose')

var billSchema = mongoose.Schema({
    name: { type: mongoose.Types.ObjectId },
  
    perviosReading: String,

    currentReading: String,
    rate : Number,
    amountdue: Number,
    
   
    
},{ timestamps: true })



var bill = mongoose.model('bill', billSchema)
module.exports = bill