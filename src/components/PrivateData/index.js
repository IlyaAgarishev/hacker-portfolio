import React, { Component } from "react";
import styles from "./index.module.css";

class PrivateData extends Component {
  render() {
    return (
      <div
        className={
          this.props.transform
            ? [styles.privateData, styles.privateDataTransform].join(" ")
            : styles.privateData
        }
        ref={ref => {
          this.privateData = ref;
        }}
      >
        <div
          className={styles.privateDataBorder}
          onMouseDown={e => {
            this.props.simpleDragAndDrop(
              this.privateData,
              e,
              this.props.dndPermission
            );
          }}
        />
        <div
          className={
            this.props.transform
              ? [styles.privateDataList, styles.privateDataListTransform].join(
                  " "
                )
              : styles.privateDataList
          }
        >
          <a
            href="https://github.com/IlyaAgarishev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.icon}
              src="https://svgshare.com/i/Aeu.svg"
              alt=""
            />
          </a>
          <a
            href="https://t.me/jamezdean"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.icon}
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
              className={styles.icon}
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
              className={styles.icon}
              src="https://svgshare.com/i/AeB.svg"
              alt=""
            />
          </a>

          <a
            href="https://vk.com/jamezdean"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.icon}
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
