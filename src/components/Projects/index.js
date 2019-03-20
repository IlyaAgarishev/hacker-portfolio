import React, { Component } from "react";
import styles from "./index.module.css";

class Projects extends Component {
  render() {
    if (this.props.transform) {
      document.body.style.overflow = "visible";
    }

    return (
      <div
        className={
          this.props.transform
            ? styles.projectsWrapperTransform
            : styles.projectsWrapper
        }
        ref={ref => {
          this.projectsWrapper = ref;
        }}
      >
        <div
          className={styles.projectsBorderTop}
          onMouseDown={e => {
            this.props.simpleDragAndDrop(
              this.projectsWrapper,
              e,
              this.props.dndPermission
            );
          }}
        />
        <div className={styles.projects}>
          <div
            className={styles.projectsText}
            onMouseDown={e => {
              this.props.simpleDragAndDrop(
                this.projectsWrapper,
                e,
                this.props.dndPermission
              );
            }}
          >
            ILYA'S PROJECTS
          </div>
          <div className={styles.projectsList}>
            <a
              href="https://github.com/IlyaAgarishev/qiqi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.project}
            >
              qiqi
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
            <a
              href="https://github.com/IlyaAgarishev/naumen-test-task"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.project}
            >
              wiki-search
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
