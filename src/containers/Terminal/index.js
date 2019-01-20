import React, { Component } from 'react';
import './index.css';
import codeOne from '../../codesnippets/code_one.js';

class Terminal extends Component {
  componentDidMount() {
    let i = 0;
    let hackInt = 0;
    document.onkeydown = () => {
      try {
        this.terminal.value += codeOne.slice(i, i + 5);
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
          className="terminal"
          placeholder="Start typing..."
          readOnly
          ref={ref => {
            this.terminal = ref;
          }}
          onMouseDown={e => {
            e.preventDefault();
            this.props.simpleDragAndDrop(this.terminal, e, this.props.dndPermission);
            this.terminal.scrollTop = this.terminal.scrollHeight;
          }}
        />
      </div>
    );
  }
}

export default Terminal;
