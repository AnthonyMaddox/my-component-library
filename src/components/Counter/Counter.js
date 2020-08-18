import React, { Component } from "react";
import "./Counter.css";

//need conditionals that stop counter from going over ten or under 1
//put conditionals in increase decrease count functions
class Counter extends Component {
  //constructor
  constructor(props) {
    //calls on parent constructor super()
    super(props);
    //Define initial state of component
    this.state = {
      count: 0,
      max: props.max,
      min: props.min,
      step: props.step,
    };
  }
  increaseCount = () => {
    let newCount = this.state.count + this.state.step;
    if (this.state.count < this.state.max) {
      //setState takes an argument of the updated value pairs in state
      this.setState({
        count: newCount,
      });
    } else {
      this.setState({
        count: this.state.count,
      });
    }
  };
  decreaseCount = () => {
    let newCount = this.state.count - this.state.step;
    if (this.state.count > this.state.min) {
      this.setState({
        count: newCount,
      });
    }
  };

  //constructor
  render() {
    console.log(this.state);
    return (
      <div id="counterDiv">
        <button className="countB" onClick={this.decreaseCount}>
          -
        </button>
        <button className="countB middleNum">{this.state.count}</button>
        <button className="countB" onClick={this.increaseCount}>
          +
        </button>
      </div>
    );
  }
}
export default Counter;
