const express = require('express')
const router = express.Router()

const CheeseWheel = require('./../models/cheesewheel')
const handle404 = require('../../lib/custom_errors')

// Create
// POST /cheesewheels/
router.post('/cheesewheels', (req, res, next) => {
  const cwData = req.body.cheesewheel
  CheeseWheel.create(cwData)
    .then(cheesewheel => res.status(201).json({cheesewheel: cheesewheel}))
    .catch(next)
})

// Index
// GET /cheesewheels
router.get('/cheesewheels', (req, res, next) => {
  CheeseWheel.find()
    .populate('owner')
    .then(cheesewheels => res.json({ cheesewheels: cheesewheels }))
    .catch(next)
})

// Show
// GET /cheesewheels/:id
router.get('/cheesewheels/:id', (req, res, next) => {
  const id = req.params.id
  CheeseWheel.findById(id)
    .populate('owner')
    .then(handle404)
    .then(cheesewheel => res.json({ cheesewheel: cheesewheel }))
    .catch(next)
})

// Update
// PATCH /cheesewheels/:id
router.patch('/cheesewheels/:id', (req, res, next) => {
  const id = req.params.id
  const cwData = req.body.cheesewheel
  CheeseWheel.findById(id)
    .then(handle404)
    .then(cheesewheel => cheesewheel.updateOne(cwData))
    .then(() => res.sendStatus(204))
    .catch(next)
})

// Destroy
// DELETE /cheesewheels/:id
router.delete('/cheesewheels/:id', (req, res, next) => {
  const id = req.params.id
  CheeseWheel.findById(id)
    .then(handle404)
    .then(cheesewheel => cheesewheel.deleteOne())
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
