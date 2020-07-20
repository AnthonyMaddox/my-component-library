import React from "react";
import "./Thumbnail.css";
const ThumbnailBose = (props) => {
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
    <div className="thumb-outer-horizon-bose">
      <div className={classList.join(" ")}></div>
      <div className="bottomText-horizon-bose">
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
export default ThumbnailBose;