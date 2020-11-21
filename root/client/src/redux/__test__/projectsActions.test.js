import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  loadProjectList, createProject, updateProject, deleteProject,
} from '../actions/projectsActions';
import actionTypes from '../actions/actionsTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('Project Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });
  afterEach(() => {
    store = null;
    axios.mockRestore();
  });

  describe('loadProjectList', () => {
    test('should call to loadProjectListSuccess if no error occurs', async () => {
      const response = {
        data: {},
      };

      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      await store.dispatch(loadProjectList());

      expect(store.getActions()).toEqual([{
        type: actionTypes.LOAD_PROJECTS_LIST,
        projectList: response.data,
      }]);
    });

    test('should call to loadProjectListFailure if error occurs', async () => {
      const error = 'There was an error';

      axios.get.mockImplementationOnce(() => Promise.reject(error));
      await store.dispatch(loadProjectList());

      expect(store.getActions()).toEqual([{
        type: actionTypes.ERROR_HANDLER,
        error,
      }]);
    });
  });

  describe('createProject', () => {
    test('should call to createProject if no error occurs', async () => {
      const projectInfo = {
        name: 'String',
        description: 'String',
      };
      const response = {
        data: {},
      };

      axios.post.mockImplementationOnce(() => Promise.resolve(response));
      await store.dispatch(createProject(projectInfo));

      expect(store.getActions()).toEqual([{
        type: actionTypes.CREATE_PROJECT,
        createdProject: response.data,
      }]);
    });

    test('should call to createProject if error occurs', async () => {
      const error = 'There was an error';

      axios.post.mockImplementationOnce(() => Promise.reject(error));
      await store.dispatch(createProject());

      expect(store.getActions()).toEqual([{
        type: actionTypes.ERROR_HANDLER,
        error,
      }]);
    });
  });

  describe('updateProject', () => {
    test('should call to updateProject if no error occurs', async () => {
      const projectInfo = {
        name: 'String',
        description: 'String',
      };
      const response = {
        data: {},
      };

      axios.put.mockImplementationOnce(() => Promise.resolve(response));
      await store.dispatch(updateProject(projectInfo));

      expect(store.getActions()).toEqual([{
        type: actionTypes.UPDATE_PROJECT,
        updatedProject: response.data,
      }]);
    });

    test('should call to updateProject if error occurs', async () => {
      const error = 'There was an error';

      axios.put.mockImplementationOnce(() => Promise.reject(error));
      await store.dispatch(updateProject());

      expect(store.getActions()).toEqual([{
        type: actionTypes.ERROR_HANDLER,
        error,
      }]);
    });
  });
  describe('deleteProject', () => {
    test('should call to deleteProject if no error occurs', async () => {
      const projectInfo = {
        name: 'String',
        description: 'String',
      };
      const response = {
        data: {},
      };

      axios.delete.mockImplementationOnce(() => Promise.resolve(response));
      await store.dispatch(deleteProject(projectInfo));

      expect(store.getActions()).toEqual([{
        type: actionTypes.DELETE_PROJECT,
        deletedProject: response.data,
      }]);
    });

    test('should call to deleteProject if error occurs', async () => {
      const error = 'There was an error';

      axios.delete.mockImplementationOnce(() => Promise.reject(error));
      await store.dispatch(deleteProject());

      expect(store.getActions()).toEqual([{
        type: actionTypes.ERROR_HANDLER,
        error,
      }]);
    });
  });
});
