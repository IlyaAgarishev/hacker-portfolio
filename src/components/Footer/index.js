import React from "react";
import styles from "./index.module.css";
import AudioPlayer from "react-h5-audio-player";
import songSrc from "../../audio/song.mp3";
import PropTypes from "prop-types";

const Footer = props => {
  const { setPreHacked } = { ...props };
  let song;
  return (
    <div className={styles.footer}>
      <a
        href="https://github.com/IlyaAgarishev/hacker-portfolio"
        target="_blank"
        className={styles.githubLink}
        rel="noopener noreferrer"
      >
        github
      </a>

      <a
        href="https://t.me/jamezdean"
        target="_blank"
        className={styles.telegram}
        rel="noopener noreferrer"
      >
        telegram
      </a>

      <div
        className={styles.playSong}
        onClick={() => {
          song.togglePlay();
        }}
      >
        song
      </div>

      <AudioPlayer
        src={songSrc}
        hidePlayer={true}
        loop={true}
        ref={ref => (song = ref)}
      />

      <div className={styles.skip} onClick={() => setPreHacked(true)}>
        skip
      </div>
    </div>
  );
};

Footer.propTypes = {
  setPreHacked: PropTypes.func.isRequired
};

export default Footer;
