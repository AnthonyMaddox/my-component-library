import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail from "./Thumbnail";
import ThumbnailBlue from "./ThumbnailBlue";
import ThumbnailHorizon from "./ThumbnailHorizon";
import ThumbnailBose from "./ThumbnailBose";
import Inline from "./Inline";


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
 .add("Thumbnail Inline", () => (
   <Inline imageInline label="Beats Solo2 On Ear HeadPhones - Black" description="Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ..."/>
 ))