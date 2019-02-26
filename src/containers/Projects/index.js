import React, { Component } from 'react';
import './index.css';

class Projects extends Component {
  render() {
    if (this.props.transform) {
      document.body.style.overflow = 'visible';
    }

    // https://api.github.com/repos/IlyaAgarishev/qiqi

    return (
      <div
        className={this.props.transform ? 'projects-wrapper-transform' : 'projects-wrapper'}
        ref={ref => {
          this.projectsWrapper = ref;
        }}
      >
        <div
          className="projects-border-top"
          onMouseDown={e => {
            this.props.simpleDragAndDrop(this.projectsWrapper, e, this.props.dndPermission);
          }}
        />
        <div className="projects">
          <div
            className="projects-text"
            onMouseDown={e => {
              this.props.simpleDragAndDrop(this.projectsWrapper, e, this.props.dndPermission);
            }}
          >
            ILYA'S PROJECTS
          </div>
          <div className="projects-list">
            <a
              href="https://github.com/IlyaAgarishev/qiqi"
              target="_blank"
              rel="noopener noreferrer"
              className="project"
            >
              qiqi
            </a>
            <a
              href="https://github.com/IlyaAgarishev/react-random-quiz"
              target="_blank"
              rel="noopener noreferrer"
              className="project"
            >
              react-random-quiz
            </a>
            <a
              href="https://github.com/IlyaAgarishev/hacker-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="project"
            >
              hacker-portfolio
            </a>
            <a
              href="https://github.com/IlyaAgarishev/naumen-test-task"
              target="_blank"
              rel="noopener noreferrer"
              className="project"
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
