import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Message extends Component {
  render() {
    return <div>
      {this.props.msg}
    </div>
  }
}

ReactDOM.render(
  <Message msg="Hello, world!" />,
  document.getElementById('root')
);