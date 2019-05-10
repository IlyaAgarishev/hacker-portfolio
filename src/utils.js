import { useEffect, useRef } from "react";

// dnd logic
export const getCoords = element => {
  let box = element.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
};

export const simpleDragAndDrop = (item, e, dndPermission) => {
  if (dndPermission === "denied") return null;

  let moveAt = e => {
    item.style.left = e.pageX - shiftX + "px";
    item.style.top = e.pageY - shiftY + "px";
  };

  let coords = getCoords(item);
  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top;

  document.body.appendChild(item);
  moveAt(e);

  document.onmousemove = e => {
    moveAt(e);
  };

  item.onmouseup = e => {
    document.onmousemove = null;
    item.onmouseup = null;
  };

  item.ondragstart = () => {
    return false;
  };
};

// useInterval hook
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
