const Playlist = require('./../models/playlistModel')

// Get a single track Method
exports.getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find(req.query)
    res.status(200).json({
      status: 'success',
      results: playlists.length,
      data: {
        playlists
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

// Get a single track Method
exports.getPlaylist = async(req, res) => {
  try {
    // Not sure
    const playlist = await Playlist.findById(req.params.id)

    res.status(200).json({
      status: 'success',
      data: {
        playlist
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

// Get a single track Method
exports.createPlaylist = async(req, res) => {
  try {
    // Not sure
    const newPlaylist = await Playlist.create(req.body)

    res.status(201).json({
      status: 'created',
      data: {
        newPlaylist
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

// Update a track Method
exports.updatePlaylist = async(req, res) => {
  try {
    // Not sure
    const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidations: true
    })
    res.status(200).json({
      status: 'updated',
      data: { playlist }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

// Delete a track Method
exports.deletePlaylist = async(req, res) => {
  try {
    await Playlist.findByIdAndDelete(req.params.id)
    res.status(204).json({
      status: 'deleted',
      data: null
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}
