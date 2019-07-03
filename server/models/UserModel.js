const mongoose = require('mongoose')
const Deal = require('./ContractModel').schema

const UserSchema = new mongoose.Schema({
  firstName: {type: 'string', required: true},
  lastName: {type: 'string', required: true},
  email: {type: 'string', required: true},
  phone: {type:'number', required: true},
  brokerage: {type: 'string'},
  active: [Deal],
  archive: [Deal]
})

module.exports = mongoose.model('User', UserSchema)