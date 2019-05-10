import React, { useRef } from "react";
import cv from "../../img/cv.svg";
import styles from "./index.module.css";
import PropTypes from "prop-types";
import { simpleDragAndDrop, cvs } from "../../utils";

const CV = props => {
  const { dndPermission } = { ...props };
  const cvWrapper = useRef();
  return (
    <div className={styles.cvWrapper} ref={cvWrapper}>
      <div
        className={styles.borderTop}
        onMouseDown={e => {
          simpleDragAndDrop(cvWrapper.current, e, dndPermission);
        }}
      />
      <div className={styles.cvs}>
        {cvs.map((element, index) => (
          <a
            className={styles.cv}
            href={element.link}
            key={index}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={cv} alt="cv" />
            {element.lang}
          </a>
        ))}
      </div>
    </div>
  );
};

CV.propTypes = {
  dndPermission: PropTypes.string.isRequired
};

export default CV;
