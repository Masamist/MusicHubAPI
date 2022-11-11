const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema({
  name: {
    required: [true, 'A playlist must have a name'],
    type: String,
    trim: true
  },
  isPrivate: {
    type: String,
    default: true,
  },
  tracks: [
    {
      id: {
        type: Number,
        required: [true, 'A track must have an id']
      },
      trackId: {
        type: Number,
        required: [true, 'A track must have a trackId']
      },
      dateAdded: {
        type:Date,
        default:Date.now()
      }
    }
  ],
  lastUpdated: Date
})

const Playlist = mongoose.model('Playlist', playlistSchema)

module.exports = Playlist