/* eslint-disable camelcase */
/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionsTypes';

const apiURL = 'http://localhost:5000/';
const projectsEndpoint = 'projects';
const userURL = 'https://api.github.com/user';

const client_id = '3078e39c6f2add73219e';
const client_secret = '90773844b97fb5ff0130133f9c540adc14f52c47';
const accessURL = `https://github.com/login/oauth/access_token/?client_id=${client_id}&client_secret=${client_secret}&code=`;

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
      dispatch(createProjectSuccess(data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function updateProject(updatedProject) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${apiURL}${projectsEndpoint}`, { ...updatedProject });
      dispatch(updateProjectSuccess(data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function deleteProject(projectToDelete) {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${apiURL}${projectsEndpoint}`, { projectToDelete });
      dispatch(deleteProjectSuccess(data));
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

export function getUser(token) {
  debugger;
  return async (dispatch) => {
    try {
      const { data } = await axios.get(userURL, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.name);
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function getToken(code) {
  return async (dispatch) => {
    debugger;
    try {
      const { data } = await axios.post(`${accessURL}${code}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        },
      });
      debugger;
      const token = data.split('&')[0].replace('access_token=');
      dispatch(getUser(token));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}
