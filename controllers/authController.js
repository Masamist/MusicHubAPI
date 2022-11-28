const { promisify } = require('util')
const jwt = require('jsonwebtoken')
const User = require('./../models/userModel')

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
}

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name:req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm
    })

    const token = signToken(newUser._id)

    res.status(201).json({
      status:'success',
      token,
      data: {
        user: newUser
      }
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }
}

exports.login = async (req, res, next) => {
  const { email, password } = req.body

  try {
  // 1) Check if email and password exist
    if(!email || !password) {
      return res.status(400).send("All input is required")
    }
    // 2) Check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password')

    if(!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).send("Incorrest email or password")
    }

    // 3) If everything is ok, send tokento client
    const token = signToken(user._id);

    res.status(200).json({
      status: 'seccess',
      token
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'invalid Credentials'
    })
  }
}

exports.protect = async ( req, res, next) => {
  try {
    // 1) Getting token and check if it is there
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1]
    }
    // console.log(token)
    if(!token) {
      return res.status(403).send("A token is required for authentication")
    }
    // 2) Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    console.log(decoded)

    next()
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      message: "Invalid token"
    })
  }
}
