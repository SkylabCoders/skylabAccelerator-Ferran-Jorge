/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionsTypes';

const apiURL = 'http://localhost:5000/';
const projectsEndpoint = 'projects';

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
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${apiURL}${projectsEndpoint}`);
      dispatch(loadProjectListSuccess(data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function createProject(projectInfo) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${apiURL}${projectsEndpoint}`, { ...projectInfo });
      console.log();
      dispatch(createProjectSuccess(data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function updateProject(projectToUpdate) {
  return async (dispatch) => {
    try {
      const demo = await axios.put(`${apiURL}${projectsEndpoint}`, { projectToUpdate });
      console.log(demo);
      dispatch(updateProjectSuccess(demo));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function deleteProject(projectToDelete) {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${apiURL}${projectsEndpoint}`);
      dispatch(deleteProjectSuccess(data), { ...projectToDelete });
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function getProjectDetail(_id) {
  return {
    type: actionTypes.GET_PROJECT_DETAIL,
    _id,
  };
}
