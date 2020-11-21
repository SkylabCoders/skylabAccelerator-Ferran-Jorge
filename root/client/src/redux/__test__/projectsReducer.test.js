import projectsReducer from '../reducers';
import actionTypes from '../actions/actionsTypes';

describe('proyectsReducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      projectList: [],
      createdProject: [],
      updatedProject: [],
      deletedProject: [],
      error: [],
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
        projectList: [{ _id: '1', name: 'Gerrard' }],
      }),
    ).toEqual({
      projectsReducer: {
        ...initialState,
        projectList: [{ _id: '1', name: 'Gerrard' }],
      },
    });
  });

  test('should return new state from CREATE_PROJECT', () => {
    expect(
      projectsReducer(undefined, {
        type: actionTypes.CREATE_PROJECT,
        createdProject: [{ _id: '1', name: 'Test Project Create', description: 'String' }],
      }),
    ).toEqual({
      projectsReducer: {
        ...initialState,
        createdProject: [{ _id: '1', name: 'Test Project Create', description: 'String' }],
      },
    });
  });

  test('should return new state from UPDATE_PROJECT', () => {
    expect(
      projectsReducer(undefined, {
        type: actionTypes.UPDATE_PROJECT,
        updatedProject: [{ _id: '1', name: 'Test Project Update', description: 'String' }],
      }),
    ).toEqual({
      projectsReducer: {
        ...initialState,
        updatedProject: [{ _id: '1', name: 'Test Project Update', description: 'String' }],
      },
    });
  });

  test('should return new state from DELETE_PROJECT', () => {
    expect(
      projectsReducer(undefined, {
        type: actionTypes.DELETE_PROJECT,
        deletedProject: [{ _id: '1' }],
      }),
    ).toEqual({
      projectsReducer: {
        ...initialState,
        deletedProject: [{ _id: '1' }],
      },
    });
  });

  test('should return new state from ERROR_HANDLER', () => {
    expect(
      projectsReducer(undefined, {
        type: actionTypes.ERROR_HANDLER,
        error: [{ error: 'There was an error' }],
      }),
    ).toEqual({
      projectsReducer: {
        ...initialState,
        error: [{ error: 'There was an error' }],
      },
    });
  });
});
