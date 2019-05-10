import React, { useRef } from "react";
import cv from "../../img/cv.svg";
import styles from "./index.module.css";
import PropTypes from "prop-types";
import { simpleDragAndDrop } from "../../utils";
import data from "../../data.json";

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
        {data.cvs.map((element, index) => (
          <a
            className={styles.cv}
            href={element.link}
            key={index}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={cv} alt="cv" className={styles.cvImg} />

            {window.innerWidth > 975 ? element.lang : element.doc}
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
