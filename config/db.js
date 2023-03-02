var mongoose = require('mongoose')

const url ="mongodb+srv://omartbrk123:KwrLnQjlz0Kxsgii@cluster0.vt4wxrt.mongodb.net/electeric"
connectdb = async() => {
    var con = await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log('conected db', con.connection.host)
}
module.exports = connectdb

