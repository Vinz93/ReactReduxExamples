import React, { Component } from 'react';
import Toggle from '../containers/Toggle';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Toggle />
      </div>
    );
  }
}

export default App;
