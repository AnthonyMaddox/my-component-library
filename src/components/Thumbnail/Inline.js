import React from "react";
import "./Thumbnail.css";
import IconShopping from "./../Icon/IconShopping.js";
import Icon from "./../Icon/Icon.js";

const Inline = (props) => {
  let classList = [];
  if (props.imageHorizon) {
    classList.push("imageHorizon");
  }
  if (props.imageBose) {
    classList.push("imageBose");
  }
  if (props.imageInline) {
    classList.push("imageInline");
  }

  return (
    <div className="thumb-outer-inline">
      <div className={classList.join(" ")}>
        <span className="hot">HOT</span>
      </div>
      <div className="bottomText-inline">
        <div className="thumb-title">{props.label}</div>
        <div className="stars">
          &#9733; &#9733; &#9733; &#9733;
          <span className="starGrey">&#9733;</span>{" "}
          <span className="inlineRev">0 reviews</span>
          <span className="inlineBlue">Submit a review</span>
        </div>
        <div className="price">
          $499 <span className="crossOut">$599</span>
        </div>
        <p className="description">{props.description}</p>
        <div className="shopButtons">
          <div className="shopping">
            <IconShopping type="shopping" />
          </div>
          <div className="like">
            {" "}
            <Icon type="heart" small />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Inline;
