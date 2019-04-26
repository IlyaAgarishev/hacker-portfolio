import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import codeOne from "../../codesnippets/code_one.js";
import PropTypes from "prop-types";

const Terminal = props => {
  const [textareaValue, setTextareaValue] = useState("");
  const [int, setInt] = useState(0);
  const [times, setTimes] = useState(0);

  const { simpleDragAndDrop, setPreHacked, auto } = { ...props };

  const terminal = useRef(null);
  useEffect(() => {
    if (!auto) {
      document.onkeydown = () => {
        setTextareaValue(textareaValue + codeOne.slice(int, int + 5));
        setInt(int + 5);
        if (int > codeOne.length) {
          setInt(0);
        } else if (int === 100) {
          setPreHacked(true);
        }
        terminal.current.scrollTop = terminal.current.scrollHeight;
      };
    } else {
      if (times !== 3) {
        setTextareaValue(textareaValue + codeOne.slice(int, int + 0.3));
        setInt(int + 0.3);
        if (int > codeOne.length) {
          setInt(0);
          setTimes(times + 1);
        }
        terminal.current.scrollTop = terminal.current.scrollHeight;
      }
    }
  });

  return (
    <textarea
      className={
        auto
          ? [styles.terminal, styles.terminalAuto].join(" ")
          : styles.terminal
      }
      placeholder="Start typing..."
      readOnly
      ref={terminal}
      onMouseDown={e => {
        e.preventDefault();
        simpleDragAndDrop(terminal.current, e);
        terminal.current.scrollTop = terminal.current.scrollHeight;
      }}
      value={textareaValue}
    />
  );
};

Terminal.propTypes = {
  simpleDragAndDrop: PropTypes.func.isRequired,
  auto: PropTypes.bool.isRequired
};

export default Terminal;
