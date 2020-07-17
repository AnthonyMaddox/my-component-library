import React from "react";
import { storiesOf } from "@storybook/react";
import InputField from "./InputField";
import SelectField from "./SelectField";


storiesOf("Input Fields", module)
  //email
  .add("Email", () => <InputField type="Email" />)
  .add("Email Medium", () => <InputField medium type="Email" />)
  .add("Email Large", () => <InputField large type="Email" />)

  //select
  .add("Select Outline", () => (
    <SelectField outline type="select" label="Select" />
  ))
  .add("Select Outline Medium", () => (
    <SelectField outline medium label="Select" type="select" />
  ))
  .add("Select Outline Large", () => (
    <SelectField outline large label="Select" type="select" />
  ))
  .add("Select", () => <SelectField type="select" label="Select" />)
  .add("Select Medium", () => (
    <SelectField medium label="Select" type="select" />
  ))
  .add("Select Large", () => (
    <SelectField large label="Select" type="select" />
  ));
