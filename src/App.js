import React, { Component } from 'react';
import Menucv from './components/nav/nav';
import Home from './components/home/Home';
import Footer from './components/footer/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menucv/>
      	<Home/>
      	<Footer/>
      </div>
    );
  }
}

export default App;
