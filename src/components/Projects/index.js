import React from "react";
import styles from "./index.module.css";
import PropTypes from "prop-types";

const Projects = props => {
  const { simpleDragAndDrop, dndPermission } = { ...props };
  let projectsWrapper;
  return (
    <div
      className={styles.projectsWrapper}
      ref={ref => (projectsWrapper = ref)}
    >
      <div
        className={styles.projectsBorderTop}
        onMouseDown={e => {
          simpleDragAndDrop(projectsWrapper, e, dndPermission);
        }}
      />
      <div className={styles.projects}>
        <div
          className={styles.projectsText}
          onMouseDown={e => {
            simpleDragAndDrop(projectsWrapper, e, dndPermission);
          }}
        >
          ILYA'S PROJECTS
        </div>
        <div className={styles.projectsList}>
          <a
            href="https://www.sinnlist.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.project}
          >
            sinnlist
          </a>
          <a
            href="https://github.com/IlyaAgarishev/qiqi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.project}
          >
            qiqi
          </a>
          <a
            href="https://github.com/IlyaAgarishev/naumen-test-task"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.project}
          >
            wiki-search
          </a>
          <a
            href="https://github.com/IlyaAgarishev/react-random-quiz"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.project}
          >
            react-random-quiz
          </a>
          <a
            href="https://github.com/IlyaAgarishev/hacker-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.project}
          >
            hacker-portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  simpleDragAndDrop: PropTypes.func.isRequired,
  dndPermission: PropTypes.string.isRequired
};

export default Projects;
