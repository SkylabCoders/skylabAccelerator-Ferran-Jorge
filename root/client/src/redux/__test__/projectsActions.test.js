import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import loadProjectList from '../actions/projectsActions';
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
        type: actionTypes.ERROR_LOADING_PROJECT_LIST,
        error,
      }]);
    });
  });
});
