import React, { Component } from "react";
// import { Div, Anchor, Textbox, Button } from "./templates";

class Header extends Component {
 
constructor(props){
super(props)
let a = this.props.Profile.Name;
}

 
  
  

  render()  { 
    if (this.props.Profile.startAge < this.props.Profile.endAge) {
      return ( 
        <div className="header">
          My Name is {this.props.Profile.Name}, I am
          {this.props.Profile.startAge} Years old <br />
          <a href="#" onClick={this.props.older()}>
            Click
          </a>
          Me to see me grow old <br />
          <a href="#" onClick={this.props.younger()}>
            Click
          </a>
          Me to see me grow Younger
        </div>
      );
    } else {
      return (
        <div className="header">
          Bro u just made me 30 years old. Stop doing It...<br />
          <a href="#" onClick={this.props.reset()}>
            Click
          </a>
          to reset my age. <br />
        </div>    
      );  
    } 
  } 
}

export default Header;
