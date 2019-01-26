import React, { Component } from 'react';
import './index.css';

class HackingFbi extends Component {
  componentDidMount() {
    let hackingLoading = setInterval(() => {
      this.hackingProcess.innerHTML += '☠/';
    }, 200);
    setTimeout(() => {
      clearInterval(hackingLoading);
      this.hackingFbi.innerHTML = 'ACCESS GRANTED';
      this.hackingFbi.style.textAlign = 'center';
      this.hackingFbi.style.color = 'rgb(0, 255, 0)';
      this.hackingFbi.style.fontSize = '50px';
      this.props.hack();
    }, 2100);
  }

  render() {
    return (
      <div
        onMouseDown={e => {
          this.props.simpleDragAndDrop(this.hackingFbi, e, this.props.dndPermission);
        }}
        className="hacking-fbi"
        ref={ref => {
          this.hackingFbi = ref;
        }}
      >
        <div className="hacking-fbi-text">HACKING FBI DATABASE</div>
        <div
          className="hacking-process"
          ref={ref => {
            this.hackingProcess = ref;
          }}
        >
          ‍
        </div>
      </div>
    );
  }
}

export default HackingFbi;
