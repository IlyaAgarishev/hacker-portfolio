import React, { Component } from 'react';
import './index.css';

class PrivateData extends Component {
  render() {
    let style;
    if (this.props.transform) {
      style = {
        privateData: {
          marginTop: '10px',
          width: '100%',
          left: 0,
          position: 'relative'
        },
        privateDataList: {
          display: 'flex',
          justifyContent: 'space-around'
        },
        icon: {
          width: '30px'
        }
      };
    } else {
      style = {
        privateData: null,
        privateDataList: null,
        icon: null
      };
    }
    return (
      <div
        className="private-data"
        style={style.privateData}
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
        <div className="private-data-list" style={style.privateDataList}>
          <a href="https://github.com/IlyaAgarishev" target="_blank" rel="noopener noreferrer">
            <img
              className="icon github"
              style={style.icon}
              src="https://svgshare.com/i/Aeu.svg"
              alt=""
            />
          </a>
          <a href="https://t.me/jamezdean" target="_blank" rel="noopener noreferrer">
            <img
              className="icon telegram"
              style={style.icon}
              src="https://svgshare.com/i/AdA.svg"
              alt=""
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=89826161073"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon whatsapp"
              style={style.icon}
              src="https://svgshare.com/i/AeM.svg"
              alt=""
            />
          </a>

          <a
            href="https://www.facebook.com/ilya.agarishev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icon facebook"
              style={style.icon}
              src="https://svgshare.com/i/AeB.svg"
              alt=""
            />
          </a>

          <a href="https://vk.com/jamezdean" target="_blank" rel="noopener noreferrer">
            <img
              className="icon vk"
              style={style.icon}
              src="https://svgshare.com/i/Acc.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    );
  }
}

export default PrivateData;
