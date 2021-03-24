const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  response: {
    type: Number,
    enum: [1,2,3,4,5],
    required: true
  },
  respondent: {
    // References use the type ObjectId
    type: mongoose.Schema.Types.ObjectId,
    // the name of the model to which they refer
    ref: 'User'
  }
}, {
    timestamps: true
})

module.exports = responseSchema
