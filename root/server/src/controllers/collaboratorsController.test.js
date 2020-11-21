const Projects = require('../models/projectsModel');
const Collaborators = require('../models/collaboratorsModel');
const collaboratorsController = require('./collaboratorsController')(Collaborators);

jest.mock('../models/collaboratorsModel');
jest.mock('../models/projectsModel');

describe('collaboratorsController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    Collaborators.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'collaboratorsList');
    });

    collaboratorsController.getMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on getMethod', () => {
    const res = {
      send: jest.fn(),
    };

    Collaborators.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorFindcollaborators');
    });

    collaboratorsController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('Post method - Collaborators - should have been called', () => {
    const req = { body: { project: { _id: '1', collaborators: 'Skylab' }, addCollaborator: { name: 'Coders' } } };
    Projects.create = jest.fn();
    Collaborators.create = jest.fn();

    collaboratorsController.postMethod(req);

    expect(Collaborators.create).toHaveBeenCalled();
  });

  test('Post method - Collaborators - should have been called', () => {
    const req = { body: { project: { _id: '1', collaborators: 'Skylab' }, addCollaborator: { name: 'Coders' } } };
    Collaborators.create = jest.fn();
    Projects.create = jest.fn().mockImplementationOnce({});

    collaboratorsController.postMethod(req);

    expect(Collaborators.create).toHaveBeenCalled();
  });

  test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: { collaborator: { _id: '1', description: 'Skylab mola molt!' } } };

    Collaborators.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (id, body, options, callback) => {
        callback(false, 'Collaborator Updated');
      },
    );

    collaboratorsController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on putMethod', () => {
    const res = {
      send: jest.fn(),
    };

    const req = { body: { collaborator: { _id: '1', description: 'Skylab mola molt!' } } };

    Collaborators.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (id, body, options, callback) => {
        callback(true, 'errorUpdatingCollaborator');
      },
    );

    collaboratorsController.putMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    Collaborators.findOneAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'Deleted Successfully!');
    });

    collaboratorsController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on deleteMethod', () => {
    const res = {
      send: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    Collaborators.findOneAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorDeleteCollaborator');
    });

    collaboratorsController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
