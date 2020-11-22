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
    console.log(req.body);
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
    const { _id, project } = req.body;
    console.log(req.body);
    console.log(_id);
    Projects.findOneAndUpdate(_id, project, { upsert: true, new: true },
      (errorUpdateProject, projectsList) => (errorUpdateProject
        ? res.send(errorUpdateProject)
        : res.json(projectsList)));
  }

  function deleteMethod(req, res) {
    const { project } = req.body;
    Projects.findOneAndRemove(project, (errorDeleteProject) => (errorDeleteProject
      ? res.send(errorDeleteProject)
      : res.json('Deleted Successfully!')));
  }
  return {
    getMethod, postMethod, putMethod, deleteMethod,
  };
}

module.exports = projectsController;
