import projectsReducer from '../reducers';
import actionTypes from '../actions/actionsTypes';

describe('proyectsReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      login: [],
      projectList: [],
      createdProject: {},
      updatedProject: {},
      deletedProject: '',
      projectDetail: {},
      error: {},
    };
  });

  test('should return the initial state', () => {
    expect(projectsReducer(undefined, {})).toEqual({
      projectsReducer: {
        ...initialState,
      },
    });
  });

  test('should return new state from LOAD_PROJECTS_LIST', () => {
    expect(
      projectsReducer(undefined, {
        type: actionTypes.LOAD_PROJECTS_LIST,
        projectList: [{ _id: '5fba79c2c025b360d0181fe8', name: 'String' }],
      }),
    ).toEqual({
      projectsReducer: {
        ...initialState,
        projectList: [{ _id: '5fba79c2c025b360d0181fe8', name: 'String' }],
      },
    });
  });

  test('should return new state from CREATE_PROJECT', () => {
    const newProject = { _id: '5fba79c2c025b360d0181f10', name: 'Test Project Create', description: 'String' };
    expect(
      projectsReducer(undefined, {
        type: actionTypes.CREATE_PROJECT,
        createdProject: { ...newProject },
      }),
    ).toEqual({
      projectsReducer: {
        ...initialState,
        projectList: [{ _id: '5fba79c2c025b360d0181f10', name: 'Test Project Create', description: 'String' }],
      },
    });
  });

  xtest('should return new state from UPDATE_PROJECT', () => {
    const myInitialState = {
      login: [],
      projectList: [{ _id: '5fba79c2c025b360d0181fe8', name: 'Test Project Update', description: 'String' }],
      createdProject: {},
      updatedProject: {},
      deletedProject: '',
      projectDetail: {},
      error: [],
    };
    expect(
      projectsReducer(myInitialState, {
        type: actionTypes.UPDATE_PROJECT,
        updatedProject: { _id: '5fba79c2c025b360d0181fe8', name: 'Test Project update', description: 'Expectation new message updated' },
      }),
    ).toEqual({
      projectsReducer: {
        ...initialState,
        projectList: [{ _id: '5fba79c2c025b360d0181fe8', name: 'Test Project Update', description: 'Expectation new message updated' }],
      },
    });
  });

  xtest('should return new state from DELETE_PROJECT', () => {
    expect(
      projectsReducer(undefined, {
        type: actionTypes.DELETE_PROJECT,
        deletedProject: [{ _id: '5fba79c2c025b360d0181fe8' }],
      }),
    ).toEqual({
      projectsReducer: {
        ...initialState,
        deletedProject: [{ _id: '5fba79c2c025b360d0181fe8' }],
      },
    });
  });

  test('should return new state from ERROR_HANDLER', () => {
    expect(
      projectsReducer(undefined, {
        type: actionTypes.ERROR_HANDLER,
        error: { error: 'There was an error' },
      }),
    ).toEqual({
      projectsReducer: {
        ...initialState,
        error: { error: 'There was an error' },
      },
    });
  });
});
