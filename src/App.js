import React, { Component } from 'react';

import { getTwitchData } from './utils/api';

import './index.css';

import Header from './components/Header/Header';
import StreamContainer from './components/StreamContainer/StreamContainer';
import DisplayButtons from './components/DisplayButtons/DisplayButtons';

// background-color: #4b367c
class App extends Component {
  state = {
    data: [],
    originalData: []
  };
  componentDidMount() {
    this.loadData = this.fetchData();
  }
  displayAllUsers = () => {
    const copy = [...this.state.originalData];
    this.setState(prevState => ({
      data: copy
    }));
  };
  displayOnlineUsers = () => {
    //take the previous state, and update it to stream status that is truthy
    this.setState(prevState => ({
      data: [...prevState.originalData].filter(x => x.status)
    }));
  };
  displayOfflineUsers = () => {
    //take the previous state, and update it to streams with a status of null
    this.setState(prevState => ({
      data: [...prevState.originalData].filter(x => x.status === null)
    }));
  };

  fetchData = () => {
    const streamers = [
      'eviltoaster',
      'cuppcaake',
      'okpai',
      'electroslag',
      'freecodecamp',
      'hungricorgi',
      'just_stevo',
      'bobross',
      'food'
    ];
    const data = streamers.map(user => getTwitchData(user));
    const results = Promise.all(data).then(res => {
      this.setState(() => ({
        data: res,
        originalData: res
      }));
    });
  };
  render() {
    return (
      <div>
        <Header name="Twitch v5 API Viewer" />
        <DisplayButtons
          displayOnline={this.displayOnlineUsers}
          displayOfflineUsers={this.displayOfflineUsers}
          displayAllUsers={this.displayAllUsers}
        />
        <StreamContainer streams={this.state.data} />
      </div>
    );
  }
}

export default App;
