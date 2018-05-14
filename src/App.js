import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Body from './body';
import Footer from './footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Profile: {
        Name: "Hanan",
        startAge: 25,
        endAge: 30,
        MaritalStatus: "single"
      },
      Speed: "20km/s"
    };
  }
  older = () => {
    const newAge = this.state.Profile.startAge + 1;
    this.setState({
      Profile: {
        Name: "Hanan",
        startAge: newAge,
        endAge: 30,
        MaritalStatus: "single"
      },
      Speed: "20km/s"
    });
  }
  younger = () => {
    const newAge = this.state.Profile.startAge - 1;
    this.setState({
      Profile: {
        Name: "Hanan",
        startAge: newAge,
        endAge: 30,
        MaritalStatus: "single"
      },
      Speed: "20km/s"
    });
  }
  reset = () => {
    const newAge = 25;
    this.setState({
      Profile: {
        Name: "Hanan",
        startAge: newAge,
        endAge: 30,
        MaritalStatus: "single"
      },
      Speed: "20km/s"
    });
  }
  
  render() {
    return (
      <div className="App">
      <Header {...this.state} older={this.older} younger={this.younger} reset={this.reset} />
      <Body />
      <Footer />
      </div>
    );
  }
}

export default App;
