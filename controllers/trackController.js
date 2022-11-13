const Track = require('./../models/trackModel')
const APIFeatures = require('./../utils/apiFeatures')

// Top 5 ratingAverage
exports.getTopFiveRatingTracks = async (req, res, next) => {
    req.query.filter = 'ratingAverage'
    req.query.sort = '-ratingAverage'
    req.query.limit = '5'
    req.query.fields = 'title, genre, artist, ratingAverage'
    next()
  }

// Get all tracks Method
exports.getAllTracks = async (req, res) => {
  try {
    const features = new APIFeatures(Track.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .pagenate()

    const tracks = await features.query

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
    const newTrack = await Track.create(req.body)

    res.status(201).json({
      status: 'created',
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
      status: 'updated',
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
    await Track.findByIdAndDelete(req.params.id)
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
