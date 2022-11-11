const mongoose = require('mongoose')

const trackSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    required: [true, 'A track must have a name'],
    type: String,
    trim: true
  },
  genre: {
    type: String,
    required: true,
  },
  artist: {
    id: {
      type: Number,
      required: [true, 'A artist must have an id'],
    },
    name: {
      type: String,
      required: [true, 'A artist must have a name'],
    },
    slug: String,
  },
  release:{
    id: {
      type: Number,
      required: [true, 'A release must have an id'],
    },
    title: {
      type: String,
      required: [true, 'A release must have a title'],
    },
    artist: {
      type: String,
      required: [true, 'A artist must have a name'],
    },
    type: {
      type: String,
      default: "Album",
    },
    releaseDate: Date,
  },
  ratingAvarage: {
    type: Number,
    default: 3.5
  }
})

const Track = mongoose.model('Track', trackSchema)

module.exports = Track