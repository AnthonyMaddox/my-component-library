import React from "react";
import "./Thumbnail.css";
import cart from "./cart_2.png";
import heart from "./hearts.png";
const ThumbnailHorizon = (props) => {
  let classList = [];
  let types = ["thumbnail"];
  if (types.includes(props.type)) {
    classList.push(`thumbnail-${props.type}`);
  }
  if (props.image) {
    classList.push("image");
  }
  if (props.imageBose) {
     classList.push("imageBose")
  }

  return (
    <div className="thumb-outer-horizon">
      <div className={classList.join(" ")}></div>
      <div className="belowImage-horizon">
        <div className="shoppingIcon">
          <img src={heart} />
        </div>
        <div className="heartIcon">
          <img src={cart} />
        </div>
      </div>
      <div className="bottomText-horizon">
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
export default ThumbnailHorizon;
