const customerModel = require('../model/customer')

//Root app req
const getapp = (req, res) => {
    res.render('index')
  }



//get All customers

var getCustomers =(req, res) => {
    customerModel.find({}).then((cus) => {
      res.render('customer', {
        data: cus
      })
    })
  }







//HANDLE CUSTOMER INSERTION
 var inserCus = async (req,res)=>{
    try{
        let obj = {
            name : req.body.name,
            phone : req.body.phone,
            district: req.body.district
        }
  
        if(req.body.op === 'I'){
            new customerModel(obj).save().then(success=>{
                res.redirect('customer')
            }).catch(err=>{
                console.log('err', err)
            })
        }else{
            let current_customers = await customerModel.findOne({_id: req.body.id})
            current_customers.name = req.body.name,
            current_customers.phone = req.body.phone,
            current_customers.district= req.body.district
  
            current_customers.save().then(success=>{
                res.redirect('customer')
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


  

  //delete Customers

  delCustomers =async(req, res) =>{
        
    console.log(req.body)
    const customerid = {_id : req.body.id}
    await customerModel.deleteOne(customerid).then(success =>{
           
    res.redirect('customer')

    })


}







  module.exports = {
    getapp,
    inserCus,
    getCustomers,
    delCustomers,

  }