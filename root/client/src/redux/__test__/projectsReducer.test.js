import projectsReducer from '../reducers';
import actionTypes from '../actions/actionsTypes';

describe('proyectsReducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {};
  });

  afterEach(() => {
    initialState = null;
  });

  test('should return the initial state', () => {
    const reducer = projectsReducer(undefined, {});
    expect(reducer).toEqual({
      projectsReducer: {
        login: [],
        projectList: [],
        createdProject: {},
        updatedProject: {},
        deletedProject: '',
        projectDetail: {},
        error: {},
        _id: '',
      },
    });
  });

  test('should return new state from LOAD_PROJECTS_LIST', () => {
    const reducer = projectsReducer({ initialState }, {
      type: actionTypes.LOAD_PROJECTS_LIST,
      projectList: [
        { _id: '5fba79c2c025b360d0181fe8', info: 'string1' },
        { _id: 'u34grkfja9u42n98wjjr89fj', info: 'string2' },
        { _id: 'iuu3784hg9e3yg8fsoi38493', info: 'string3' },
        { _id: 'vu3478hfiuu9u3fgf09vi394', info: 'string4' },
        { _id: 'oidfuegr783u9urmv03948gh', info: 'string5' },
      ],
    });
    expect(reducer)
      .toEqual({
        projectsReducer: {
          login: [],
          createdProject: {},
          updatedProject: {},
          deletedProject: '',
          projectDetail: {},
          error: {},
          projectList: [
            { _id: '5fba79c2c025b360d0181fe8', info: 'string1' },
            { _id: 'u34grkfja9u42n98wjjr89fj', info: 'string2' },
            { _id: 'iuu3784hg9e3yg8fsoi38493', info: 'string3' },
            { _id: 'vu3478hfiuu9u3fgf09vi394', info: 'string4' },
            { _id: 'oidfuegr783u9urmv03948gh', info: 'string5' },
          ],
          _id: '',
        },
      });
  });

  test('should return project defail info base on there ID', () => {
    expect(projectsReducer({}, {
      type: actionTypes.GET_PROJECT_DETAIL,
      _id: '5fba79c2c025b360d0181fe8q',
    }))
      .toEqual({
        projectsReducer: {
          login: [],
          createdProject: {},
          updatedProject: {},
          deletedProject: '',
          projectDetail: { _id: '5fba79c2c025b360d0181fe8', info: 'string1' },
          error: {},
          projectList: [],
          _id: '5fba79c2c025b360d0181fe8q',
        },
      });
  });
});
