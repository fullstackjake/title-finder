const express = require('express')
const router = express.Router()

// Load Film Model if needed?
const Titles = require('../../models/Titles')

// @Access  Public @Desc See all film data @Route GET api/films/all
router.get('/all', (req, res) => {
  Titles.find({}, function(err, title) {
    if (err) {
      res.send('Something went wrong')
    }
    console.log(title)
    res.json(title)
  })
})

router.post('/titles', (req, res) => {
  Titles.find({ TitleName: { $regex: req.body.title } }, function(err, title) {
    if (err) {
      res.send('Something went wrong in titles')
    }

    console.log(title)
    res.json(title)
  })
})

module.exports = router
