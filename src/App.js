import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Body from './body';
import Footer from './footer';


class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Header />
      <Body />
      <Footer />
      </div>
    );
  }
}

export default App;