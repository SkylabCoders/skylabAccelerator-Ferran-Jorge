const Projects = require('../models/projectsModel');
const projectsController = require('./projectsController')(Projects);

describe('projectsController', () => {
  test('should call response json on getMethod', () => {
    const res = {
      json: jest.fn(),
    };

    Projects.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'ProjectsList');
    });

    projectsController.getMethod({}, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on getMethod', () => {
    const res = {
      send: jest.fn(),
    };

    Projects.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorFindProjects');
    });

    projectsController.getMethod({}, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on postMethod', () => {
    const req = {
      body: { description: 'Skylab mola!' },
    };
    const res = {
      json: jest.fn(),
    };

    Projects.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'newProject');
    });

    projectsController.postMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on postMethod', () => {
    const req = {
      body: { description: 'Skylab mola!' },
    };
    const res = {
      send: jest.fn(),
    };

    Projects.create = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorAddProject');
    });

    projectsController.postMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call response json on putMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: { _id: '1', description: 'Skylab mola molt!' } };

    Projects.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, body, callback) => {
      callback(false, 'Deleted Successfully!');
    });

    projectsController.putMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call error on putMethod', () => {
    const res = {
      send: jest.fn(),
    };

    const req = { body: { _id: '1', description: 'Skylab mola molt!' } };

    Projects.findByIdAndUpdate = jest.fn().mockImplementationOnce((query, body, callback) => {
      callback(true, 'errorDeleteProject');
    });

    projectsController.putMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
  test('should call response json on deleteMethod', () => {
    const res = {
      json: jest.fn(),
    };

    const req = { body: { _id: '1' } };

    Projects.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
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

    Projects.findByIdAndRemove = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorDeleteProject');
    });

    projectsController.deleteMethod(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
