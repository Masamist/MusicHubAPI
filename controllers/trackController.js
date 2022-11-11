const Track = require('./../models/trackModel')

// Get all tracks Method
exports.getAllTracks = async (req, res) => {
  try {
    const tracks = await Track.find()

    res.status(200).json({
      status: 'success',
      results: tracks.length,
      data: {
        tracks
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
exports.getTrack = async(req, res) => {
  try {
    // Not sure
    const track = await Track.findById(req.params.id)

    res.status(200).json({
      status: 'success',
      data: {
        track
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
exports.createTrack = async(req, res) => {
  try {
    // Not sure
    const newTrack = await Track.findById(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        newTrack
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
exports.updateTrack = async(req, res) => {
  try {
    // Not sure
    const track = await Track.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidations: true
    })
    res.status(200).json({
      status: 'success',
      data: { track }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

// Delete a track Method
exports.deleteTrack = async(req, res) => {
  try {
    await Track.findByIdAndUpdate(req.params.id)
    res.status(204).json({
      status: 'success',
      data: null
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}
