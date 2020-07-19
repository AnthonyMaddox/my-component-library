import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";

storiesOf("Checkbox", module)
  //primary (blue)
  .add("Checkbox Black Empty", () => (
    <Checkbox type="Checkbox" black label="Do Something" />
  ))