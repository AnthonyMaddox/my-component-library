import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail from "./Thumbnail";
import ThumbnailBlue from "./ThumbnailBlue";
import ThumbnailHorizon from "./ThumbnailHorizon";

storiesOf("Thumbnail", module)
.add("Thumbnail Vertical", () => (
   <Thumbnail image type="thumbnail" label="Apple Macbook Pro"/>
 ))
 .add("Thumbnail Vertical Blue", () => (
   <ThumbnailBlue image type="thumbnail" label="Apple Macbook Pro"/>
 ))
 .add("Thumbnail Horizontal", () => (
   <ThumbnailHorizon image horizon type="thumbnail" label="Apple Macbook Pro"/>
 ))
 .add("Thumbnail Horizontal Bose", () => (
   <ThumbnailHorizon imageBose horizon type="thumbnail" label="Apple Macbook Pro"/>
 ))