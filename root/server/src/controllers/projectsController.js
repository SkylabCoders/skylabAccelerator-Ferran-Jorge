const Collaborators = require('../models/collaboratorsModel');

function projectsController(Projects) {
  function getMethod(req, res) {
    Projects.find({})
      .populate({ path: 'collaborators' })
      .exec((errorFindList, projectsList) => (errorFindList
        ? res.send(errorFindList)
        : res.json(projectsList)));
  }

  async function postMethod(req, res) {
    const { project: { collaborators, ...projectInfo } } = req.body;
    try {
      const collaboratorsResponse = await Collaborators.create(collaborators);
      const projectsResponse = await Projects.create(
        {
          ...projectInfo,
          created_at: new Date().toDateString(),
          collaborators: collaboratorsResponse.map((collaborator) => collaborator._id),
        },
      );
      res.json(projectsResponse);
    } catch (error) {
      res.send(error);
    }
  }

  function putMethod(req, res) {
    const { project: { _id }, project } = req.body;
    Projects.findOneAndUpdate(_id, project, { upsert: true, new: true },
      (errorUpdateProject, projectsList) => (errorUpdateProject
        ? res.send(errorUpdateProject)
        : res.json(projectsList)));
  }

  function deleteMethod(req, res) {
    const { project } = req.body;
    Projects.findOneAndRemove(project,
      (errorDeleteProject, projectDeleted) => (errorDeleteProject
        ? res.send(errorDeleteProject)
        : res.json(projectDeleted._id)));
  }
  return {
    getMethod, postMethod, putMethod, deleteMethod,
  };
}

module.exports = projectsController;
