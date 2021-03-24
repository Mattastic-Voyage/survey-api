const express = require('express')
const router = express.Router()

// require participant model
const Participant = require('./../models/participant')
const handle404 = require('./../lib/custom_errors')

// INDEX
// GET /participants
router.get('/participants', (req, res, next) => {
  Participant.find()
    .populate('surveys')
    .then(participants => res.json({ participants: participants }))
    .catch(next)
})

// SHOW
// GET /participants/:id
router.get('/participants/:id', (req, res, next) => {
  const id = req.params.id
  Participant.findById(id)
    .populate('surveys')
    .then(handle404)
    .then(participant => res.json({ participant: participant}))
    .catch(next)
})

// CREATE
// POST /participants/
router.post('/participants', (req, res, next) => {
  const participantData = req.body.participant
  Participant.create(participantData)
    .then(participant => res.status(201).json({ participant: participant }))
    .catch(next)
})

// UPDATE
// PATCH /participants/:id
router.patch('/participants/:id', (req, res, next) => {
  const id = req.params.id
  const participantData = req.body.participant
  Participant.findById(id)
    .then(handle404)
    .then(participant => participant.updateOne(participantData))
    .then(() => res.sendStatus(204))
    .catch(next)
})

// DESTROY
// DELETE /participants/:id
router.delete('/participants/:id', (req, res, next) => {
  const id = req.params.id
  Participant.findById(id)
    .then(handle404)
    .then(participant => participant.deleteOne())
    .then(() => res.sendStatus(204))
    .catch(next)
})



module.exports = router
