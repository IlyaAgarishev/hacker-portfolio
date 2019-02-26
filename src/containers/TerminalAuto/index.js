import React, { Component } from 'react';
import './index.css';
import codeTwo from '../../codesnippets/code_two.js';

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = { textareaValue: '' };
  }

  componentDidMount() {
    let i = 0;
    setInterval(() => {
      try {
        this.setState({ textareaValue: this.state.textareaValue + codeTwo.slice(i, i + 5) });
      } catch (error) {
        return null;
      }
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
        className="terminal-auto"
        placeholder={'Start typing...'}
        ref={ref => {
          this.terminalAuto = ref;
        }}
        readOnly
        onMouseDown={e => {
          e.preventDefault();
          this.props.simpleDragAndDrop(this.terminalAuto, e, this.props.dndPermission);
        }}
        value={this.state.textareaValue}
      />
    );
  }
}

export default Terminal;
