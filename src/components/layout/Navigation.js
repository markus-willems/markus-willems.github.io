import React from 'react';

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navi">
      <Link className="navi-link" to="/">
        <i className="fa fa-home fa-lg" />
      </Link>
      <span className="spacer">&#9679;</span>
      <a className="navi-link" href="mailto:mail@markus-willems.de">
        <i className="fa fa-envelope-o fa-lg" />
      </a>
      <span className="spacer">&#9679;</span>
      <a className="navi-link" href="https://twitter.com/mrkswllms">
        <i className="fa fa-twitter fa-lg" />
      </a>
      <span className="spacer">&#9679;</span>
      <a className="navi-link" href="https://github.com/markus-willems">
        <i className="fa fa-github fa-lg" />
      </a>
      <span className="spacer">&#9679;</span>
      <a
        className="navi-link"
        href="https://www.linkedin.com/in/markus-willems-a7176b15b"
      >
        <i className="fa fa-linkedin fa-lg" />
      </a>
    </div>
  );
};

export default Navigation;
