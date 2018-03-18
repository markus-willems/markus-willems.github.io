import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="row">
      <header>
        <div className="me">
          <Link className="me-circle" to="/">
            Markus Willems
          </Link>

          <div className="intro">
            <h1>Markus Willems</h1>

            <h2>Front-end Developer</h2>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
