import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
  let classList = [];
  /*let types = ["Checkbox"];
  if (types.includes(props.type)) {
    classList.push(`checkbox-${props.type}`);
  */
  
  if (props.black) {
    classList.push("innerBlackbox");
  }
  if (props.noDisplay) {
   classList.push("noDisplay");
 }
 if (props.blue) {
   classList.push("innerBlueBox");
 }
  return (
    <div className="outerBlackBox">
      <div className={classList.join(" ")}>&#x2713;</div>
    </div>
  );
};

export default Checkbox;
