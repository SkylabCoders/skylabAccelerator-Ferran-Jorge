/* eslint-disable no-underscore-dangle */
function projectsController(Projects) {
  function getMethod(req, res) {
    Projects.find({}, (errorFindList, projectsList) => (errorFindList
      ? res.send(errorFindList)
      : res.json(projectsList)));
  }

  function postMethod(req, res) {
    const { body } = req;
    Projects.create({ ...body, created_at: new Date().toDateString() },
      (errorAddNewProject, newprojects) => (errorAddNewProject
        ? res.send(errorAddNewProject)
        : res.json(newprojects)));
  }

  function putMethod(req, res) {
    const { body: { _id }, body } = req;
    Projects.findOneAndUpdate(_id, body, { upsert: true, new: true },
      (errorUpdateProject, projectsList) => (errorUpdateProject
        ? res.send(errorUpdateProject)
        : res.json(projectsList)));
  }

  function deleteMethod(req, res) {
    const { body } = req;
    Projects.findOneAndRemove(body, (errorDeleteProject) => (errorDeleteProject
      ? res.send(errorDeleteProject)
      : res.json('Deleted Successfully!')));
  }
  return {
    getMethod, postMethod, putMethod, deleteMethod,
  };
}

module.exports = projectsController;
