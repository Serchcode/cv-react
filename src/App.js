import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carta from './components/carta'; 
import MenuExampleStackable from './components/menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuExampleStackable/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Carta/>
        <Carta/>
        <Carta/>
        <Carta/>
        <Carta/>
        <Carta/>
        <Carta/>
        <Carta/>
      </div>
    );
  }
}

export default App;
