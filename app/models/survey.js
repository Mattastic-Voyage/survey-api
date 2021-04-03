const mongoose = require('mongoose')

const responseSchema = require('./response')

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  // Add a `reviews` subdocument array of type reviewSchema
  responses: [responseSchema],
  // Add a `surveys` subdocument array of Restaurant references
  participants: [
    {
      // the type of a reference is an ObjectId
      type: mongoose.Schema.Types.ObjectId,
      // the type of the document. the model to use when populate is called
      ref: 'Participant'
    }
  ],
  owner: {
    // References use the type ObjectId
    type: mongoose.Schema.Types.ObjectId,
    // the name of the model to which they refer
    ref: 'User'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Survey', surveySchema)
