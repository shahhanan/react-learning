import React, { Component } from 'react';

export class Div extends Component {
    render() {
      return (
        <div className={this.props.className}>
      
        </div>
      );
    }
  }

  export class Anchor extends Component {
    render() {
      return (
      <a className={this.props.className} href={this.props.link}>{this.props.text}</a>
      );
    }
  }

  export class Textbox extends Component {
    render() {
      return (
       <input type="text" className={this.props.className} />
      );
    }
  }

  export class Button extends Component {
    render() {
      return (
        <button className={this.props.className} />
      );
    }
  }

