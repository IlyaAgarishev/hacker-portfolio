import React, { Component } from 'react';
import './index.css';
import codeOne from '../../codesnippets/code_one.js';

class Terminal extends Component {
  componentDidMount() {
    let i = 0;
    document.onkeydown = () => {
      this.terminal.value += codeOne.slice(i, i + 5);
      i += 5;
      if (i > codeOne.length) {
        i = 0;
      }
      this.terminal.scrollTop = this.terminal.scrollHeight;
    };
  }

  render() {
    return (
      <textarea
        className="terminal"
        placeholder={'Start typing...'}
        ref={ref => {
          this.terminal = ref;
        }}
        readOnly
      />
    );
  }
}

export default Terminal;