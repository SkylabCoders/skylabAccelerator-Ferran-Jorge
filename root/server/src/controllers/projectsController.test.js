const Projects = require('../models/projectsModel');
const Collaborators = require('../models/collaboratorsModel');
const projectsController = require('./projectsController')(Projects);

jest.mock('../models/collaboratorsModel');
jest.mock('../models/projectsModel');

describe('projectsController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };
    Projects.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => { callback(false, 'ProjectsList'); }),
      }),
    });

    projectsController.getMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    Projects.find = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        exec: jest.fn().mockImplementationOnce((callback) => { callback(true, 'errorFindProjects'); }),
      }),
    });

    projectsController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('Post method - Projects - should have been called', () => {
    const req = { body: { project: { _id: '1', collaborators: 'Skylab' }, addCollaborator: { name: 'Coders' } } };
    Projects.create = jest.fn();
    Collaborators.create = jest.fn();

    projectsController.postMethod(req);

    expect(Projects.create).toHaveBeenCalled();
  });

  test('Post method - Collaborators - should have been called', () => {
    const req = { body: { project: { _id: '1', collaborators: 'Skylab' }, addCollaborator: { name: 'Coders' } } };
    Collaborators.create = jest.fn();
    Projects.create = jest.fn().mockImplementationOnce({});

    projectsController.postMethod(req);

    expect(Projects.create).toHaveBeenCalled();
  });
  test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: { project: { _id: '1', description: 'Skylab mola molt!' } } };

    Projects.findOneAndUpdate = jest.fn().mockImplementationOnce((id, body, options, callback) => {
      callback(false, 'projectUpdated');
    });

    projectsController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on putMethod', () => {
    const res = {
      send: jest.fn(),
    };

    const req = { body: { project: { _id: '1', description: 'Skylab mola molt!' } } };

    Projects.findOneAndUpdate = jest.fn().mockImplementationOnce((id, body, options, callback) => {
      callback(true, 'errorUpdatingProject');
    });

    projectsController.putMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    Projects.findOneAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'Deleted Successfully!');
    });

    projectsController.deleteMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on deleteMethod', () => {
    const res = {
      send: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    Projects.findOneAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorDeleteProject');
    });

    projectsController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
