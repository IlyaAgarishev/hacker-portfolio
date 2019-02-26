import React, { Component } from 'react';
import './index.css';

class Dnd extends Component {
  simpleDragAndDrop = (item, e) => {
    let getCoords = element => {
      let box = element.getBoundingClientRect();
      return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset
      };
    };

    let moveAt = e => {
      item.style.left = e.pageX - shiftX + 'px';
      item.style.top = e.pageY - shiftY + 'px';
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

  render() {
    return (
      <div
        className="draggableItem"
        ref={ref => {
          this.draggableItem = ref;
        }}
        onMouseDown={e => {
          e.preventDefault();
          this.simpleDragAndDrop(this.draggableItem, e);
        }}
        style={{
          width: this.props.style.width,
          height: this.props.style.height,
          top: this.props.style.top,
          left: this.props.style.left
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Dnd;
