import React, { Component } from "react";
import "./Checkbox.css";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: [],
      checked: true,
    };

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
        <div
          className={this.state.classList.join(" ")}
          onClick={this.toggleChecked}
        >
          &#x2713;
        </div>
      </div>
    );
  }
  //trying to add click function to toggle noDisplay class css
  toggleChecked = () => {
    console.log("hello");
    if (this.state.classList.includes("noDisplay") === true) {
      console.log("condition");
    }
    //    this.state.classList.pop();
    //  }
    //  if (this.state.checked === true) {
    //    this.state.classList.push("noDisplay");
    //  }
  };
}

export default Checkbox;

/*let types = ["Checkbox"];
  if (types.includes(props.type)) {
    classList.push(`checkbox-${props.type}`);
  */
