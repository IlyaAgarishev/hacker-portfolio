import React, { Component } from 'react';
import './index.css';
import Terminal from '../Terminal';
import hacker from '../../img/ilyahacker.png';

class App extends Component {
  simpleDragAndDrop = (item, e) => {
    item.style.zIndex = 1000;
    item.ondragstart = function() {
      return false;
    };
    var coords = getCoords(item);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
    let moveAt = e => {
      item.style.left = e.pageX - shiftX + 'px';
      item.style.top = e.pageY - shiftY + 'px';
    };
    function getCoords(elem) {
      var box = elem.getBoundingClientRect();
      return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset
      };
    }
    moveAt(e);
    item.onmousemove = e => {
      moveAt(e);
    };

    item.onmouseup = e => {
      item.onmousemove = null;
      item.onmouseup = null;
    };
  };

  render() {
    return (
      <div className="app">
        <Terminal simpleDragAndDrop={this.simpleDragAndDrop} />
        <img src="https://i.gifer.com/C6Zz.gif" alt="" className="globe" />
        <img
          src={hacker}
          alt=""
          className="ilyahacker"
          ref={ref => {
            this.ilyahacker = ref;
          }}
          onMouseDown={e => {
            this.simpleDragAndDrop(this.ilyahacker, e);
          }}
        />
        <div className="footer">
          <a
            href="https://github.com/IlyaAgarishev/hacker-portfolio"
            target="_blank"
            className="github-link"
          >
            github
          </a>
        </div>
      </div>
    );
  }
}

export default App;
