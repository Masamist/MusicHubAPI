const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema({
  title: {
    required: [true, 'A playlist must have a name'],
    type: String,
    trim: true
  },
  isPrivate: {
    type: String,
    default: true,
  },
  user: {
    id: Number,
    user_name: String,
  },
  tracks: [
    {
      id: {
        type: String,
        required: [true, 'A track must have an id']
      },
      trackTitle: String,
      trackArtist: String
    }
  ],
  lastUpdated: {
    type:Date,
    default:Date.now()
  }
})

const Playlist = mongoose.model('Playlist', playlistSchema)

module.exports = Playlist