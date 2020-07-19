import React from "react";
import "./Checkbox.css";

const CheckWords = (props) => {
  let classList = [];

  if (props.words) {
    classList.push("innerWordsbox");
  }
  return (
    <div className="outside">
        <span className={classList.join(" ")}> &#x2713;</span>
      <span className="checkWords"> {props.label}</span>
    </div>
  );
};
export default CheckWords;
