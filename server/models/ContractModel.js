const mongoose = require('mongoose')
const Contact = require('./ContactModel').schema
const ToDo = require('./ToDoModel').schema

const DealSchema = new mongoose.Schema({
  address: {type: 'string'},
  mls: {type: 'number'},
  price: {type: 'number'},
  contacts: [Contact],
  checklist: {type: 'array'},
  customChecklist: [ToDo]
})

module.exports = mongoose.model('Deal', DealSchema)