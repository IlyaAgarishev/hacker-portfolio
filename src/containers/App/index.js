import React, { Component } from 'react';
import './index.css';
import Terminal from '../Terminal';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Terminal />
      </div>
    );
  }
}

export default App;
