const express = require('express');
const app = express();
const UserController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
app.use(express.json());

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgetPassword', authController.forgetPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword,
);

router.patch('/updateMe', authController.protect, UserController.updateMe);
router.delete('/deleteMe', authController.protect, UserController.deleteMe);

router
  .route('/')
  .get(UserController.getallUsers)
  .post(UserController.createUsers);
router
  .route('/:id')
  .get(UserController.getUser)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);
module.exports = router;
