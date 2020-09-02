import React, { Component } from "react";
import Timer from "./Timer";
import Test from "./Test";
import "./App.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      seconds: "00", // responsible for the seconds
      minutes: "30", // responsible for the minutes
      submit: false,
      finish: false,
      email: this.props.email,
    };
    this.secondsRemaining = "";
    this.intervalHandle = "";
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }
  handleChange() {
    this.setState({
      minutes: 30,
    });
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;
    this.setState({
      minutes: min,
      seconds: sec,
    });
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      });
    }
    if (min < 10) {
      this.setState({
        value: "0" + min,
      });
    }
    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }
    if (this.state.minutes === 0 && this.state.seconds === "01") {
      this.setState({ finish: true });
      console.log("finish");
    }
    this.secondsRemaining--;
  }
  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
    this.setState({ loading: true, proceed: true, submit: true });
  }

  render() {
    if (this.state.submit === false) {
      return (
        <div className="App-header2">
          <div>
            <div className="error2">Instructions-</div><hr/>
            1)The test consists of 30 questions, and you're allowed maximum of 30 minutes.<br/>
            2)Keep in mind do not refresh the page once you're registered else all your progress will be lost.<br/>
            3)Only one attempt is allowed a given email-id.<br/>
            4)After submitting the test do press finish to store your progress.<br/>
            5)All questions are compulsory, also there's no negative marking.<br/>     
          </div>
          <div className="position">
            <Timer
              className="timer"
              minutes={this.state.minutes}
              seconds={this.state.seconds}
            />
            <button
              onClick={this.startCountDown}
              id="ip4"
              disabled={this.state.loading}
            >
              Start
            </button>
          </div>
        </div>
      );
    }
    if (this.state.proceed === true) {
      return (
        <>
          <div className="timer">
            <div className="myfont">
              Time Left:
              <Timer className="App-header2"
                minutes={this.state.minutes}
                seconds={this.state.seconds}
              />
            </div>
          </div>
          {this.state.finish === false ? (
            <>
              <Test setsubmit={this.state.finish} email={this.props.email} className="App-header2"/>
            </>
          ) : (
            <>
              <Test setsubmit={this.state.finish} email={this.props.email} className="App-header2"/>
            </>
          )}
        </>
      );
    }
  }
}
