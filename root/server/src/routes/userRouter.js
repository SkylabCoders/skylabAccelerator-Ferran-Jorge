const express = require('express');
const userController = require('../controllers/userController');

function userRouter() {
  const router = express.Router();
  const user = userController();

  router.route('/')
    .get(user.getUser)
    .post(user.getToken);

  return router;
}

module.exports = userRouter;
