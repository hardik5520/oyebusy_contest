import React, { Component } from "react";

export default class Timer extends Component {
  render() {
    return (
      <div>
        {this.props.minutes}:{this.props.seconds}
      </div>
    );
  }
}
