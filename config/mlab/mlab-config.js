var mongoose = require('mongoose')
var connectionString = "mongodb://student:student@ds056789.mlab.com:56789/burger-shack"
var connection = mongoose.connection




mongoose.connect(connectionString, {
    useMongoClient: true,
    keepAlive: {socketOptions: {keepAlive: 300000, connectionTimeoutMS: 30000}}
})

connection.on('error', console.error.bind(console, 'connection error: '))

connection.once('open', ()=>{
    console.log('Connected to DataBase BRO!!!')
})