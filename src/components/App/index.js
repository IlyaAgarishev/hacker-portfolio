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
import { simpleDragAndDrop } from "../../dnd.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hackInt: 0, hacked: false, dndPermission: "granted" };
  }

  componentWillMount() {
    if (window.innerWidth < 975) {
      this.hack(true);
      this.setState({ dndPermission: "denied" });
    }
  }

  hack = () => {
    this.setState({ hacked: true });
  };

  setHackInterval = hackInt => {
    this.setState({ hackInt: hackInt });
  };

  render() {
    return (
      <div className={styles.app}>
        <img
          src="https://i.gifer.com/C6Zz.gif"
          alt=""
          className={styles.globe}
        />
        <Terminal
          simpleDragAndDrop={simpleDragAndDrop}
          setHackInterval={this.setHackInterval}
        />

        {this.state.hackInt > 20 && (
          <TerminalAuto simpleDragAndDrop={simpleDragAndDrop} />
        )}
        {this.state.hackInt > 30 && (
          <HackingFbi simpleDragAndDrop={simpleDragAndDrop} hack={this.hack} />
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
              simpleDragAndDrop(this.ilyahacker, e, this.state.dndPermission);
            }}
          />
        )}

        <Projects
          simpleDragAndDrop={simpleDragAndDrop}
          dndPermission={this.state.dndPermission}
          hacked={this.state.hacked}
        />

        <PrivateData
          simpleDragAndDrop={simpleDragAndDrop}
          dndPermission={this.state.dndPermission}
          hacked={this.state.hacked}
        />

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

export default App;
