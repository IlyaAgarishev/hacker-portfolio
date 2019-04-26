import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";
import { useInterval } from "../../utils";

const HackingFbi = props => {
  const [hackingProcess, setHackingProcess] = useState("");
  const [intTime, setIntTime] = useState(200);
  const [timeoutHook, setTimeoutHook] = useState(0);
  const hackingFbi = useRef(null);
  const { simpleDragAndDrop, setHacked, hacked } = { ...props };

  useInterval(() => {
    setHackingProcess(hackingProcess + "☠/");
    setTimeoutHook(timeoutHook + 1);
    if (timeoutHook === 10) {
      setIntTime(null);
      setHackingProcess("ACCESS GRANTED");
      setHacked(true);
    }
  }, intTime);
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
