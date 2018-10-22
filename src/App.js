import React, { Component } from 'react';

import { makeRequest } from './utils/api';

import './index.css';
// background-color: #4b367c

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    makeRequest().then(data => {
      this.setState(() => ({
        data
      }));
    });
  }
  render() {
    return <span>hi</span>;
  }
}

export default App;
