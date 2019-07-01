const mongoose = require('mongoose')

const DealSchema = new mongoose.Schema({
  address: {type: 'string'},
  mls: {type: 'number'},
  price: {type: 'number'},
  contacts: [Contact],
  checklist: [ToDo],
  customChecklist: [Todo]
})

module.exports = mongoose.model('Deal', DealSchema)