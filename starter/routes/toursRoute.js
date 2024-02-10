const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('./../controllers/authController');
const app = express();
app.use(express.json());
const router = express.Router();

// router.param('id', tourController.checkID);
router.route('/tour-5-cheap').get(tourController.alaisTopTours, tourController.getTours);
router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);
router
  .route('/')
  .get(tourController.getTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(authController.protect,authController.restrictTo('admin','lead-guide'), tourController.deleteTour);

module.exports = router;
