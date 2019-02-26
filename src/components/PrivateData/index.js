import React, { Component } from 'react';
import './index.css';

class PrivateData extends Component {
  render() {
    return (
      <div
        className={this.props.transform ? 'private-data private-data-transform' : 'private-data'}
        ref={ref => {
          this.privateData = ref;
        }}
      >
        <div
          className="private-data-border"
          onMouseDown={e => {
            this.props.simpleDragAndDrop(this.privateData, e, this.props.dndPermission);
          }}
        />
        <div
          className={
            this.props.transform
              ? 'private-data-list private-data-list-transform'
              : 'private-data-list'
          }
        >
          <a href="https://github.com/IlyaAgarishev" target="_blank" rel="noopener noreferrer">
            <img className="icon github" src="https://svgshare.com/i/Aeu.svg" alt="" />
          </a>
          <a href="https://t.me/jamezdean" target="_blank" rel="noopener noreferrer">
            <img className="icon telegram" src="https://svgshare.com/i/AdA.svg" alt="" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=89826161073"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon whatsapp" src="https://svgshare.com/i/AeM.svg" alt="" />
          </a>

          <a
            href="https://www.facebook.com/ilya.agarishev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon facebook" src="https://svgshare.com/i/AeB.svg" alt="" />
          </a>

          <a href="https://vk.com/jamezdean" target="_blank" rel="noopener noreferrer">
            <img className="icon vk" src="https://svgshare.com/i/Acc.svg" alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default PrivateData;
