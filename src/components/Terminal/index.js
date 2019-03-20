import React, { Component } from "react";
import styles from "./index.module.css";
import codeOne from "../../codesnippets/code_one.js";
import PropTypes from "prop-types";

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = { textareaValue: "" };
  }

  componentDidMount() {
    let i = 0;
    let hackInt = 0;
    document.onkeydown = () => {
      this.setState({
        textareaValue: this.state.textareaValue + codeOne.slice(i, i + 5)
      });
      i += 5;
      hackInt += 1;
      this.props.setHackInterval(hackInt);
      if (i > codeOne.length) {
        i = 0;
      }
      this.terminal.scrollTop = this.terminal.scrollHeight;
    };
  }

  render() {
    return (
      <textarea
        className={styles.terminal}
        placeholder="Start typing..."
        readOnly
        ref={ref => {
          this.terminal = ref;
        }}
        onMouseDown={e => {
          e.preventDefault();
          this.props.simpleDragAndDrop(this.terminal, e);
          this.terminal.scrollTop = this.terminal.scrollHeight;
        }}
        value={this.state.textareaValue}
      />
    );
  }
}

Terminal.propTypes = {
  simpleDragAndDrop: PropTypes.func.isRequired,
  setHackInterval: PropTypes.func.isRequired
};

export default Terminal;
