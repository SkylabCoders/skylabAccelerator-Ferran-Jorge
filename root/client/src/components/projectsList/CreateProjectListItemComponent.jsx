import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function
CreateProjectItemComponen({ data }) {
  return (
    <Link to={`/detail/${data._id}`}>
      <section>
        <h2>{data.name}</h2>
        <div>
          <p>{data.description}</p>
          <ul>
            <li>{data.language}</li>
          </ul>
          <span>{data.created_at}</span>
        </div>
      </section>
    </Link>

  );
}

CreateProjectItemComponen.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    created_at: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default CreateProjectItemComponen;
