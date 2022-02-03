const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Note = new Schema(
  {
    title: {type: String, require: true},
    time: {type: String, require: true},
    content: {type: String, require: true},
  },
  { timestamp: true},
)

module.exports = mongoose.model('note', Note)
