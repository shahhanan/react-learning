import React, { Component } from "react";

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [this.props]
    };
  }

  componentWillReceiveProps = nextProps => {
    let { data } = this.state;
    data.push(nextProps);
    this.setState(data);
  };

  render() {
    let { data } = this.state;
    let populate = data.map((row, i) => {
     
      return (
        <div key={i}>
          {" "}
          you just changed my age to {row.Profile.startAge}
          <a href="#" onClick={() => this.props.jumpTo(row)}>
            Undo This Step{" "}
          </a>
          <br />
        </div>
      );
   
    });
  return(<div className="body">{populate}</div>);
  }
}

export default Body;
