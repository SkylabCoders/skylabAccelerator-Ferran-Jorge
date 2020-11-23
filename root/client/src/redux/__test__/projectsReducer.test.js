import projectsReducer from '../reducers';
import actionTypes from '../actions/actionsTypes';

describe('proyectsReducer', () => {
  test('should return the initial state', () => {
    expect(projectsReducer(undefined, {})).toEqual({
      projectsReducer: {
        login: [],
        projectList: [],
        createdProject: {},
        updatedProject: {},
        deletedProject: '',
        projectDetail: {},
        error: {},
      },
    });
  });

  test('should return new state from LOAD_PROJECTS_LIST', () => {
    expect(
      projectsReducer({}, {
        type: actionTypes.LOAD_PROJECTS_LIST,
        projectList: [
          { _id: '5fba79c2c025b360d0181fe8', info: 'string1' },
          { _id: 'u34grkfja9u42n98wjjr89fj', info: 'string2' },
          { _id: 'iuu3784hg9e3yg8fsoi38493', info: 'string3' },
          { _id: 'vu3478hfiuu9u3fgf09vi394', info: 'string4' },
          { _id: 'oidfuegr783u9urmv03948gh', info: 'string5' },
        ],
      }),
    ).toEqual({
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
      },
    });
  });
});
