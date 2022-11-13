const express = require('express')
const playlistController = require('./../controllers/playlistController')

const router = express.Router()

// router.param
router.route('/')
  .get( playlistController.getAllPlaylists )
  .post( playlistController.createPlaylist )
router.route('/:id')
  .get( playlistController.getPlaylist )
  .patch( playlistController.updatePlaylist )
  .delete( playlistController.deletePlaylist )

module.exports = router;