const mongoose = require('mongoose')

const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hometown: {
    type: String,
    required: true
  },
  // Add a `surveys` subdocument array of Restaurant references
  surveys: [
    {
      // the type of a reference is an ObjectId
      type: mongoose.Schema.Types.ObjectId,
      // the type of the document. the model to use when populate is called
      ref: 'Survey'
    }
  ]
}, {
  timestamps: true
})

module.exports = mongoose.model('Participant', participantSchema)
