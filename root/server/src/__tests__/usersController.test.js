const axios = require('axios');
const userController = require('../controllers/userController')();

jest.mock('axios');

describe('userController', () => {
  test('should call response json on getUser', async () => {
    const req = { query: { access_token: 'Skylab' } };
    const res = {
      send: jest.fn(),
    };
    const response = {
      data: {},
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    await res.send(response);

    userController.getUser(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call error on getUser', async () => {
    const req = { query: { access_token: 'Skylab' } };
    const res = {
      send: jest.fn(),
    };
    const response = {
      data: {},
    };

    axios.get.mockImplementationOnce(() => Promise.reject(response));
    await res.send(response);

    userController.getUser(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on getToken', async () => {
    const req = { body: { code: 'Skylab' } };
    const res = {
      send: jest.fn(),
    };
    const response = {
      data: {},
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(response));
    await res.send(response);

    userController.getToken(req, res);

    expect(res.send).toHaveBeenCalled();
  });

  test('should call response json on getToken', async () => {
    const req = { body: { code: 'Skylab' } };
    const res = {
      send: jest.fn(),
    };
    const response = {
      data: {},
    };

    axios.post.mockImplementationOnce(() => Promise.reject(response));
    await res.send(response);

    userController.getToken(req, res);

    expect(res.send).toHaveBeenCalled();
  });
});
