var mongoose = require('mongoose')
var connectionString = "mongodb://burger:burger@ds064198.mlab.com:64198/burger_joint"
var connection = mongoose.connection




mongoose.connect(connectionString, {
    useMongoClient: true,
    keepAlive: {socketOptions: {keepAlive: 300000, connectionTimeoutMS: 30000}}
})

connection.on('error', console.error.bind(console, 'connection error: '))

connection.once('open', ()=>{
    console.log('Connected to DataBase BRO!!!')
})