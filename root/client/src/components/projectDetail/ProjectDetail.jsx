/* eslint-disable no-debugger */
import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProjectDetail } from '../../redux/actions/projectsActions';

function ProjectDetail({ projectDetail, dispatch }) {
  debugger;
  const { id } = useParams();
  dispatch(getProjectDetail(id));

  const projectInfo = {
    collaborators: projectDetail?.collaborators.length > 0 ? projectDetail.collaborators : ['No hay colaboradores'],
    name: projectDetail?.name ? projectDetail.name : 'N/A',
    owner: projectDetail?.owner ? projectDetail.owner : 'N/A',
    description: projectDetail?.description ? projectDetail.description : 'No hay informacion sobre el proyecto',
    language: projectDetail?.language.length > 0 ? projectDetail.language : ['Habilidades no requeridas'],
    created_at: projectDetail?.created_at ? projectDetail.created_at : 'Mon Ene 1 2000',
    githubRepo: projectDetail?.githubRepo ? projectDetail.githubRepo : 'Mon Ene 1 2000',
  };

  return (
    <>
      <section>
        <div>
          <h3>Habilidades</h3>
          <ul>
            {projectInfo.language.map((lang) => <li>{lang}</li>)}
          </ul>
        </div>
        <div>
          <h3>Descripcion proyecto:</h3>
          <p>{projectInfo.description}</p>
        </div>
      </section>
      <div>hola </div>
      <div>{projectDetail.name}</div>
    </>
  );
}

ProjectDetail.propTypes = {
  projectDetail: PropTypes.shape({
    collaborators: PropTypes.arrayOf(String),
    name: PropTypes.string,
    owner: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.arrayOf(String),
    created_at: PropTypes.string,
    githubRepo: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ projectsReducer }) {
  debugger;
  return {
    projectDetail: projectsReducer.projectDetail,
  };
}

export default connect(mapStateToProps)(ProjectDetail);
