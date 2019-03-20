import React, { Component } from "react";
import styles from "./index.module.css";
import codeTwo from "../../codesnippets/code_two.js";
import PropTypes from "prop-types";

class TerminalAuto extends Component {
  constructor(props) {
    super(props);
    this.state = { textareaValue: "" };
  }

  componentDidMount() {
    let i = 0;
    setInterval(() => {
      this.setState({
        textareaValue: this.state.textareaValue + codeTwo.slice(i, i + 5)
      });
      i += 5;
      if (i > codeTwo.length) {
        i = 0;
      }
      this.terminalAuto.scrollTop = this.terminalAuto.scrollHeight;
    }, 1);
  }

  render() {
    return (
      <textarea
        className={styles.terminalAuto}
        placeholder={"Start typing..."}
        ref={ref => {
          this.terminalAuto = ref;
        }}
        readOnly
        onMouseDown={e => {
          e.preventDefault();
          this.props.simpleDragAndDrop(this.terminalAuto, e);
        }}
        value={this.state.textareaValue}
      />
    );
  }
}

TerminalAuto.propTypes = {
  simpleDragAndDrop: PropTypes.func.isRequired
};

export default TerminalAuto;
