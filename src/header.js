import React, { Component } from "react";
// import { Div, Anchor, Textbox, Button } from "./templates";

class Header extends Component {
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
  older(i) {
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
  younger(j) {
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
  reset(k) {
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
    if (this.state.Profile.startAge < this.state.Profile.endAge) {
      return (
        <div className="header">
          My Name is {this.state.Profile.Name}, I am
          {this.state.Profile.startAge} Years old <br />
          <a href="#" onClick={i => this.older(i)}>
            Click
          </a>
          Me to see me grow old <br />
          <a href="#" onClick={j => this.younger(j)}>
            Click
          </a>
          Me to see me grow Younger
        </div>
      );
    } else {
      return (
        <div className="header">
          Bro u just made me 30 years old. Stop doing It...<br />
          <a href="#" onClick={k => this.reset(k)}>
            Click
          </a>
          to reset my age. <br />
        </div>
      );
    }
  }
}

export default Header;
