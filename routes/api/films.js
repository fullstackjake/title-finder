const express = require('express')
const router = express.Router()

// Load Film Model if needed?
// const Film = require('../../models/film');

// @Access  Public @Desc See all film data @Route GET api/films/all
router.get('/all', (req, res) => res.json({ msg: 'Films Route Work' }))

module.exports = router
