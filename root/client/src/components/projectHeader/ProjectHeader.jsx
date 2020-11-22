import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { getToken } from '../../redux/actions/projectsActions';

function ProjectHeader({ login, dispatch }) {
  if (window.location.search && login.length === 0) {
    const code = (window.location.search?.replace('?code=', ''));
    dispatch(getToken(code));
  }
  return (
    <>
      <header className="header-container">
        <nav>
          <button type="button"><Link to="/">Home</Link></button>
          <button type="button"><Link to="/list">Proyetos</Link></button>
          <button type="button"><Link to="/form">form</Link></button>
          {login.length === 0 ? <a href="https://github.com/login/oauth/authorize?client_id=3078e39c6f2add73219e"><button type="button">Login</button></a> : <p>{login?.login}</p>}
        </nav>
      </header>
    </>
  );
}

ProjectHeader.propTypes = {
  login: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    getToken: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ projectsReducer }) {
  return {
    login: projectsReducer.login,
  };
}

export default connect(mapStateToProps)(ProjectHeader);
