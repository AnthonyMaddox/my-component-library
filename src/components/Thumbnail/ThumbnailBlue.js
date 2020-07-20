import React from "react";
import "./Thumbnail.css";
import cart from "./cart_white.png";
import heart from "./hearts_white.png";
const ThumbnailBlue = (props) => {
  let classList = [];
  let types = ["thumbnail"];
  if (types.includes(props.type)) {
    classList.push(`thumbnail-${props.type}`);
  }
  if (props.image) {
    classList.push("image");
  }
  return (
    <div className="thumb-outer">
      <div className={classList.join(" ")}></div>
      <div className="belowImage">
        <div className="shoppingIconBlue">
          <img src={heart} />
        </div>
        <div className="heartIconBlue">
          <img src={cart} />
        </div>
      </div>
      <div className="bottomText">
        <div className="thumb-title">{props.label}</div>
        <div className="stars">
          &#9733; &#9733; &#9733; &#9733;{" "}
          <span className="starGrey">&#9733;</span>
        </div>
        <div className="price">
          $499 <span className="crossOut">$599</span>
        </div>
      </div>
    </div>
  );
};
export default ThumbnailBlue;