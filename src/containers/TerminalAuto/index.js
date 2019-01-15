import React, { Component } from 'react';
import './index.css';
import codeTwo from '../../codesnippets/code_two.js';

class Terminal extends Component {
  componentDidMount() {
    let i = 0;
    setInterval(() => {
      this.terminal.value += codeTwo.slice(i, i + 5);
      i += 5;
      if (i > codeTwo.length) {
        i = 0;
      }
      this.terminal.scrollTop = this.terminal.scrollHeight;
    }, 1);
  }

  render() {
    return (
      <textarea
        className="terminal-auto"
        placeholder={'Start typing...'}
        ref={ref => {
          this.terminal = ref;
        }}
        style={{ width: '30%', top: '47%', height: '270px' }}
        readOnly
        onMouseDown={e => {
          this.props.simpleDragAndDrop(this.terminal, e);
        }}
      />
    );
  }
}

export default Terminal;
