const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
  name: {type: 'string'},
  phone: {type: 'number'},
  email: {type: 'string'},
  type: {type: 'string'}
})

module.exports = mongoose.model('Contact', ContactSchema)