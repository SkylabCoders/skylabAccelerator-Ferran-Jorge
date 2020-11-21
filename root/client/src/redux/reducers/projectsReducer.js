import actionTypes from '../actions/actionsTypes';

const initialState = {
  projectList: [],
  error: [],
};

export default function todosReducer(state = initialState, action) {
  const { type, error, projectList } = action;
  let updateState;
  switch (type) {
    case actionTypes.LOAD_PROJECTS_LIST:
      updateState = { ...state, projectList };
      break;
    case actionTypes.ERROR_LOADING_PROJECT_LIST:
      updateState = { ...state, error };
      break;
    default:
      updateState = state;
  }
  return updateState;
}
