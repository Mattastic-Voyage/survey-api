const express = require('express')
const router = express.Router()

// require survey model
const Survey = require('./../models/survey')
const Participant = require('./../models/participant')
const handle404 = require('../../lib/custom_errors')

// INDEX
// GET /surveys
router.get('/surveys', (req, res, next) => {
  Survey.find()
    .populate('owner')
    .populate('responses.respondent')
    .populate('participants')
    .then(surveys => res.json({ surveys: surveys }))
    .catch(next)
})

// SHOW
// GET /surveys/:id
router.get('/surveys/:id', (req, res, next) => {
  const id = req.params.id
  Survey.findById(id)
    .populate('owner')
    .populate('responses.respondent')
    .populate('participants')
    .then(handle404)
    .then(survey => res.json({ survey: survey}))
    .catch(next)
})

// CREATE
// POST /surveys/
router.post('/surveys', (req, res, next) => {
  const surveyData = req.body.survey
  Survey.create(surveyData)
    .then(survey => res.status(201).json({survey: survey}))
    .catch(next)
})

// UPDATE
// PATCH /surveys/:id
router.patch('/surveys/:id', (req, res, next) => {
  const id = req.params.id
  const surveyData = req.body.survey
  Survey.findById(id)
    .then(handle404)
    .then(survey => survey.updateOne(surveyData))
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /surveys/:id
router.delete('/surveys/:id', (req, res, next) => {
  const id = req.params.id
  Survey.findById(id)
    .then(handle404)
    .then(survey => survey.deleteOne())
    .then(() => res.sendStatus(204))
    .catch(next)
})

// Bonus: Many to Many
// PATCH add a participant to a survey.
router.patch('/surveys/:surveyId/participants', (req, res, next) => {
  // extract the surveyId route parameter
  const surveyId = req.params.surveyId

  // extract the participantId from the incoming request data
  const participantId = req.body.survey.participantId

  // Find the restuarant
  Survey.findById(surveyId)
    .then(handle404)
    .then(survey => {
      // Add participant to the survey's participants refs subdocument array
      survey.participants.push(participantId)

      // save the changes
      return survey.save()
    })
    // Find the participant
    .then(() => Participant.findById(participantId))

    .then(participant => {
      // Add survey to the participant's surveys refs subdocument array
      participant.surveys.push(surveyId)

      // save the changes
      return participant.save()
    })
    // respond with 204 No Content
    .then(() => res.sendStatus(204))
    .catch(next)
})

// Bonus: Many to Many
// DELETE remove a participant from a survey.
router.delete('/surveys/:surveyId/participants', (req, res, next) => {
  const surveyId = req.params.surveyId
  const participantId = req.body.survey.participantId

  // Find the restuarant
  Survey.findById(surveyId)
    .then(handle404)
    .then(survey => {
      // Remove participant from the survey's participants refs subdocument array
      survey.participants.pull(participantId)

      // save the changes
      return survey.save()
    })
    // Find the participant
    .then(() => Participant.findById(participantId))
    .then(participant => {
      // Remove survey from the participant's surveys refs subdocument array
      participant.surveys.pull(surveyId)
      // save the changes
      return participant.save()
    })
    // respond with 204 No Content
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
