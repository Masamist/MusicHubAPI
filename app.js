const express = require('express');
const morgan = require('morgan')
const trackRouter = require('./routes/trackRoutes')
const playlistRouter = require('./routes/playlistRoutes')
const userRouter = require('./routes/userRoutes')

const app = express()


// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(express.static(`${__dirname} / public`))

app.use((req, res, next) => {
  next()
})

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  next()
})

// ROUTE
app.use('/api/v1/musichub/tracks', trackRouter)
app.use('/api/v1/musichub/playlists', playlistRouter)
app.use('/api/v1/musichub/users', userRouter)

module.exports = app