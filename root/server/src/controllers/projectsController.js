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
    Projects.findByIdAndUpdate(_id, project, { upsert: true, new: true },
      (errorUpdateProject, updatedProject) => (errorUpdateProject
        ? res.send(errorUpdateProject)
        : res.json(updatedProject)));
  }

  function deleteMethod(req, res) {
    const { _id } = req.body;
    Projects.findOneAndRemove(_id,
      (errorDeleteProject, projectDeleted) => (errorDeleteProject
        ? res.send(errorDeleteProject)
        : res.json(projectDeleted._id)));
  }
  return {
    getMethod, postMethod, putMethod, deleteMethod,
  };
}

module.exports = projectsController;
