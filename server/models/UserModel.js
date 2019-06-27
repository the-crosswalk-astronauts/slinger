const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  firstName: {type: 'string', required: true},
  lastName: {type: 'string', required: true},
  email: {type: 'string', required: true},
  active: [Contract],
  archive: [Contract]
})

module.exports = mongoose.model('User', UserSchema)