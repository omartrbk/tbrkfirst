const billModel = require('../model/bill')
const customerModel = require('../model/customer')
const paymentModel = require('../model/payment')





//get all bills 
var getBills = async (req,res)=>{

    const data=await billModel.
    
    
    aggregate([

        {
            $lookup: {
              from: "customers",
              localField: "name",
              foreignField: "_id",
              as: "cust",
            },
          },

          {
            $unwind:"$cust"
          },{

            $project:{
                createdAt:1,
                amountdue:1 ,
                perviosReading:1,
                rate:1 ,
                currentReading:1 ,
               "cust.name":1,
               "cust.phone":1,
               "cust._id":1,
                

                
            }
          }
    ])
    res.render('bill',{data})
    // res.render('bill')
}


//HANDLE CUSTOMER INSERTION
var insertBills = async (req,res)=>{
    try{
        let obj = {
            name : req.body.name,
            perviosReading: req.body.perviosReading,
            currentReading: req.body.currentReading,
            rate : req.body.rate,
            amountdue: req.body.amountdue,
        }
        

        if(req.body.op === 'I'){
            new billModel(obj).save().then(success=>{
              res.ridirect('bill')
            }).catch(err=>{
                console.log('err', err)
            })
        }else{
            let bill = await billModel.findOne({_id: req.body.id})
            bill.name = req.body.name,
            bill.phone = req.body.phone,
            bill.district= req.body.district
  
            bill.save().then(success=>{
              res.ridirect('bill')
            }).catch(err=>{
                console.log('err', err)
            })
  
        }
  
    }catch(error){
        res.send({
            success: false,
            msg: error
        })
    }
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
            let id = {_id : req.body.id}
            
          }
module.exports ={
    getBills,
    insertBills,
    insertPayment,
    UpdatePayment
}

