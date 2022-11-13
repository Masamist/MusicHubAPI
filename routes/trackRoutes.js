const express = require('express')
const trackController = require('./../controllers/trackController')

const router = express.Router();

// router.param('id', tourController.checkID)

router.route('/top-5-rating-tracks')
  .get( trackController.getTopFiveRatingTracks, trackController.getAllTracks)

router.route('/')
  .get( trackController.getAllTracks )
  .post( trackController.createTrack )
router.route('/:id')
  .get( trackController.getTrack )
  .patch( trackController.updateTrack )
  .delete( trackController.deleteTrack )

module.exports = router

