import axios from 'axios';
import actionTypes from './actionsTypes';

const apiURL = 'http://localhost:5000/';

function loadProjectListFailure(error) {
  return {
    type: actionTypes.ERROR_LOADING_PROJECT_LIST,
    error,
  };
}

function loadProjectListSuccess(proyectList) {
  return {
    type: actionTypes.LOAD_PROJECTS_LIST,
    proyectList,
  };
}

export default function loadProjectList() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(apiURL);
      dispatch(loadProjectListSuccess(data));
    } catch (error) {
      dispatch(loadProjectListFailure(error));
    }
  };
}
