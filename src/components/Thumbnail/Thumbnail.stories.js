import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail from "./Thumbnail";
import ThumbnailBlue from "./ThumbnailBlue";
import ThumbnailHorizon from "./ThumbnailHorizon";
import ThumbnailBose from "./ThumbnailBose";

storiesOf("Thumbnail", module)
.add("Thumbnail Vertical", () => (
   <Thumbnail image type="thumbnail" label="Apple Macbook Pro"/>
 ))
 .add("Thumbnail Vertical Blue", () => (
   <ThumbnailBlue image type="thumbnail" label="Apple Macbook Pro"/>
 ))
 .add("Thumbnail Horizontal", () => (
   <ThumbnailHorizon imageHorizon type="thumbnail" label="Apple Macbook Pro"/>
 ))
 .add("Thumbnail Horizontal Bose", () => (
   <ThumbnailBose imageBose horizon type="thumbnail" label="Beats Solo 2 Ear Headphones - Black"/>
 ))