const paymentModel = require ("../model/payment")

//getPayment 

var getPayment =(req,res) =>{
    res.render('payment')
}

//insert into Paymennt 
var insertPayment = async (req,res) =>{
    let data = {
      bill: req.body.bill,
    
      amountdue: req.body.amountdue,
  
      amountpaid: req.body.amountpaid,
  
         
    }
  
   await new  paymentModel(data).save().then(success =>{
     res.json({messsage : "success"})
     })
   }
  
   //update Payment 
    var UpdatePayment = async(req,res) =>{
              
      let data = {
        bill: req.body.bill,
      
        amountdue: req.body.amountdue,
    
        amountpaid: req.body.amountpaid,
    
           
      }
  
      billModel.findOneAndUpdate({_id : req.body.id}, data).then(success =>{
     res.json({message : "success"})
      })

 }
  

            module.exports = {
                insertPayment,
                UpdatePayment,
                getPayment,
            }