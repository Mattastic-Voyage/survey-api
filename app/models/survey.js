const mongoose = require('mongoose')

// Create Survey Schema
const surveySchema = new mongoose.Schema({
    title: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    questions: [{ type: new mongoose.Schema({
        question: {
            type: String,
            required: true
        },
        response: [{ type: Number }]

    })}]
}, {
    timestamps: true
})
module.exports = mongoose.model('Survey', surveySchema)