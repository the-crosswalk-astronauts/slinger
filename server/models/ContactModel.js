const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
  name: {type: 'string'},
  phone: {type: 'string'},
  email: {type: 'string'},
  title: {type: 'string'}
})

module.exports = mongoose.model('Contact', ContactSchema)