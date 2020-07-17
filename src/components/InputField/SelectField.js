import React from "react";
import "./InputField.css";

const SelectField = (props) => {
  let classList = [];
  let types = ["select"];
  if (types.includes(props.type)) {
    classList.push(`select-${props.type}`);
  }
  if (props.medium) {
    classList.push(`select-${props.type}-medium`);
  }
  if (props.large) {
    classList.push(`select-${props.type}-large`);
  }
  if (props.outline) {
    classList.push(`select-${props.type}-outline`);
  }

  return (
    <select className={classList.join(" ")}>
      <option label={props.label}></option>
    </select>
  );
};
export default SelectField;
