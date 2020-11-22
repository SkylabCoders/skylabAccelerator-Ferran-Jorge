import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getProjectDetail, deleteProject } from '../../redux/actions/projectsActions';

function ProjectDetail({ projectDetail, dispatch }) {
  const { id } = useParams();
  let projectInfo;
  if (projectDetail._id === id) {
    projectInfo = {
      collaborators: projectDetail.collaborators.length === 0 ? ['No hay colaboradores'] : projectDetail.collaborators,
      name: projectDetail.name ? projectDetail.name : 'N/A',
      owner: projectDetail.owner ? projectDetail.owner : 'N/A',
      description: projectDetail.description ? projectDetail.description : 'No hay informacion sobre el proyecto',
      language: projectDetail.language ? projectDetail.language : 'Habilidades no requeridas',
      created_at: projectDetail.created_at ? projectDetail.created_at : 'Mon Ene 1 2000',
      githubRepo: projectDetail.githubRepo ? projectDetail.githubRepo : 'None',
    };
  }

  useEffect(() => {
    if (_.isEmpty(projectDetail) || projectDetail._id !== id) {
      dispatch(getProjectDetail(id));
    }
  }, []);

  return (
    <>
      <section className="detail-container">
        {!_.isEmpty(projectInfo) && projectDetail._id === id && (
          <>
            <div>
              <h3>Habilidades</h3>
              <ul>
                <li>{projectInfo.language}</li>
              </ul>
            </div>
            <div>
              <h3>Descripcion proyecto:</h3>
              <p>{projectInfo.description}</p>
            </div>

            <div>
              <h3>Repositorio Github:</h3>
              <p>{projectInfo.githubRepo}</p>
            </div>
            <div>
              <span>
                {`Fecha de Creación ${projectInfo.created_at}`}
              </span>
            </div>
            <div>
              <span>{projectInfo.owner}</span>
              <br />
              <ul>
                {projectInfo.collaborators.map(
                  (collaborator) => <li key={nanoid()}>{collaborator.name}</li>,
                )}
              </ul>
            </div>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteProject(projectDetail._id));
              }}
            >
              Eliminar proyecto
            </button>
            <button type="button">
              <Link to={`/form/${projectDetail._id}`}>
                Editar
              </Link>
            </button>
          </>
        )}
      </section>
    </>
  );
}

ProjectDetail.propTypes = {
  projectDetail: PropTypes.shape({
    collaborators: PropTypes.arrayOf(String),
    name: PropTypes.string,
    owner: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    created_at: PropTypes.string,
    githubRepo: PropTypes.string,
    _id: PropTypes.string,
  }),
  dispatch: PropTypes.func.isRequired,
};

ProjectDetail.defaultProps = {
  projectDetail: {},
};

function mapStateToProps({ projectsReducer }) {
  return {
    projectDetail: projectsReducer.projectDetail,
  };
}

export default connect(mapStateToProps)(ProjectDetail);
