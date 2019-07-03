const mongoose = require('mongoose')

const ToDoModel = new mongoose.Schema({
  text: {type: 'string'},
  category: {type: 'string'},
  completed: {type: 'number'},
  notes: {type: 'string'}
})

module.exports = mongoose.model('ToDo', ToDoModel)