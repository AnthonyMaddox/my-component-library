import React from "react";
import { storiesOf } from "@storybook/react";
import Counter from "./Counter";

storiesOf("Counter", module)
.add("Counter", () => (
   <Counter step={1} max={10} min={0}type="counter" />
 ))