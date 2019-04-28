import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import hackscript from "../../hackscript";
import PropTypes from "prop-types";
import { simpleDragAndDrop } from "../../utils";

const Terminal = props => {
  const [textareaValue, setTextareaValue] = useState("");
  const [int, setInt] = useState(0);
  const [times, setTimes] = useState(0);
  const terminal = useRef(null);
  const { setPreHacked, auto } = { ...props };

  const scrollDown = () => {
    terminal.current.scrollTop = terminal.current.scrollHeight;
  };

  useEffect(() => {
    if (!auto) {
      document.onkeydown = () => {
        setTextareaValue(textareaValue + hackscript.slice(int, int + 5));
        setInt(int + 5);
        if (int > hackscript.length) {
          setInt(0);
        } else if (int === 100) {
          setPreHacked(true);
        }
        scrollDown();
      };
    } else {
      if (times !== 3) {
        setTextareaValue(textareaValue + hackscript.slice(int, int + 0.3));
        setInt(int + 0.3);
        if (int > hackscript.length) {
          setInt(0);
          setTimes(times + 1);
        }
        scrollDown();
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
        scrollDown();
      }}
      value={textareaValue}
    />
  );
};

Terminal.propTypes = {
  auto: PropTypes.bool.isRequired
};

export default Terminal;
