const { response } = require('express')
const express = require('express')

const app = express()


var customerCntrl = require('../controlls/cusControll')
var billCntrl = require('../controlls/bills')
var paymentCntrl = require('../controlls/payCntrl')



//customers Routes
var getapp = app.get('',customerCntrl.getapp)
var getCustomers = app.get('/customer',customerCntrl.getCustomers)
var inserCus = app.post('/custProcess',customerCntrl.inserCus)
var delCustomers =app.post('/cus_delete/:id',customerCntrl.delCustomers)
 



//bills routes
var getBills = app.get('/bill',billCntrl.getBills)
var insertBills = app.post('/bill_process',billCntrl.insertBills)




 ///Payment Routes
 var getPayment = app.get('/payment',paymentCntrl.getPayment)
 var insertpayment = app.post('/insertPayment',paymentCntrl.insertPayment)
 var UpdatePayment = app.post('/update_pay/:id',paymentCntrl.UpdatePayment)


 




module.exports = app