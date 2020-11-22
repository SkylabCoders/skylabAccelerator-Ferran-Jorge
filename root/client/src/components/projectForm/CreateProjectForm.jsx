import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createProject, updateProject } from '../../redux/actions/projectsActions';

function CreateProjectForm({ projectDetail, dispatch }) {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');

  const projectInfo = {
    project: {
      name,
      owner,
      description,
      language,
      collaborators: [{ name: 'Admin', login: '1234' }],
    },
  };

  useEffect(() => {
    if (!_.isEmpty(id)) {
      setName(projectDetail.name);
      setOwner(projectDetail.owner);
      setDescription(projectDetail.description);
      setLanguage(projectDetail.language);
    }
  }, []);

  return (
    <>
      <form>
        <label htmlFor="name">
          Nombre Proyecto
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="owner">
          Autor
          <input
            type="text"
            id="owner"
            name="owner"
            value={owner}
            onChange={(event) => setOwner(event.target.value)}
            required
          />
        </label>
        <br />
        <label htmlFor="description">
          Descripcion
          <textarea
            name="description"
            id="description"
            value={description}
            cols="30"
            rows="10"
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Añadir una descripcion del proyecto"
            required
          />
        </label>
        <br />
        <label htmlFor="language">
          Habilidades
          <input
            type="text"
            id="language"
            name="language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            required
          />
        </label>
      </form>
      <button
        type="submit"
        onClick={() => (_.isEmpty(id)
          ? dispatch(createProject(projectInfo))
          : dispatch(updateProject({
            project: {
              _id: id,
              name,
              owner,
              description,
              language,
            },
          })))}
      >
        Guardar Cambios
      </button>
    </>
  );
}

CreateProjectForm.propTypes = {
  projectDetail: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    created_at: PropTypes.string,
    collaborators: PropTypes.arrayOf(String),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ projectsReducer }) {
  return {
    projectDetail: projectsReducer.projectDetail,
  };
}

export default connect(mapStateToProps, null)(CreateProjectForm);
