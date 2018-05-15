import React, { Component } from "react";

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = [this.props];
  }

  componentWillReceiveProps = nextProps => {
    let temp = this.state;
    temp.push(nextProps);

    this.setState(temp);
  };

  render() {
    let populate = this.state.map((row, i) => {
      return (
        <span key={i}> you just changed my age to {row.Profile.startAge} </span>
      );
    });
    return <div className="body">{populate}</div>;
  }
}

export default Body;
