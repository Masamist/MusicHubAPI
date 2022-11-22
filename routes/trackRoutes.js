const express = require('express')
const trackController = require('./../controllers/trackController')
const authController = require('./../controllers/authController')

const router = express.Router();

// router.param('id', tourController.checkID)

router.route('/top-5-rating-tracks')
  .get( authController.protect, trackController.getTopFiveRatingTracks, trackController.getAllTracks)

router.route('/')
  .get( authController.protect, trackController.getAllTracks )
  .post( authController.protect, trackController.createTrack )
router.route('/:id')
  .get( authController.protect, trackController.getTrack )
  .patch( authController.protect, trackController.updateTrack )
  .delete( authController.protect, trackController.deleteTrack )

module.exports = router

