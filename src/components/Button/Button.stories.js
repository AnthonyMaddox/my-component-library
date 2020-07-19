import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

function onClick() {
  alert("you have clicked a button");
}

storiesOf("Button", module)
  //primary (blue)
  .add("Primary", () => (
    <Button type="primary" whenClicked={onClick} label="Do Something" />
  ))
  .add("Primary Outline", () => (
    <Button type="primary" outline label="Do Something" />
  ))
  .add("Primary Faded", () => (
    <Button type="primary" faded label="Do Something" />
  ))
  .add("Primary Large", () => (
    <Button type="primary" large label="Do Something" whenClicked={onClick} />
  ))
  .add("Primary Outline Large", () => (
    <Button type="primary" outline large label="Do Something" />
  ))
  .add("Primary Faded Large", () => (
    <Button type="primary" faded large label="Do Something" />
  ))
  //danger (red)
  .add("Danger", () => <Button type="danger" label="Do Something" />)
  .add("Danger Outline", () => (
    <Button type="danger" outline label="Do Something" />
  ))
  .add("Danger Faded", () => (
    <Button type="danger" faded label="Do Something" />
  ))
  .add("Danger Large", () => (
    <Button type="danger" large label="Do Something" />
  ))
  .add("Danger Outline Large", () => (
    <Button type="danger" outline large label="Do Something" />
  ))
  .add("Danger Faded Large ", () => (
    <Button type="danger" faded large label="Do Something" />
  ))
  //success (green)
  .add("Success", () => <Button type="success" label="Do Something" />)
  .add("Success Outline", () => (
    <Button type="success" outline label="Do Something" />
  ))
  .add("Success Faded", () => (
    <Button type="success" faded label="Do Something" />
  ))
  .add("Success Large", () => <Button type="success" label="Do Something" />)
  .add("Success Outline Large", () => (
    <Button type="success" outline label="Do Something" />
  ))
  .add("Success Faded Large", () => (
    <Button type="success" faded label="Do Something" />
  ))

  //warning (yellow)

  .add("Warning", () => <Button type="warning" label="Do Something" icons />)
  .add("Warning Outline", () => (
    <Button type="warning" outline label="Do Something" icons />
  ))
  .add("Warning Faded", () => (
    <Button type="warning" faded label="Do Something" icons />
  ))
  .add("Warning Large", () => (
    <Button type="warning" large label="Do Something" icons />
  ))
  .add("Warning Outline Large", () => (
    <Button type="warning" outline large label="Do Something" icons />
  ))
  .add("Warning Faded Large", () => (
    <Button type="warning" faded large label="Do Something" icons />
  ))

  //default (slate)
  .add("Default", () => <Button type="default" label="Do Something" icons />)
  .add("Default Outline", () => (
    <Button type="default" outline label="Do Something" icons />
  ))
  .add("Default Faded", () => (
    <Button type="default" faded label="Do Something" icons />
  ))
  .add("Default Large", () => (
    <Button type="default" large label="Do Something" icons />
  ))
  .add("Default Outline Large", () => (
    <Button type="default" outline large label="Do Something" icons />
  ))
  .add("Default Faded Large", () => (
    <Button type="default" faded large label="Do Something" icons />
  ));

//.add("Primary Small", () => <Button type="primary" small label="Small Primary" />)
