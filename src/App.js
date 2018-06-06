import React, { Component } from 'react';
import {Router, Route} from 'react-router';
import Menu from './components/Menu';
import Slider from './components/Slider';
import Services from './components/Services';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Slider />
        <Services />
      </div>
    );

  }
}

export default App;
