import React from "react";
import { mount, render, shallow } from "enzyme";
import App from "../components/App";
import Terminal from "../components/Terminal";
import Footer from "../components/Footer";
import { simpleDragAndDrop, getCoords, projects } from "../utils.js";
import HackingFbi from "../components/HackingFbi";
import Projects from "../components/Projects";

// tools
const props = {
  Projects: { dndPermission: "granted" }
};

// utils testing

test("getCoords returns object", () => {
  const div = document.createElement("div");
  expect(typeof getCoords(div) === "object").toBeTruthy();
});

test("getCoords returns object with properties left and top", () => {
  const div = document.createElement("div");
  expect(getCoords(div).left).not.toBeUndefined();
  expect(getCoords(div).top).not.toBeUndefined();
});

test("simple dnd doesn't return anything by default", () => {
  const div = document.createElement("div");
  const e = { pageX: 0, pageY: 0 };
  expect(simpleDragAndDrop(div, e)).toBeUndefined();
});

test("simple dnd reurns null if dndPermission is denied", () => {
  const div = document.createElement("div");
  const e = { pageX: 0, pageY: 0 };
  expect(simpleDragAndDrop(div, e, "denied")).toBeNull();
});

// Components testing
test("Projects component renders projects name correctly", () => {
  const component = mount(<Projects {...props.Projects} />);
  projects.forEach((element, index) => {
    expect(
      component
        .find(".project")
        .at(index)
        .text()
    ).toBe(element.name);
  });
});

test("Projects component renders projects hrefs correctly", () => {
  const component = mount(<Projects {...props.Projects} />);
  projects.forEach((element, index) => {
    expect(
      component
        .find(".project")
        .at(index)
        .props()
    ).toHaveProperty("href", element.href);
  });
});
