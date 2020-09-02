import React, { Component } from "react";
import firebase from "./Firestore";
import Home from "./Home";
export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      mobile: "",
      email: "",
      city: "",
      datasend: false,
      found: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit() {
    //getting complete data
    this.setState({ found: false });
    const db = firebase.firestore();
    await db
      .collection("contest2")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        //console.log("complete data==",data);
        for (var i = 0; i < data.length; i++) {
          if (data[i].email === this.state.email) {
            this.setState({ found: true });
            // console.log(data[i].email);
            // console.log("found");
          }
        }
      });
    await db
      .collection("contest2")
      .doc(this.state.email)
      .set({
        name: this.state.name,
        email: this.state.email,
        mobile: this.state.mobile,
        city: this.state.city,
      })
      .then(this.setState({ datasend: true }));
    // console.log("email check=",this.state.found);
  }
  render() {
    if (this.state.found === false) {
      if (this.state.datasend === true) {
        return <Home email={this.state.email} className="App-header2" />;
      } else {
        return (
          <React.Fragment>
            <>
              <div className="card">
                <h4>Contest form</h4>
                <form name="loggingin">
                  <input
                    id="ip1"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Full Name"
                  />
                  <br />
                  <input
                    id="ip1"
                    type="text"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.handleChange}
                    placeholder="Mobile Number"
                  />
                  <br />
                  <input
                    id="ip1"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                  />
                  <br />
                  <input
                    id="ip1"
                    type="text"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                    placeholder="City Name"
                  />
                  <br />
                </form>

                <button id="ip3" color="danger" onClick={this.handleSubmit}>
                  Submit
                </button>
              </div>
            </>
          </React.Fragment>
        );
      }
    } else {
      return (
        <React.Fragment>
          <>
            <div className="card">
              <h4>Contest form</h4>
              <form name="loggingin">
                <input
                  id="ip1"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Full Name"
                />
                <br />
                <input
                  id="ip1"
                  type="text"
                  name="mobile"
                  value={this.state.mobile}
                  onChange={this.handleChange}
                  placeholder="Mobile Number"
                />
                <br />
                <input
                  id="ip1"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
                <br />
                <input
                  id="ip1"
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                  placeholder="City Name"
                />
                <br />
              </form>
              <div className="error">SORRY ONLY ONE ATTEMPT IS ALLOWED</div>
              <button id="ip3" color="danger" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </>
        </React.Fragment>
      );
    }
  }
}
