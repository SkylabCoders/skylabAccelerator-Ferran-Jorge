import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './listStyles/listStyles.css';

function
CreateProjectItemComponent({ data }) {
  return (
    <section className="project-article">
      <header className="article-header">
        <div className="artitle-header-title">
          <Link to={`/detail/${data._id}`}>
            <span className="far fa-bookmark book" />
            <span className="article-owner">{data.owner}</span>
            {' / '}
            <span className="article-title">{data.name}</span>
          </Link>
        </div>
        <i className="fas fa-file-signature" />
        <div>hola</div>
      </header>
      <article className="article-content">
        <p>{data.description}</p>
        <span className="artitle-date-lang-info">
          {data.created_at}
          {data.language}
        </span>
      </article>
    </section>

  );
}

CreateProjectItemComponent.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CreateProjectItemComponent;
