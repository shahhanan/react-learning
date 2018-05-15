import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

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
      stepNumber: 0,
      Speed: "20km/s"
    };
  }
  older = () => {
    const newAge = this.state.Profile.startAge + 1;
    let step = this.stepNumber + 1;
    this.setState({
      Profile: {
        Name: "Hanan",
        startAge: newAge,
        endAge: 30,
        MaritalStatus: "single"
      },
      stepNumber: step,
      Speed: "20km/s"
    });
  };
  younger = () => {
    const newAge = this.state.Profile.startAge - 1;
    let step = this.stepNumber + 1;
    this.setState({
      Profile: {
        Name: "Hanan",
        startAge: newAge,
        endAge: 30,
        MaritalStatus: "single"
      },
      stepNumber: step,
      Speed: "20km/s"
    });
  };
  reset = () => {
    // const Age = this.state.Profile.endAge - this.state.stepNumber;
    this.setState({
      Profile: {
        Name: "Hanan",
        startAge: 25,
        endAge: 30,
        MaritalStatus: "single"
      },
      stepNumber: 0,
      Speed: "20km/s"
    });
  };
  jumpTo = (newStateData) => {
    let {newData} = newStateData;
    this.setState(newData); 
  }

  render() {
    let {Profile} = this.state;
    return (
      <div className="App">
        <Header
          Profile={Profile}
          older={this.older}
          younger={this.younger}
          reset={this.reset}
        />
        <Body Profile={Profile} jumpTo={this.jumpTo} />
        <Footer />
      </div>
    );
  }
}

export default App;
