import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
   let classList = [];
   let types = ["Checkbox"];
   if (types.includes(props.type)) {
     classList.push(`checkbox-${props.type}`);
   }
   if (props.black) {
      classList.push("blackbox")
   }
   return (
      <input type="checkbox" className={classList.join(" ")} />
   )
}

export default Checkbox