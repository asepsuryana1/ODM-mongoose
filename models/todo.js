const mongoose = require('mongoose');



const todoSchema = new mongoose.Schema({
    title: String,
    complete: boolean
  });


  module.exports = mongoose.model('todo', todoSchema);