const express = require('express');
const projectsController = require('../controllers/projectsController');

function projectsRouter(Projects) {
  const router = express.Router();
  const projects = projectsController(Projects);

  router.route('/')
    .get(projects.getMethod)
    .post(projects.postMethod)
    .put(projects.putMethod)
    .delete(projects.deleteMethod);

  return router;
}

module.exports = projectsRouter;
