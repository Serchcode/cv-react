import React, { Component } from 'react';
import Menucv from './components/nav/nav';
import Footer from './components/footer/footer';
import Routes from './routes';
import './App.css';
import Particles from 'react-particles-js';


class App extends Component {
  render() {
    return (
      <div className="App">      
        <Menucv/>
        <Particles/>        
      	<Routes/>
      	<Footer/>
      </div>
    );
  }
}

export default App;
