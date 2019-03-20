import React from "react";
import { mount, render, shallow } from "enzyme";
import App from "../components/App";
import Terminal from "../components/Terminal";
import PrivateData from "../components/PrivateData";
import Footer from "../components/Footer";
import { simpleDragAndDrop, getCoords } from "../dnd.js";
import TerminalAuto from "../components/TerminalAuto";
import HackingFbi from "../components/HackingFbi";
import Projects from "../components/Projects";

// Functions testing

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

test("App", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});

test("Footer", () => {
  const component = shallow(<Footer />);
  expect(component).toMatchSnapshot();
});

test("Terminal", () => {
  const component = shallow(
    <Terminal simpleDragAndDrop={jest.fn()} setHackInterval={jest.fn()} />
  );
  expect(component).toMatchSnapshot();
});

test("Terminal Auto", () => {
  const component = shallow(<TerminalAuto simpleDragAndDrop={jest.fn()} />);
  expect(component).toMatchSnapshot();
});

test("Hacking Fbi", () => {
  const component = shallow(
    <HackingFbi simpleDragAndDrop={jest.fn()} hack={jest.fn()} />
  );
  expect(component).toMatchSnapshot();
});

test("Projects", () => {
  const component = shallow(
    <Projects
      simpleDragAndDrop={jest.fn()}
      dndPermission={jest.fn()}
      hacked={jest.fn()}
    />
  );
  expect(component).toMatchSnapshot();
});

test("Private Data", () => {
  const component = shallow(
    <PrivateData
      simpleDragAndDrop={jest.fn()}
      dndPermission={jest.fn()}
      hacked={jest.fn()}
    />
  );
  expect(component).toMatchSnapshot();
});
