import React, { Component } from "react";
import "./Checkbox.css";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: [],
      checked: true,
    };

    /*let types = ["Checkbox"];
  if (types.includes(props.type)) {
    classList.push(`checkbox-${props.type}`);
  */

    if (props.black) {
      this.state.classList.push("innerBlackbox");
    }
    if (props.noDisplay) {
      this.state.classList.push("noDisplay");
    }
  }
  render() {
    return (
      <div className="outerBlackBox">
        <div className={this.state.classList.join(" ")}>&#x2713;</div>
      </div>
    );
  }
}

export default Checkbox;
