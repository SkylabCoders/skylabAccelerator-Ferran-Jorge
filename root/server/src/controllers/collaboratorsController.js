/* eslint-disable no-underscore-dangle */
const Projects = require('../models/projectsModel');

function collaboratorsController(Collaborators) {
  function getMethod(req, res) {
    Collaborators.find({}, (errorFindList, collaboratorsList) => (errorFindList
      ? res.send(errorFindList)
      : res.json(collaboratorsList)));
  }

  async function postMethod(req, res) {
    const { project: { _id, collaborators }, addCollaborator } = req.body;
    try {
      const newCollaborator = await Collaborators.create(addCollaborator);
      const projectUpdateResponse = await Projects.findOneAndUpdate(_id,
        { collaborators: [newCollaborator._id, ...collaborators] }, { new: true });
      res.json(projectUpdateResponse);
    } catch (error) {
      res.send(error);
    }
  }

  function putMethod(req, res) {
    const { collaborator: { _id }, collaborator } = req.body;
    Collaborators.findOneAndUpdate(_id, collaborator, { upsert: true, new: true },
      (errorUpdateCollaborator, collaboratorsList) => (errorUpdateCollaborator
        ? res.send(errorUpdateCollaborator)
        : res.json(collaboratorsList)));
  }

  function deleteMethod(req, res) {
    const { collaborator } = req.body;
    Collaborators.findOneAndRemove(collaborator,
      (errorDeleteCollaborator) => (errorDeleteCollaborator
        ? res.send(errorDeleteCollaborator)
        : res.json('Deleted Successfully!')));
  }
  return {
    getMethod, postMethod, putMethod, deleteMethod,
  };
}

module.exports = collaboratorsController;
