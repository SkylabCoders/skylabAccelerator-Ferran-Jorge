/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionsTypes';

const apiURL = 'http://localhost:5000/';

export function handleError(error) {
  return {
    type: actionTypes.ERROR_HANDLER,
    error,
  };
}

export function loadProjectListSuccess(projectList) {
  return {
    type: actionTypes.LOAD_PROJECTS_LIST,
    projectList,
  };
}

export function createProjectSuccess(createdProject) {
  return {
    type: actionTypes.CREATE_PROJECT,
    createdProject,
  };
}

export function updateProjectSuccess(updatedProject) {
  return {
    type: actionTypes.UPDATE_PROJECT,
    updatedProject,
  };
}

export function deleteProjectSuccess(deletedProject) {
  return {
    type: actionTypes.DELETE_PROJECT,
    deletedProject,
  };
}

export function loadProjectList() {
  debugger;
  const projectListEndpoint = 'projects';
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${apiURL}${projectListEndpoint}`);
      dispatch(loadProjectListSuccess(data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function createProject(projectInfo) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(apiURL, { ...projectInfo });
      dispatch(createProjectSuccess(data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function updateProject(projectToUpdate) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(apiURL);
      dispatch(updateProjectSuccess(data), { ...projectToUpdate });
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function deleteProject(projectToDelete) {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(apiURL);
      dispatch(deleteProjectSuccess(data), { ...projectToDelete });
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function getProjectDetail(_id) {
  debugger;
  return {
    type: actionTypes.GET_PROJECT_DETAIL,
    _id,
  };
}
