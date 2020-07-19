import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnail from "./Thumbnail";

storiesOf("Thumbnail", module)
.add("Thumbnail Vertical", () => (
   <Thumbnail image type="thumbnail" label="Apple Macbook Pro"/>
 ))