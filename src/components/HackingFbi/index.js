import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";

const HackingFbi = props => {
  const [hackingProcess, setHackingProcess] = useState("");
  // const [hacked, setHacked] = useState(false);
  const hackingFbi = useRef(null);
  const { simpleDragAndDrop, setHacked, hacked } = { ...props };

  useEffect(() => {
    // let hackingLoading = setInterval(() => {
    //   setHackingProcess(hackingProcess + "☠/");
    // }, 200);
    // setTimeout(() => {
    //   clearInterval(hackingLoading);
    //   setHackingProcess("ACCESS GRANTED");
    //   setHacked(true);
    //   setHacked(true);
    // }, 2100);
  });

  return (
    <div
      onMouseDown={e => {
        simpleDragAndDrop(hackingFbi.current, e);
      }}
      className={
        hacked
          ? [styles.hackingFbi, styles.accessGranted].join(" ")
          : styles.hackingFbi
      }
      ref={hackingFbi}
    >
      <div className={styles.hackingFbiText}>
        {hacked ? "" : "HACKING FBI DATABASE"}
      </div>
      <div className={styles.hackingProcess}>‍{hackingProcess}</div>
    </div>
  );
};

HackingFbi.propTypes = {
  simpleDragAndDrop: PropTypes.func.isRequired,
  setHacked: PropTypes.func.isRequired
};

export default HackingFbi;
