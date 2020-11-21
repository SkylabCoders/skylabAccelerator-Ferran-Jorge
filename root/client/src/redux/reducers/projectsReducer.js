import actionTypes from '../actions/actionsTypes';

const initialState = {
  projectList: [],
  createdProject: [],
  updatedProject: [],
  deletedProject: [],
  error: [],
};

export default function projectsReducer(state = initialState, action) {
  const {
    type, error, projectList, createdProject, updatedProject, deletedProject,
  } = action;
  let updateState;
  switch (type) {
    case actionTypes.LOAD_PROJECTS_LIST:
      updateState = { ...state, projectList };
      break;
    case actionTypes.CREATE_PROJECT:
      updateState = { ...state, createdProject };
      break;
    case actionTypes.UPDATE_PROJECT:
      updateState = { ...state, updatedProject };
      break;
    case actionTypes.DELETE_PROJECT:
      updateState = { ...state, deletedProject };
      break;
    case actionTypes.ERROR_HANDLER:
      updateState = { ...state, error };
      break;
    default:
      updateState = state;
  }
  return updateState;
}
