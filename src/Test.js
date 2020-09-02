import React, { Component } from "react";
import firebase from "./Firestore";
import update from "react-addons-update";

export default class Test extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      datasend: false,
      submitted: false,
      qb1: {},qb2: {},qb3: {},qb4: {},qb5: {},qb6: {},
      op1: [],op2: [],op3: [],op4: [],op5: [],op6: [],
      qb7: {},qb8: {},qb9: {},qb10: {},qb11: {},qb12: {},
      op7: [],op8: [],op9: [],op10: [],op11: [],op12: [],
      qb13: {},qb14: {},qb15: {},qb16: {},qb17: {},qb18: {},
      op13: [],op14: [],op15: [],op16: [],op17: [],op18: [],
      qb19: {},qb20: {},qb21: {},qb22: {},qb23: {},qb24: {},
      op19: [],op20: [],op21: [],op22: [],op23: [],op24: [],
      qb25: {},qb26: {},qb27: {},qb28: {},qb29: {},qb30: {},
      op25: [],op26: [],op27: [],op28: [],op29: [],op30: [],
      sa: [],
      answer: [],
      loading: false,
      score: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount(props) {
    const db = firebase.firestore();
    //C questions
    //qb1
    await db
      .collection("C questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb1: data, op1: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb2
    await db
      .collection("C questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb2: data, op2: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb3
    await db
      .collection("C questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb3: data, op3: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb4
    await db
      .collection("C questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb4: data, op4: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb5
    await db
      .collection("C questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb5: data, op5: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
        //console.log("state answer=",this.state.answer);
      });
    //qb6
    await db
      .collection("C questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb6: data, op6: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });

    //java questions
    //qb1
    await db
      .collection("java questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb7: data, op7: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb2
    await db
      .collection("java questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb8: data, op8: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb3
    await db
      .collection("java questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb9: data, op9: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb4
    await db
      .collection("java questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb10: data, op10: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb5
    await db
      .collection("java questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb11: data, op11: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb6
    await db
      .collection("java questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb12: data, op12: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });

    //python questions
    //qb1
    await db
      .collection("python questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb13: data, op13: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb2
    await db
      .collection("python questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb14: data, op14: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb3
    await db
      .collection("python questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb15: data, op15: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb4
    await db
      .collection("python questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb16: data, op16: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb5
    await db
      .collection("python questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb17: data, op17: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
        //console.log("state answer=",this.state.answer);
      });
    //qb6
    await db
      .collection("python questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb18: data, op18: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });

    //webdev questions
    //qb1
    await db
      .collection("webdev questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb19: data, op19: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb2
    await db
      .collection("webdev questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb20: data, op20: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb3
    await db
      .collection("webdev questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb21: data, op21: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb4
    await db
      .collection("webdev questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb22: data, op22: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb5
    await db
      .collection("webdev questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb23: data, op23: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb6
    await db
      .collection("webdev questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb24: data, op24: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });

    //common questions
    //qb1
    await db
      .collection("common questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb25: data, op25: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb2
    await db
      .collection("common questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb26: data, op26: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb3
    await db
      .collection("common questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb27: data, op27: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb4
    await db
      .collection("common questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb28: data, op28: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
    //qb5
    await db
      .collection("common questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb29: data, op29: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
        //console.log("state answer=",this.state.answer);
      });
    //qb6
    await db
      .collection("common questions")
      .doc(Math.floor(Math.random() * 19 + 1).toString())
      .get()
      .then((doc) => {
        const data = doc.data();
        this.setState({ qb30: data, op30: data.options });
        this.setState({ answer: [...this.state.answer, data.answer] });
      });
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    var ele = document.getElementsByName(name);
    if (ele[0].checked) {
      var value = ele[0].value;
      var id = Number(ele[0].id);
      this.setState(
        update(this.state, {
          sa: {
            [id]: {
              $set: value,
            },
          },
        })
      );
    } else if (ele[1].checked) {
      value = ele[1].value;
      //console.log(value);
      id = Number(ele[1].id);
      //console.log(id);
      this.setState(
        update(this.state, {
          sa: {
            [id]: {
              $set: value,
            },
          },
        })
      );
    } else if (ele[2].checked) {
      value = ele[2].value;
      // console.log(value);
      id = Number(ele[2].id);
      // console.log(id);
      this.setState(
        update(this.state, {
          sa: {
            [id]: {
              $set: value,
            },
          },
        })
      );
    } else if (ele[3].checked) {
      value = ele[3].value;
      //console.log(value);
      id = Number(ele[3].id);
      //console.log(id);
      this.setState(
        update(this.state, {
          sa: {
            [id]: {
              $set: value,
            },
          },
        })
      );
    }
  };
  handlesubmit = () => {
    var finalscore = 0;
    //change 2 to 30 here
    for (var i = 0; i < this.state.sa.length; i++) {
      var selected=this.state.sa[i];
      for(var j=0;j<this.state.answer.length;j++)
      {
        if (this.state.answer[j] === selected) {
          finalscore = finalscore + 1;
      }}
    }
    const db1 = firebase.firestore();
    db1
      .collection("scores")
      .doc(this.props.email)
      .set({
        score: finalscore,
      })
      .then(
        //console.log("Success"),
        this.setState({ submitted: true }, () => {})
      );
  };
  reloadwindow = () => {
    window.location.reload();
  };
  render() {
    if (this.props.setsubmit === false && this.state.submitted === false) {
      if (
        this.state.qb1.lenght !== 0 &&
        this.state.qb2.lenght !== 0 &&
        this.state.qb3.lenght !== 0 &&
        this.state.qb4.lenght !== 0 &&
        this.state.qb5.lenght !== 0
      ) {
        return (
          <div className="App-header2">
            <div className="setPosition">
              <div className="card2">
                1){this.state.qb1.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op1[0]}
                    onChange={this.handleChange}
                    id="0"
                    name="name1"
                  />
                  {this.state.op1[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op1[1]}
                    onChange={this.handleChange}
                    id="0"
                    name="name1"
                  />
                  {this.state.op1[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op1[2]}
                    onChange={this.handleChange}
                    id="0"
                    name="name1"
                  />
                  {this.state.op1[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op1[3]}
                    onChange={this.handleChange}
                    id="0"
                    name="name1"
                  />
                  {this.state.op1[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                2){this.state.qb2.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op2[0]}
                    onChange={this.handleChange}
                    id="1"
                    name="name2"
                  />
                  {this.state.op2[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op2[1]}
                    onChange={this.handleChange}
                    id="1"
                    name="name2"
                  />
                  {this.state.op2[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op2[2]}
                    onChange={this.handleChange}
                    id="1"
                    name="name2"
                  />
                  {this.state.op2[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op2[3]}
                    onChange={this.handleChange}
                    id="1"
                    name="name2"
                  />
                  {this.state.op2[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                3){this.state.qb3.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op3[0]}
                    onChange={this.handleChange}
                    id="2"
                    name="name3"
                  />
                  {this.state.op3[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op3[1]}
                    onChange={this.handleChange}
                    id="2"
                    name="name3"
                  />
                  {this.state.op3[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op3[2]}
                    onChange={this.handleChange}
                    id="2"
                    name="name3"
                  />
                  {this.state.op3[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op3[3]}
                    onChange={this.handleChange}
                    id="2"
                    name="name3"
                  />
                  {this.state.op3[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                4){this.state.qb4.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op4[0]}
                    onChange={this.handleChange}
                    id="3"
                    name="name4"
                  />
                  {this.state.op4[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op4[1]}
                    onChange={this.handleChange}
                    id="3"
                    name="name4"
                  />
                  {this.state.op4[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op4[2]}
                    onChange={this.handleChange}
                    id="3"
                    name="name4"
                  />
                  {this.state.op4[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op4[3]}
                    onChange={this.handleChange}
                    id="3"
                    name="name4"
                  />
                  {this.state.op4[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                5){this.state.qb5.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op5[0]}
                    onChange={this.handleChange}
                    id="4"
                    name="name5"
                  />
                  {this.state.op5[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op5[1]}
                    onChange={this.handleChange}
                    id="4"
                    name="name5"
                  />
                  {this.state.op5[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op5[2]}
                    onChange={this.handleChange}
                    id="4"
                    name="name5"
                  />
                  {this.state.op5[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op5[3]}
                    onChange={this.handleChange}
                    id="4"
                    name="name5"
                  />
                  {this.state.op5[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                6){this.state.qb6.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op6[0]}
                    onChange={this.handleChange}
                    id="5"
                    name="name6"
                  />
                  {this.state.op6[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op6[1]}
                    onChange={this.handleChange}
                    id="5"
                    name="name6"
                  />
                  {this.state.op6[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op6[2]}
                    onChange={this.handleChange}
                    id="5"
                    name="name6"
                  />
                  {this.state.op6[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op6[3]}
                    onChange={this.handleChange}
                    id="5"
                    name="name6"
                  />
                  {this.state.op6[3]}
                </label>
                <br />
              </div>
              <br />
              {/* set two */}
              <div className="card2">
                7){this.state.qb7.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op7[0]}
                    onChange={this.handleChange}
                    id="6"
                    name="name7"
                  />
                  {this.state.op7[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op7[1]}
                    onChange={this.handleChange}
                    id="6"
                    name="name7"
                  />
                  {this.state.op7[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op7[2]}
                    onChange={this.handleChange}
                    id="6"
                    name="name7"
                  />
                  {this.state.op7[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op7[3]}
                    onChange={this.handleChange}
                    id="6"
                    name="name7"
                  />
                  {this.state.op7[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                8){this.state.qb8.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op8[0]}
                    onChange={this.handleChange}
                    id="7"
                    name="name8"
                  />
                  {this.state.op8[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op8[1]}
                    onChange={this.handleChange}
                    id="7"
                    name="name8"
                  />
                  {this.state.op8[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op8[2]}
                    onChange={this.handleChange}
                    id="7"
                    name="name8"
                  />
                  {this.state.op8[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op8[3]}
                    onChange={this.handleChange}
                    id="7"
                    name="name8"
                  />
                  {this.state.op8[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                9){this.state.qb9.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op9[0]}
                    onChange={this.handleChange}
                    id="8"
                    name="name9"
                  />
                  {this.state.op9[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op9[1]}
                    onChange={this.handleChange}
                    id="8"
                    name="name9"
                  />
                  {this.state.op9[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op9[2]}
                    onChange={this.handleChange}
                    id="8"
                    name="name9"
                  />
                  {this.state.op9[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op9[3]}
                    onChange={this.handleChange}
                    id="8"
                    name="name9"
                  />
                  {this.state.op9[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                10){this.state.qb10.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op10[0]}
                    onChange={this.handleChange}
                    id="9"
                    name="name10"
                  />
                  {this.state.op10[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op10[1]}
                    onChange={this.handleChange}
                    id="9"
                    name="name10"
                  />
                  {this.state.op10[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op10[2]}
                    onChange={this.handleChange}
                    id="9"
                    name="name10"
                  />
                  {this.state.op10[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op10[3]}
                    onChange={this.handleChange}
                    id="9"
                    name="name10"
                  />
                  {this.state.op10[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                11){this.state.qb11.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op11[0]}
                    onChange={this.handleChange}
                    id="10"
                    name="name11"
                  />
                  {this.state.op11[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op11[1]}
                    onChange={this.handleChange}
                    id="10"
                    name="name11"
                  />
                  {this.state.op11[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op11[2]}
                    onChange={this.handleChange}
                    id="10"
                    name="name11"
                  />
                  {this.state.op11[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op11[3]}
                    onChange={this.handleChange}
                    id="10"
                    name="name11"
                  />
                  {this.state.op11[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                12){this.state.qb12.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op12[0]}
                    onChange={this.handleChange}
                    id="11"
                    name="name12"
                  />
                  {this.state.op12[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op12[1]}
                    onChange={this.handleChange}
                    id="11"
                    name="name12"
                  />
                  {this.state.op12[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op12[2]}
                    onChange={this.handleChange}
                    id="11"
                    name="name12"
                  />
                  {this.state.op12[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op12[3]}
                    onChange={this.handleChange}
                    id="11"
                    name="name12"
                  />
                  {this.state.op12[3]}
                </label>
                <br />
              </div>
              <br />
              {/* set three*/}
              <div className="card2">
                13){this.state.qb13.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op13[0]}
                    onChange={this.handleChange}
                    id="12"
                    name="name13"
                  />
                  {this.state.op13[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op13[1]}
                    onChange={this.handleChange}
                    id="12"
                    name="name13"
                  />
                  {this.state.op13[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op13[2]}
                    onChange={this.handleChange}
                    id="12"
                    name="name13"
                  />
                  {this.state.op13[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op13[3]}
                    onChange={this.handleChange}
                    id="12"
                    name="name13"
                  />
                  {this.state.op13[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                14){this.state.qb14.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op14[0]}
                    onChange={this.handleChange}
                    id="13"
                    name="name14"
                  />
                  {this.state.op14[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op14[1]}
                    onChange={this.handleChange}
                    id="13"
                    name="name14"
                  />
                  {this.state.op14[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op14[2]}
                    onChange={this.handleChange}
                    id="13"
                    name="name14"
                  />
                  {this.state.op14[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op14[3]}
                    onChange={this.handleChange}
                    id="13"
                    name="name14"
                  />
                  {this.state.op14[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                15){this.state.qb15.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op15[0]}
                    onChange={this.handleChange}
                    id="14"
                    name="name15"
                  />
                  {this.state.op15[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op15[1]}
                    onChange={this.handleChange}
                    id="14"
                    name="name15"
                  />
                  {this.state.op15[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op15[2]}
                    onChange={this.handleChange}
                    id="14"
                    name="name15"
                  />
                  {this.state.op15[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op15[3]}
                    onChange={this.handleChange}
                    id="14"
                    name="name15"
                  />
                  {this.state.op15[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                16){this.state.qb16.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op16[0]}
                    onChange={this.handleChange}
                    id="15"
                    name="name16"
                  />
                  {this.state.op16[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op16[1]}
                    onChange={this.handleChange}
                    id="15"
                    name="name16"
                  />
                  {this.state.op16[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op16[2]}
                    onChange={this.handleChange}
                    id="15"
                    name="name16"
                  />
                  {this.state.op16[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op16[3]}
                    onChange={this.handleChange}
                    id="15"
                    name="name16"
                  />
                  {this.state.op16[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                17){this.state.qb17.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op17[0]}
                    onChange={this.handleChange}
                    id="16"
                    name="name17"
                  />
                  {this.state.op17[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op17[1]}
                    onChange={this.handleChange}
                    id="16"
                    name="name17"
                  />
                  {this.state.op17[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op17[2]}
                    onChange={this.handleChange}
                    id="16"
                    name="name17"
                  />
                  {this.state.op17[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op17[3]}
                    onChange={this.handleChange}
                    id="16"
                    name="name17"
                  />
                  {this.state.op17[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                18){this.state.qb18.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op18[0]}
                    onChange={this.handleChange}
                    id="17"
                    name="name18"
                  />
                  {this.state.op18[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op18[1]}
                    onChange={this.handleChange}
                    id="17"
                    name="name18"
                  />
                  {this.state.op18[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op18[2]}
                    onChange={this.handleChange}
                    id="17"
                    name="name18"
                  />
                  {this.state.op18[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op18[3]}
                    onChange={this.handleChange}
                    id="17"
                    name="name18"
                  />
                  {this.state.op18[3]}
                </label>
                <br />
              </div>
              <br />
              {/* set four */}
              <div className="card2">
                19){this.state.qb19.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op19[0]}
                    onChange={this.handleChange}
                    id="18"
                    name="name19"
                  />
                  {this.state.op19[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op19[1]}
                    onChange={this.handleChange}
                    id="18"
                    name="name19"
                  />
                  {this.state.op19[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op19[2]}
                    onChange={this.handleChange}
                    id="18"
                    name="name19"
                  />
                  {this.state.op19[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op19[3]}
                    onChange={this.handleChange}
                    id="18"
                    name="name19"
                  />
                  {this.state.op19[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                20){this.state.qb20.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op20[0]}
                    onChange={this.handleChange}
                    id="19"
                    name="name20"
                  />
                  {this.state.op20[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op20[1]}
                    onChange={this.handleChange}
                    id="19"
                    name="name20"
                  />
                  {this.state.op20[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op20[2]}
                    onChange={this.handleChange}
                    id="19"
                    name="nam209"
                  />
                  {this.state.op20[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op20[3]}
                    onChange={this.handleChange}
                    id="19"
                    name="name20"
                  />
                  {this.state.op20[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                21){this.state.qb21.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op21[0]}
                    onChange={this.handleChange}
                    id="20"
                    name="name21"
                  />
                  {this.state.op21[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op21[1]}
                    onChange={this.handleChange}
                    id="20"
                    name="name21"
                  />
                  {this.state.op21[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op21[2]}
                    onChange={this.handleChange}
                    id="20"
                    name="name21"
                  />
                  {this.state.op21[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op21[3]}
                    onChange={this.handleChange}
                    id="20"
                    name="name21"
                  />
                  {this.state.op21[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                22){this.state.qb22.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op22[0]}
                    onChange={this.handleChange}
                    id="21"
                    name="name22"
                  />
                  {this.state.op22[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op22[1]}
                    onChange={this.handleChange}
                    id="21"
                    name="name22"
                  />
                  {this.state.op22[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op22[2]}
                    onChange={this.handleChange}
                    id="21"
                    name="name22"
                  />
                  {this.state.op22[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op22[3]}
                    onChange={this.handleChange}
                    id="21"
                    name="name22"
                  />
                  {this.state.op22[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                23){this.state.qb23.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op23[0]}
                    onChange={this.handleChange}
                    id="22"
                    name="name23"
                  />
                  {this.state.op23[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op23[1]}
                    onChange={this.handleChange}
                    id="22"
                    name="name23"
                  />
                  {this.state.op23[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op23[2]}
                    onChange={this.handleChange}
                    id="22"
                    name="name23"
                  />
                  {this.state.op23[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op23[3]}
                    onChange={this.handleChange}
                    id="22"
                    name="name23"
                  />
                  {this.state.op23[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                24){this.state.qb24.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op24[0]}
                    onChange={this.handleChange}
                    id="23"
                    name="name24"
                  />
                  {this.state.op24[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op24[1]}
                    onChange={this.handleChange}
                    id="23"
                    name="name24"
                  />
                  {this.state.op24[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op24[2]}
                    onChange={this.handleChange}
                    id="23"
                    name="name24"
                  />
                  {this.state.op24[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op24[3]}
                    onChange={this.handleChange}
                    id="23"
                    name="name24"
                  />
                  {this.state.op24[3]}
                </label>
                <br />
              </div>
              <br />

              {/* set five */}
              <div className="card2">
                25){this.state.qb25.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op25[0]}
                    onChange={this.handleChange}
                    id="24"
                    name="name25"
                  />
                  {this.state.op25[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op25[1]}
                    onChange={this.handleChange}
                    id="24"
                    name="name25"
                  />
                  {this.state.op25[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op25[2]}
                    onChange={this.handleChange}
                    id="24"
                    name="name25"
                  />
                  {this.state.op25[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op25[3]}
                    onChange={this.handleChange}
                    id="24"
                    name="name25"
                  />
                  {this.state.op25[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                26){this.state.qb26.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op26[0]}
                    onChange={this.handleChange}
                    id="25"
                    name="name26"
                  />
                  {this.state.op26[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op26[1]}
                    onChange={this.handleChange}
                    id="25"
                    name="name26"
                  />
                  {this.state.op26[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op26[2]}
                    onChange={this.handleChange}
                    id="25"
                    name="nam206"
                  />
                  {this.state.op26[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op26[3]}
                    onChange={this.handleChange}
                    id="25"
                    name="name26"
                  />
                  {this.state.op26[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                27){this.state.qb27.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op27[0]}
                    onChange={this.handleChange}
                    id="26"
                    name="name27"
                  />
                  {this.state.op27[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op27[1]}
                    onChange={this.handleChange}
                    id="26"
                    name="name27"
                  />
                  {this.state.op27[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op27[2]}
                    onChange={this.handleChange}
                    id="26"
                    name="name27"
                  />
                  {this.state.op27[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op27[3]}
                    onChange={this.handleChange}
                    id="26"
                    name="name27"
                  />
                  {this.state.op27[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                28){this.state.qb28.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op28[0]}
                    onChange={this.handleChange}
                    id="27"
                    name="name28"
                  />
                  {this.state.op28[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op28[1]}
                    onChange={this.handleChange}
                    id="27"
                    name="name28"
                  />
                  {this.state.op28[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op28[2]}
                    onChange={this.handleChange}
                    id="27"
                    name="name28"
                  />
                  {this.state.op28[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op28[3]}
                    onChange={this.handleChange}
                    id="27"
                    name="name28"
                  />
                  {this.state.op28[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                29){this.state.qb29.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op29[0]}
                    onChange={this.handleChange}
                    id="28"
                    name="name29"
                  />
                  {this.state.op29[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op29[1]}
                    onChange={this.handleChange}
                    id="28"
                    name="name29"
                  />
                  {this.state.op29[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op29[2]}
                    onChange={this.handleChange}
                    id="28"
                    name="name29"
                  />
                  {this.state.op29[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op29[3]}
                    onChange={this.handleChange}
                    id="28"
                    name="name29"
                  />
                  {this.state.op29[3]}
                </label>
                <br />
              </div>
              <br />
              <div className="card2">
                30){this.state.qb30.question}
                <br />
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op30[0]}
                    onChange={this.handleChange}
                    id="29"
                    name="name30"
                  />
                  {this.state.op30[0]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op30[1]}
                    onChange={this.handleChange}
                    id="29"
                    name="name30"
                  />
                  {this.state.op30[1]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op30[2]}
                    onChange={this.handleChange}
                    id="29"
                    name="name30"
                  />
                  {this.state.op30[2]}
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    value={this.state.op30[3]}
                    onChange={this.handleChange}
                    id="29"
                    name="name30"
                  />
                  {this.state.op30[3]}
                </label>
                <br />
              </div>

              <br />
              <button onClick={this.handlesubmit} id="ip4">
                Submit
              </button>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="App-header2">
          <div className="mymessage">
            <div className="thanku">
              <h3>THANK YOU YOUR RECORD HAS BEEN SUBMITTED</h3>
              <h4>
                PLEASE CLICK BELOW TO END THE TEST AND EVALUATE YOUR RESULT
              </h4>
              <button onClick={(this.handlesubmit, this.reloadwindow)} id="ip5">
                FINISH
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
