const express = require('express');
const collaboratorsController = require('../controllers/collaboratorsController');

function collaboratorsRouter(Collaborators) {
  const router = express.Router();
  const collaborators = collaboratorsController(Collaborators);

  router.route('/')
    .get(collaborators.getMethod)
    .post(collaborators.postMethod)
    .put(collaborators.putMethod)
    .delete(collaborators.deleteMethod);

  return router;
}

module.exports = collaboratorsRouter;
