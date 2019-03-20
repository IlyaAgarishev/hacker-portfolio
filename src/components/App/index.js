import React, { Component } from "react";
import Terminal from "../Terminal";
import TerminalAuto from "../TerminalAuto";
import HackingFbi from "../HackingFbi";
import Projects from "../Projects";
import PrivateData from "../PrivateData";
import AudioPlayer from "react-h5-audio-player";
import song from "../../audio/song.mp3";
import ilyaSvg from "../../img/ilyahacker.svg";
import styles from "./index.module.css";

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
    }
  };

  render() {
    if (
      window.innerWidth < 975 ||
      navigator.userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
      ) != null
    ) {
      return (
        <div className={styles.appTransform}>
          <img
            src={ilyaSvg}
            alt=""
            className={[styles.ilyahacker, styles.ilyahackerTransform].join(
              " "
            )}
          />
          <PrivateData
            transform={true}
            simpleDragAndDrop={this.simpleDragAndDrop}
          />
          <Projects
            transform={true}
            simpleDragAndDrop={this.simpleDragAndDrop}
          />
        </div>
      );
    } else {
      return (
        <div>
          <img
            src="https://i.gifer.com/C6Zz.gif"
            alt=""
            className={styles.globe}
          />
          <Terminal
            simpleDragAndDrop={this.simpleDragAndDrop}
            dndPermission={true}
            setHackInterval={this.setHackInterval}
          />

          {this.state.hackInt > 20 && (
            <TerminalAuto
              simpleDragAndDrop={this.simpleDragAndDrop}
              dndPermission={true}
            />
          )}
          {this.state.hackInt > 30 && (
            <HackingFbi
              simpleDragAndDrop={this.simpleDragAndDrop}
              dndPermission={true}
              hack={this.hack}
            />
          )}
          {this.state.hacked === true && (
            <img
              src={ilyaSvg}
              alt=""
              className={styles.ilyahacker}
              ref={ref => {
                this.ilyahacker = ref;
              }}
              onMouseDown={e => {
                this.simpleDragAndDrop(this.ilyahacker, e, true);
              }}
            />
          )}

          {this.state.hacked === true && (
            <Projects
              simpleDragAndDrop={this.simpleDragAndDrop}
              dndPermission={true}
            />
          )}

          {this.state.hacked === true && (
            <PrivateData
              simpleDragAndDrop={this.simpleDragAndDrop}
              dndPermission={true}
            />
          )}

          <div className={styles.footer}>
            <a
              href="https://github.com/IlyaAgarishev/hacker-portfolio"
              target="_blank"
              className={styles.githubLink}
              rel="noopener noreferrer"
            >
              github
            </a>
            <div
              className={styles.playSong}
              onClick={() => {
                this.song.togglePlay();
              }}
            >
              song
            </div>
            <AudioPlayer
              src={song}
              hidePlayer={true}
              loop={true}
              ref={c => (this.song = c)}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
