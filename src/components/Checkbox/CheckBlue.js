import React from "react";
import "./Checkbox.css";

const CheckBlue = (props) => {
  let classList = [];
  
  if (props.black) {
    classList.push("innerBluebox");
  }
  if (props.noDisplay) {
   classList.push("noDisplay");
 }
 if (props.blue) {
   classList.push("innerBlueBox");
 }
  return (
    <div className="outerBlueBox">
      <div className={classList.join(" ")}>&#x2713;</div>
    </div>
  );
};
export default CheckBlue;
