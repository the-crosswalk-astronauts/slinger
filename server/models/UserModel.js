const mongoose = require('mongoose')
const Deal = require('./ContractModel')

const UserSchema = new mongoose.Schema({
  firstName: {type: 'string', required: true},
  lastName: {type: 'string', required: true},
  email: {type: 'string', required: true},
  active: [Deal],
  archive: [Deal]
})

module.exports = mongoose.model('User', UserSchema)