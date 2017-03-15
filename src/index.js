import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import style from './assets/css/main.css';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      active: true
    }
  }

  handleClick(event) {
    this.setState(prevState => ({
      active: !prevState.active
    }));
    event.preventDefault;
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick(e)}>Click me!</button>
        {this.state.active ? 'active' : 'inactive'}
      </div>
    );
  }

}

ReactDOM.render(
  <Message />,
  document.getElementById('root')
);