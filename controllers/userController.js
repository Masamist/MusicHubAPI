const User = require('../models/userModel')

// Get a single track Method
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
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
exports.getUser = async(req, res) => {
  try {
    // Not sure
    const user = await User.findById(req.params.id)

    res.status(200).json({
      status: 'success',
      data: {
        user
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
exports.createUser = async(req, res) => {
  try {
    // Not sure
    const newUser = await User.create(req.body)

    res.status(201).json({
      status: 'created',
      data: {
        newUser
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
exports.updateUser = async(req, res) => {
  try {
    // Not sure
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidations: true
    })
    res.status(200).json({
      status: 'updated',
      data: { user }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

// Delete a track Method
exports.deleteUser = async(req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
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
