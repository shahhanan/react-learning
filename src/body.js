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
    let length = data.length;
    if (data[length - 1].stepNumber != nextProps.stepNumber) {
      data.push(nextProps);
      this.setState(data);
    }
  };
  remove = index => {
    let { data } = this.state;
    let ln = data.length;
    var start_index = index;
    var number_of_elements_to_remove = ln - index;
    var removed_elements = data.splice(
      start_index,
      number_of_elements_to_remove
    );
    this.setState(data);
    this.props.undoStep(data[index - 1]);
  };
  render() {
    let { data } = this.state;
    let populate = data.map((row, i) => {
      if (i == 0) {
      } else {
        return (
          <div key={i}>
            {" spet " + i + " -> "}
            you just changed my age to {row.Profile.startAge}
            <a href="#" onClick={() => this.remove(row.stepNumber)}>
              {" "}
              Undo This Step
            </a>
            <br />
          </div>
        );
      }
    });
    return <div className="body">{populate}</div>;
  }
}

export default Body;
