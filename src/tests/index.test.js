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
  Projects: { dndPermission: "granted" },
  HackingFbi_notHacked: {
    setHacked: jest.fn(),
    hacked: false
  },
  HackingFbi_hacked: {
    setHacked: jest.fn(),
    hacked: true
  },
  Footer: {
    setPreHacked: jest.fn()
  },
  Terminal_notAuto: { setPreHacked: jest.fn(), auto: false },
  Terminal_auto: { setPreHacked: jest.fn(), auto: true }
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

test("Hacking Fbi renders right string when not hacked", () => {
  const component = mount(<HackingFbi {...props.HackingFbi_notHacked} />);
  expect(component.find(".hackingFbiText").text()).toBe("HACKING FBI DATABASE");
});

test("Hacking Fbi renders right string when  hacked", () => {
  const component = mount(<HackingFbi {...props.HackingFbi_hacked} />);
  expect(component.find(".hackingFbiText").text()).toBe("");
});

// snapshots

test("snapshots", () => {
  expect(shallow(<App />)).toMatchSnapshot();
  expect(shallow(<Projects {...props.Projects} />)).toMatchSnapshot();
  expect(
    shallow(<HackingFbi {...props.HackingFbi_notHacked} />)
  ).toMatchSnapshot();
  expect(
    shallow(<HackingFbi {...props.HackingFbi_hacked} />)
  ).toMatchSnapshot();
  expect(shallow(<Footer {...props.Footer} />)).toMatchSnapshot();
  expect(shallow(<Terminal {...props.Terminal_notAuto} />)).toMatchSnapshot();
  expect(shallow(<Terminal {...props.Terminal_auto} />)).toMatchSnapshot();
});
