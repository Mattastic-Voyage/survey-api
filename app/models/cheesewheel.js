
const mongoose = require('mongoose')

const cheesewheelSchema = new mongoose.Schema({
  variety: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  health: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('CheeseWheel', cheesewheelSchema)
