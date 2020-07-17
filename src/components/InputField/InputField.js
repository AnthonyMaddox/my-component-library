import React from "react";
import "./InputField.css";

const InputField = (props) => {
  let classList = [];
  let types = ["Email", "Text"];
  if (types.includes(props.type)) {
    classList.push(`email-${props.type}`);
  }
  if (props.medium) {
    classList.push(`email-${props.type}-medium`);
  }
  if (props.large) {
    classList.push(`email-${props.type}-large`);
  }
  return (
    <input
      type={props.type}
      placeholder={props.type}
      className={classList.join(" ")}
    />
  );
};
export default InputField;
