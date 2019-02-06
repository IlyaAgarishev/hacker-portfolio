import React, { Component } from 'react';
import './index.css';
import Dnd from '../Dnd';
import Terminal from '../Terminal';
import TerminalAuto from '../TerminalAuto';
import HackingFbi from '../HackingFbi';
import Projects from '../Projects';
import PrivateData from '../PrivateData';
import AudioPlayer from 'react-h5-audio-player';
import song from '../../audio/song.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hackInt: 0, hacked: false };
  }

  hack = () => {
    this.setState({ hacked: true });
  };

  setHackInterval = hackInt => {
    this.setState({ hackInt: hackInt });
  };

  simpleDragAndDrop = (item, e, dndPermission) => {
    if (dndPermission) {
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
    }
  };

  render() {
    if (
      window.innerWidth < 975 ||
      navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i) != null
    ) {
      return (
        <div className="app-transform">
          <img
            src="http://svgur.com/i/Adf.svg"
            alt=""
            className="ilyahacker ilyahacker-transform"
          />
          <PrivateData transform={true} />
          <Projects transform={true} />
        </div>
      );
    } else {
      return (
        <div>
          <img src="https://i.gifer.com/C6Zz.gif" alt="" className="globe" />

          <Dnd style={{ width: '40%', height: '38%', top: '20px', left: '20px' }}>
            <Terminal setHackInterval={this.setHackInterval} />
          </Dnd>

          {this.state.hackInt > 20 && (
            <Dnd style={{ width: '30%', height: '35%', top: '49%', left: '20px' }}>
              <TerminalAuto />
            </Dnd>
          )}
          {this.state.hackInt > 30 && (
            <Dnd style={{ width: '31%', top: '73%', left: '35%' }}>
              <HackingFbi hack={this.hack} />
            </Dnd>
          )}
          {this.state.hacked === true && (
            <Dnd style={{ width: '30%', top: '20px', left: '45%' }}>
              <img src="http://svgur.com/i/Adf.svg" alt="" className="ilyahacker" />
            </Dnd>
          )}

          {this.state.hacked === true && (
            <Projects simpleDragAndDrop={this.simpleDragAndDrop} dndPermission={true} />
          )}

          {this.state.hacked === true && (
            <PrivateData simpleDragAndDrop={this.simpleDragAndDrop} dndPermission={true} />
          )}

          <div className="footer">
            <a
              href="https://github.com/IlyaAgarishev/hacker-portfolio"
              target="_blank"
              className="github-link"
              rel="noopener noreferrer"
            >
              github
            </a>
            <div
              className="play-song"
              onClick={() => {
                this.song.togglePlay();
              }}
            >
              song
            </div>
            <AudioPlayer src={song} hidePlayer={true} loop={true} ref={c => (this.song = c)} />
          </div>
        </div>
      );
    }
  }
}

export default App;
