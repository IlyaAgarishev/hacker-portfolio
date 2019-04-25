import React, { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";
import codeOne from "../../codesnippets/code_one.js";
import PropTypes from "prop-types";

const Terminal = props => {
  const [textareaValue, setTextareaValue] = useState("");
  const [int, setInt] = useState(0);
  const [terminalHackInt, setTerminalHackInt] = useState(0);
  const { simpleDragAndDrop, setHackInterval } = { ...props };

  let terminal = useRef(null);

  useEffect(() => {
    document.onkeydown = () => {
      setTextareaValue(textareaValue + codeOne.slice(int, int + 5));
      setInt(int + 5);
      setTerminalHackInt(terminalHackInt + 1);
      setHackInterval(terminalHackInt);
      if (int > codeOne.length) {
        setInt(0);
      }
      terminal.current.scrollTop = terminal.current.scrollHeight;
    };
  });

  return (
    <textarea
      className={styles.terminal}
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
  setHackInterval: PropTypes.func.isRequired
};

export default Terminal;
