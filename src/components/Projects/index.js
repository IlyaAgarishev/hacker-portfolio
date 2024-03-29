import React, { useRef } from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";
import { simpleDragAndDrop } from "../../utils";
import data from "../../data.json";

const Projects = props => {
  const { dndPermission } = { ...props };
  const projectsWrapper = useRef(null);
  return (
    <div className={styles.projectsWrapper} ref={projectsWrapper}>
      <div
        className={styles.projectsBorderTop}
        onMouseDown={e => {
          simpleDragAndDrop(projectsWrapper.current, e, dndPermission);
        }}
      />
      <div className={styles.projects}>
        <div
          className={styles.projectsText}
          onMouseDown={e => {
            simpleDragAndDrop(projectsWrapper.current, e, dndPermission);
          }}
        >
          ILYA'S PROJECTS
        </div>
        <div className={styles.projectsList}>
          {data.projects.map((element, index) => {
            return (
              <a
                href={element.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.project}
                key={index}
              >
                {element.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  dndPermission: PropTypes.string.isRequired
};

export default Projects;
