import React from "react";
import { storiesOf } from "@storybook/react";
import IWB from "./IWB";

function onClick() {
  alert("somehow the input.value");
}

storiesOf("Input With Button", module)
  .add("Input With Button", () => (
    <IWB
      type="IWB"
      placeholder="Voucher code"
      small
      label="Redeem"
      action={onClick}
    />
  ))
  .add("Input With Button Large", () => (
    <IWB
      type="IWB"
      placeholder="Voucher code"
      large
      label="Redeem"
      action={onClick}
    />
  ));
