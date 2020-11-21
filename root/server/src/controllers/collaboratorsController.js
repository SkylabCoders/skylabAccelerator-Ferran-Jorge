/* eslint-disable no-underscore-dangle */
function collaboratorsController(Collaborators) {
  function getMethod(req, res) {
    Collaborators.find({}, (errorFindList, collaboratorsList) => (errorFindList
      ? res.send(errorFindList)
      : res.json(collaboratorsList)));
  }

  function postMethod(req, res) {
    const { project: { collaborators }, addCollaborator } = req.body;
    console.log(collaborators);
    Collaborators.create(addCollaborator,
      (errorAddNewCollaborator, newCollaborators) => (errorAddNewCollaborator
        ? res.send(errorAddNewCollaborator)
        : collaborators.push(newCollaborators) && res.json(newCollaborators)));
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
