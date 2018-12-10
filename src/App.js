import React, { Component } from 'react';
import {Pokemon} from './api_fetch.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokemon />
      </div>
    );
  }
}

export default App;
