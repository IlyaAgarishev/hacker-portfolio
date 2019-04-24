import React from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";

const PrivateData = props => {
  let privateData;
  const { simpleDragAndDrop, dndPermission } = { ...props };
  return (
    <div
      className={styles.privateData}
      ref={ref => {
        privateData = ref;
      }}
    >
      <div
        className={styles.privateDataBorder}
        onMouseDown={e => {
          simpleDragAndDrop(privateData, e, dndPermission);
        }}
      />
      <div className={styles.privateDataList}>
        <a
          href="https://github.com/IlyaAgarishev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.icon}
            src="https://svgshare.com/i/Aeu.svg"
            alt="github"
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
            alt="telegram"
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
            alt="whatsapp"
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
            alt="facebook"
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
            alt="vk"
          />
        </a>
      </div>
    </div>
  );
};

PrivateData.propTypes = {
  simpleDragAndDrop: PropTypes.func.isRequired,
  dndPermission: PropTypes.string.isRequired
};

export default PrivateData;
