import React, { useRef } from "react";
import styles from "./index.module.css";
import AudioPlayer from "react-h5-audio-player";
import songSrc from "../../audio/song.mp3";
import PropTypes from "prop-types";

const Footer = props => {
  const { setPreHacked } = { ...props };
  const song = useRef(null);
  return (
    <div className={styles.footer}>
      <div className={styles.contacts}>
        <a
          href="https://github.com/IlyaAgarishev/hacker-portfolio"
          target="_blank"
          className={[styles.link, styles.github].join(" ")}
          rel="noopener noreferrer"
        >
          github
        </a>

        <a
          href="https://t.me/jamezdean"
          target="_blank"
          className={[styles.link, styles.telegram].join(" ")}
          rel="noopener noreferrer"
        >
          telegram
        </a>

        <a
          href="mailto:ilya.business@inbox.ru"
          className={[styles.link, styles.email].join(" ")}
        >
          email
        </a>
      </div>

      <div className={styles.features}>
        <div
          className={styles.link}
          onClick={() => {
            song.current.togglePlay();
          }}
        >
          song
        </div>

        <div className={styles.link} onClick={() => setPreHacked(true)}>
          skip
        </div>
      </div>
      <AudioPlayer src={songSrc} hidePlayer={true} loop={true} ref={song} />
    </div>
  );
};

Footer.propTypes = {
  setPreHacked: PropTypes.func.isRequired
};

export default Footer;
