import { simpleDragAndDrop, getCoords } from "../dnd.js";
import Terminal from "../components/Terminal";

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
