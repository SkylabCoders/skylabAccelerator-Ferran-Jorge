import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
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
      {projectList.length > 0 && projectList.map(
        (projectInfo) => <CreateProjectItemComponent data={projectInfo} key={nanoid()} />,
      )}
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
