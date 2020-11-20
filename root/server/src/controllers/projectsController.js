/* eslint-disable no-underscore-dangle */
function projectsController(projects) {
  function getMethod(req, res) {
    projects.find({}, (errorFindList, projectsList) => (errorFindList
      ? res.send(errorFindList)
      : res.json(projectsList)));
  }

  function postMethod(req, res) {
    const { body } = req;
    projects.create(body, (errorAddNewProject, newprojects) => (errorAddNewProject
      ? res.send(errorAddNewProject)
      : res.json(newprojects)));
  }
  function putMethod(req, res) {
    const { body } = req;
    projects.findByIdAndUpdate(body._id, body,
      (errorUpdateProject, projectsList) => (errorUpdateProject
        ? res.send(errorUpdateProject)
        : res.json(projectsList)));
  }

  function deleteMethod(req, res) {
    const { body } = req;
    projects.findByIdAndRemove(body, (errorDeleteProject) => (errorDeleteProject
      ? res.send(errorDeleteProject)
      : res.json('Deleted Successfully!')));
  }
  return {
    getMethod, postMethod, putMethod, deleteMethod,
  };
}

module.exports = projectsController;
