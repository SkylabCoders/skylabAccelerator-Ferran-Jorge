import actionTypes from '../actions/actionsTypes';

const initialState = {
  login: [],
  projectList: [],
  createdProject: {},
  updatedProject: [],
  deletedProject: '',
  projectDetail: {},
  error: [],
};

export default function projectsReducer(state = initialState, action) {
  debugger;
  const {
    type, error, projectList, createdProject, updatedProject, login, deletedProject, _id,
  } = action;
  let updateState;
  switch (type) {
    case actionTypes.LOAD_PROJECTS_LIST:
      updateState = { ...state, projectList };
      break;
    case actionTypes.GET_PROJECT_DETAIL:
      updateState = {
        ...state,
        projectDetail:
        state.projectList.find((project) => project._id === _id),
      };
      break;
    case actionTypes.CREATE_PROJECT:
      updateState = {
        ...state,
        ...state.projectList.push({ ...createdProject }),
      };
      break;
    case actionTypes.UPDATE_PROJECT:
      updateState = {
        ...state,
        projectList:
        state.projectList.map((project) => (
          project._id === updatedProject._id
            ? { ...updatedProject }
            : project)),
      };
      break;
    case actionTypes.USER_INFO:
      updateState = { ...state, login };
      break;
    case actionTypes.DELETE_PROJECT:
      updateState = {
        ...state,
        projectList:
        state.projectList.filter((project) => project._id !== deletedProject),
      };
      break;
    case actionTypes.ERROR_HANDLER:
      updateState = { ...state, error };
      break;
    default:
      updateState = state;
  }
  return updateState;
}
