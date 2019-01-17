import React, { Component } from 'react';
import './index.css';
import github from '../../img/github.svg';
import telegram from '../../img/telegram.svg';
import whatsapp from '../../img/whatsapp.svg';
import facebook from '../../img/facebook.svg';
import vk from '../../img/vk.svg';

class PrivateData extends Component {
  render() {
    return (
      <div
        className="private-data"
        ref={ref => {
          this.privateData = ref;
        }}
      >
        <div
          className="private-data-border"
          onMouseDown={e => {
            this.props.simpleDragAndDrop(this.privateData, e);
          }}
        />
        <div className="private-data-list">
          <a href="https://github.com/IlyaAgarishev" target="_blank" rel="noopener noreferrer">
            <img className="icon github" src={github} alt="" />
          </a>
          <a href="https://t.me/jamezdean" target="_blank" rel="noopener noreferrer">
            <img className="icon telegram" src={telegram} alt="" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=89826161073"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon whatsapp" src={whatsapp} alt="" />
          </a>

          <a
            href="https://www.facebook.com/ilya.agarishev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon facebook" src={facebook} alt="" />
          </a>

          <a href="https://vk.com/jamezdean" target="_blank" rel="noopener noreferrer">
            <img className="icon vk" src={vk} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default PrivateData;
