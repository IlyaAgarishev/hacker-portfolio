import React, { Component } from 'react';
import './index.css';
import codeOne from '../../codesnippets/code_one.js';

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = { textareaValue: '', scrollHeight: 0 };
  }

  componentDidMount() {
    let i = 0;
    let hackInt = 0;
    document.onkeydown = () => {
      try {
        this.setState({ textareaValue: this.state.textareaValue + codeOne.slice(i, i + 5) });
        i += 5;
        hackInt += 1;
        this.props.setHackInterval(hackInt);
        if (i > codeOne.length) {
          i = 0;
        }
        this.setState({ scrollHeight: this.terminal.scrollHeight });
        this.terminal.scrollTop = this.state.scrollHeight;
      } catch (error) {
        return null;
      }
    };
  }

  render() {
    return (
      <textarea
        className="terminal"
        placeholder="Start typing..."
        readOnly
        onMouseDown={() => {
          this.terminal.scrollTop = '1000';
          console.log({
            scrollTop: this.terminal.scrollTop,
            scrollHeight: this.terminal.scrollHeight
          });
        }}
        ref={ref => {
          this.terminal = ref;
        }}
        value={this.state.textareaValue}
      />
    );
  }
}

export default Terminal;
