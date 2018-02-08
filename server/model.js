const mongoose = require('mongoose')
const DB_URL = 'mongoose://localhost:27017/reduxApp'

mongoose.connect(DB_URL)

mongoose.connection.on('connected', function () {
  console.log('mongo connect success')
})