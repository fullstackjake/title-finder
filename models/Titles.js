const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const TitleSchema = new Schema({
  _id: Number,
  TitleName: String
})

module.exports = Title = mongoose.model('Title', TitleSchema, 'Titles')
