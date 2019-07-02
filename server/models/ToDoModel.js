const mongoose = require('mongoose')

const ToDoModel = new mongoose.Schema({
  step: {type: 'number'},
  completed: {type: 'number'},
  notes: {type: 'string'}
})

module.exports = mongoose.model('ToDo', ToDoModel)