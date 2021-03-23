const express = require('express')

const Survey = require('./../models/survey')

// const handle404 = require('./../../lib/custom_errors')

const passport = require('passport')

// const requireOwnership = customErrors.requireOwnership

// const removeBlanks = ('../../lib/remove_blank_fields.js')

const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

// Create a Survey 
router.post('/survey', requireToken, (req, res, next) => {
    // request data from the client and store to variable
    const surveyData = req.body.survey
    // request id from user object and store to the owner
    surveyData.owner = req.user._id

    Survey.create(surveyData)
        .then((survey) => {
            res.status(201).json(survey)
        })
        .catch(next)
})

// Update a Survey (Auth)

// Update a Survey (Response)

// Index Survey(Show all surveys)

// Show each Survey (Auth)

// Show each Survey response (NonAuth)

// Delete Survey
module.exports = router