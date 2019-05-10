import React, { useRef } from "react";
import styles from "./index.module.css";
import AudioPlayer from "react-h5-audio-player";
import songSrc from "../../audio/song.mp3";
import PropTypes from "prop-types";
import data from "../../data.json";

const Footer = props => {
  const { setPreHacked } = { ...props };
  const song = useRef(null);

  return (
    <div className={styles.footer}>
      <div className={styles.contacts}>
        {data.contacts.map((element, index) => {
          return (
            <a
              href={element.link}
              target="_blank"
              className={styles.link}
              rel="noopener noreferrer"
              style={{ background: element.background, color: "white" }}
              key={index}
            >
              {element.name}
            </a>
          );
        })}
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
