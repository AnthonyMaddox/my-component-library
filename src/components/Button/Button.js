import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
  let classList = [];
  let types = ["primary", "danger", "success", "warning", "default"];
  if (types.includes(props.type)) {
    classList.push(`button-${props.type}`);
  }
  if (props.large) {
    classList.push("button-large");
  }
  if (props.small) {
    classList.push("button-small");
  }
  if (props.outline) {
    classList.push(`button-${props.type}-outline`);
  }
  if (props.faded) {
    classList.push(`button-${props.type}-faded`);
  }

  return (
    <button className={classList.join(" ")} onClick={props.whenClicked}>
      {props.label}
    </button>
  );
};

export default Button;
