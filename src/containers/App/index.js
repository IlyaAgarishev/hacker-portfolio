import React, { Component } from 'react';
import './index.css';
import Terminal from '../Terminal';
import TerminalAuto from '../TerminalAuto';
import HackingFbi from '../HackingFbi';
import Projects from '../Projects';
import hacker from '../../img/ilyahacker.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hackInt: 0 };
  }

  setHackInterval = hackInt => {
    this.setState({ hackInt: hackInt });
  };

  simpleDragAndDrop = (item, e) => {
    let coords = getCoords(item);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;

    // item.style.position = 'absolute';
    document.body.appendChild(item);
    moveAt(e);

    item.style.zIndex = 1000;

    function moveAt(e) {
      item.style.left = e.pageX - shiftX + 'px';
      item.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
      moveAt(e);
    };

    item.onmouseup = function(e) {
      document.onmousemove = null;
      item.onmouseup = null;
    };

    document.onmouseup = function() {
      document.onmousemove = null;
      item.onmouseup = null;
    };

    item.ondragstart = function() {
      return false;
    };

    function getCoords(elem) {
      let box = elem.getBoundingClientRect();
      return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset
      };
    }
  };

  render() {
    return (
      <div className="app">
        <Terminal
          simpleDragAndDrop={this.simpleDragAndDrop}
          setHackInterval={this.setHackInterval}
        />

        <HackingFbi simpleDragAndDrop={this.simpleDragAndDrop} />
        <TerminalAuto simpleDragAndDrop={this.simpleDragAndDrop} />
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

        <Projects simpleDragAndDrop={this.simpleDragAndDrop} />

        <div className="private-data">wwow</div>

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
