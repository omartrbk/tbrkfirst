const { response } = require('express')
const express = require('express')

const app = express()


var customerCntrl = require('../controlls/cusControll')
var billCntrl = require('../controlls/bills')



//customers Routes
var getapp = app.get('',customerCntrl.getapp)
var getCustomers = app.get('/customer',customerCntrl.getCustomers)
var inserCus = app.post('/custProcess',customerCntrl.inserCus)
var delCustomers =app.post('/cus_delete/:id',customerCntrl.delCustomers)
 



//bills routes
var getBills = app.get('/bill',billCntrl.getBills)
var insertBills = app.post('/bill_process',billCntrl.insertBills)
var payment = app.post('/insertPayment',billCntrl.insertPayment)
 var UpdatePayment = app.post('/update_pay/:id',billCntrl.UpdatePayment)



 




module.exports = app