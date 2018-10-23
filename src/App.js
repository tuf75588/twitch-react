import React, { Component } from 'react';

import { getTwitchData, streams, getUserData } from './utils/api';

import './index.css';

import Header from './components/Header/Header';

// background-color: #4b367c
class App extends Component {
  state = {
    data: [],
    loading: false
  };
  componentDidMount() {
    this.loadData = this.fetchData();
  }

  fetchData = () => {
    const streamers = [
      'eviltoaster',
      'cuppcaake',
      'okpai',
      'electroslag',
      'freecodecamp',
      'hungricorgi',
      'just_stevo',
      'bobross'
    ];
  };
  render() {
    return (
      <div>
        <Header name="Twitch v5 API Viewer" />
      </div>
    );
  }
}

export default App;
