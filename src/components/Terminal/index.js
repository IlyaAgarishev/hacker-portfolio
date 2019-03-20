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
      try {
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
      } catch (error) {
        return null;
      }
    };
  }

  render() {
    return (
      <div>
        <textarea
          className={styles.terminal}
          placeholder="Start typing..."
          readOnly
          ref={ref => {
            this.terminal = ref;
          }}
          onMouseDown={e => {
            e.preventDefault();
            this.props.simpleDragAndDrop(
              this.terminal,
              e,
              this.props.dndPermission
            );
            this.terminal.scrollTop = this.terminal.scrollHeight;
          }}
          value={this.state.textareaValue}
        />
      </div>
    );
  }
}

Terminal.propTypes = {
  simpleDragAndDrop: PropTypes.func.isRequired,
  dndPermission: PropTypes.bool.isRequired,
  setHackInterval: PropTypes.func.isRequired
};

export default Terminal;
