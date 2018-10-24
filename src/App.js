import React, { Component } from 'react';

import { getTwitchData, streams, getUserData } from './utils/api';

import './index.css';

import Header from './components/Header/Header';
import StreamContainer from './components/StreamContainer/StreamContainer';
import DisplayButtons from './components/DisplayButtons/DisplayButtons';

// background-color: #4b367c
class App extends Component {
  state = {
    data: [],
    loading: false
  };
  componentDidMount() {
    this.loadData = this.fetchData();
  }
  displayOnlineUsers = () => {
    const allUsers = [...this.state.data];
  };
  displayOfflineUsers = () => {
    this.setState(
      () => ({
        data: this.state.data.filter(user => {
          return !user.status;
        })
      }),
      () => this.loadData
    );
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
        data: res
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
        />
        <StreamContainer streams={this.state.data} />
      </div>
    );
  }
}

export default App;
