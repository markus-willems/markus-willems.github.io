import React from 'react'

import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="navi">
      <Link className="navi-link" to="/">Home</Link>
      <span className="spacer">&#9679;</span>
      <Link className="navi-link" to="mailto:markuswillems@gmail.com"><i className="fa fa-envelope-o fa-lg"></i></Link>
      <span className="spacer">&#9679;</span>
      <Link className="navi-link" to="https://github.com/markus-willems"><i className="fa fa-github fa-lg"></i></Link>
    </div>
  )
}

export default Navigation