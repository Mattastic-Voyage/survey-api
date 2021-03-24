const express = require('express')
const router = express.Router()

// require survey model
const Survey = require('./../models/survey')
const handle404 = require('../../lib/custom_errors')

// CREATE
// POST /responses/
router.post('/responses', (req, res, next) => {
  // get the response data from the body of the request
  const responseData = req.body.response
  // get the survey id from the body
  const surveyId = responseData.surveyId
  // find the survey by its id
  Survey.findById(surveyId)
    .then(handle404)
    .then(survey => {
      // add response to survey
      survey.responses.push(responseData)
      // save survey
      return survey.save()
    })
    // send responsne back to client
    .then(survey => res.status(201).json({survey: survey}))
    .catch(next)
})

// DESTROY
// DELETE /responses/:id
router.delete('/responses/:responseId', (req, res, next) => {
  const responseId = req.params.responseId
  const surveyId = req.body.response.surveyId
  Survey.findById(surveyId)
    .then(handle404)
    .then(survey => {
      survey.responses.id(responseId).remove()
      // Alternatively
      // surveys.responses.pull(id)

      return survey.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

// UPDATE
// PATCH /responses/:id
router.patch('/responses/:responseId', (req, res, next) => {
  const responseId = req.params.responseId
  const responseData = req.body.response
  const surveyId = responseData.surveyId

  Survey.findById(surveyId)
    .then(handle404)
    .then(survey => {
      const response = survey.responses.id(responseId)
      response.set(responseData)
      return survey.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
