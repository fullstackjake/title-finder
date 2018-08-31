const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const films = require('./routes/api/films')

const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// Use Route
app.use('/api/films', films)

const port = process.env.PORT || 3000

app.listen(port, () =>
  console.log(`Server running on  http://localhost:${port}`)
)
