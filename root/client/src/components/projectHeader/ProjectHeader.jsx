import React from 'react';
import { Link } from 'react-router-dom';

function ProjectHeader() {
  return (
    <>
      <header>
        <nav>
          <button type="button"><Link to="/">Home</Link></button>
          <button type="button"><Link to="/list">Proyetos</Link></button>
          <button type="button"><Link to="/detail">Home</Link></button>
          <button type="button">Login</button>
        </nav>
      </header>
    </>
  );
}

export default ProjectHeader;
