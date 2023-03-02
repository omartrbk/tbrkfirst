const express = require('express')
const dotenv = require('dotenv').config()
const ejs = require('ejs')
const connectdb = require('./config/db.js')

const app = express()


Port = process.env.PORT || 5000


connectdb()
//ejs set up 
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)

//json
 app.use(express.json())
//middle ware
app.use(express.urlencoded({ extends: true }))
app.use(express.json())

  //router
  app.use('/', require('./router/route'))


  //app running 
  app.listen(Port,()=>{
    console.log(`app is ruuning on Port ${Port}`)
})



