import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";
import CheckBlue from "./CheckBlue";
import CheckWords from "./CheckWords";

storiesOf("Checkbox", module)
  .add("Checkbox Black Empty", () => <Checkbox noDisplay type="Checkbox" />)
  .add("Checkbox Black", () => <Checkbox black type="Checkbox" />)
  .add("Checkbox Blue Empty", () => <CheckBlue noDisplay type="Checkbox" />)
  .add("Checkbox Blue", () => <CheckBlue blue type="Checkbox" />)
  .add("Checkbox Words", () => <CheckWords words label="Don't show this message again" type="Checkbox" />);