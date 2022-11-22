const express = require('express')
const playlistController = require('./../controllers/playlistController')
const authController = require('./../controllers/authController')

const router = express.Router()

// router.param
router.route('/')
  .get( authController.protect, playlistController.getAllPlaylists )
  .post( authController.protect, playlistController.createPlaylist )
router.route('/:id')
  .get( authController.protect, playlistController.getPlaylist )
  .patch( authController.protect, playlistController.updatePlaylist )
  .delete( authController.protect, playlistController.deletePlaylist )

module.exports = router;