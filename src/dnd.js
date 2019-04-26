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

  item.style.zIndex = 1000;

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
