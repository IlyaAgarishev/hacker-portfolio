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

// projects
export const projects = [
  { name: "sinnlist", href: "https://www.sinnlist.com/" },
  { name: "qiqi", href: "https://github.com/IlyaAgarishev/qiqi" },
  {
    name: "wiki-search",
    href: "https://github.com/IlyaAgarishev/naumen-test-task"
  },
  {
    name: "react-random-quiz",
    href: "https://github.com/IlyaAgarishev/react-random-quiz"
  },
  {
    name: "hacker-portfolio",
    href: "https://github.com/IlyaAgarishev/hacker-portfolio"
  }
];

// cv
export const cvs = [
  {
    link:
      "https://docs.google.com/document/d/142OxFRdnhCFJyLc5UonQ1EemnXvyQ-486sjrHld0-pc/edit?usp=sharing",
    lang: "eng"
  },
  {
    link:
      "https://docs.google.com/document/d/1MAblzAUc7u_KkSmUeeH4iWXzo3BPEtnplIyX2P8ZbI8/edit?usp=sharing",
    lang: "ru"
  }
];
