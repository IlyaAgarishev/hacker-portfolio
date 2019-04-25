import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import codeTwo from "../../codesnippets/code_two.js";
import PropTypes from "prop-types";

const TerminalAuto = props => {
  const [textareaValue, setTextareaValue] = useState("");
  const [int, setInt] = useState(0);
  const [times, setTimes] = useState(0);
  const terminalAuto = useRef(null);
  const { simpleDragAndDrop } = { ...props };

  const speed = 0.5;

  useEffect(() => {
    if (times !== 3) {
      setTextareaValue(textareaValue + codeTwo.slice(int, int + speed));
      setInt(int + speed);
      if (int > codeTwo.length) {
        setInt(0);
        setTimes(times + 1);
        console.log(times);
      }
      terminalAuto.current.scrollTop = terminalAuto.current.scrollHeight;
    }
  });

  return (
    <textarea
      className={styles.terminalAuto}
      placeholder={"Start typing..."}
      ref={terminalAuto}
      readOnly
      onMouseDown={e => {
        e.preventDefault();
        simpleDragAndDrop(terminalAuto.current, e);
      }}
      value={textareaValue}
    />
  );
};

TerminalAuto.propTypes = {
  simpleDragAndDrop: PropTypes.func.isRequired
};

export default TerminalAuto;
