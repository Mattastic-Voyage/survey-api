const express = require('express')
const router = express.Router()

const CheeseWheel = require('./../models/cheesewheel')
// const handle404 = require('../../lib/custom_errors')

// Index
// Get /cheesewheels
router.get('/cheesewheels', (req, res, next) => {
  CheeseWheel.find()
    .populate('owner')
    .then(cheesewheels => res.json({ cheesewheels: cheesewheels }))
    .catch(next)
})

// Create
// POST /cheesewheels/
router.post('/cheesewheels', (req, res, next) => {
  const cwData = req.body.cheesewheel
  CheeseWheel.create(cwData)
    .then(cheesewheel => res.status(201).json({cheesewheel: cheesewheel}))
    .catch(next)
})

module.exports = router