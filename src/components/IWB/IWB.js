import React from "react";
import "./IWB.css";
const IWB = (props) => {
  let classList = [];
  /*let types = ["IWB", "TextField"];
  if (types.includes(props.type)) {
    classList.push(`IWB-${props.type}`);
  }*/
  if (props.large) {
    classList.push("large");
  }
  if (props.small) {
    classList.push("small");
  }
  return (
    <div id="IWBDiv">
      <input
        id="textField"
        className={classList.join(" ")}
        type="text"
        value={props.value}
        placeholder={props.placeholder}
      />
      <input
        id="textButton"
        className={classList.join(" ")}
        type="submit"
        value={props.label}
        onClick={props.action}
      />
    </div>
  );
};

export default IWB;
