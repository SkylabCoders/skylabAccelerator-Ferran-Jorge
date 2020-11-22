import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import './listStyles/listStyles.css';
import { loadProjectList } from '../../redux/actions/projectsActions';
import CreateProjectItemComponent from './CreateProjectListItemComponent';

function ProjectListComponent({ projectList, dispatch }) {
  useEffect(() => {
    if (!projectList || projectList.length === 0) {
      dispatch(loadProjectList());
    }
  }, []);

  return (
    <>
      <section className="projects-wrapper">
        <h2 className="projects-title">Here`s what we found based on your interests...</h2>
        {projectList.length > 0 && projectList.map(
          (projectInfo) => <CreateProjectItemComponent data={projectInfo} key={nanoid()} />,
        )}
      </section>

    </>
  );
}

ProjectListComponent.propTypes = {
  projectList: PropTypes.arrayOf(PropTypes.objectOf),
  dispatch: PropTypes.func.isRequired,
};

ProjectListComponent.defaultProps = {
  projectList: [],
};

function mapStateToProps({ projectsReducer }) {
  return {
    projectList: projectsReducer.projectList,
  };
}

export default connect(mapStateToProps)(ProjectListComponent);
