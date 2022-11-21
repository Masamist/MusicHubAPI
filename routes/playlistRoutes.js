const express = require('express')
const playlistController = require('./../controllers/playlistController')
const authController = require('./../controllers/authController')

const router = express.Router()

// router.param
router.route('/')
  .get( authController.protect, playlistController.getAllPlaylists )
  .post( playlistController.createPlaylist )
router.route('/:id')
  .get( playlistController.getPlaylist )
  .patch( playlistController.updatePlaylist )
  .delete( playlistController.deletePlaylist )

module.exports = router;