import React, { Component } from 'react';
import Menucv from './components/nav/nav';
import Footer from './components/footer/footer';
import Routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menucv/>
      	<Routes/>
      	<Footer/>
      </div>
    );
  }
}

export default App;
