import React, { Component } from 'react';
import './index.css';

class Projects extends Component {
  render() {
    return (
      <div
        className="projects"
        onMouseDown={e => {
          this.props.simpleDragAndDrop(this.projects, e);
        }}
        ref={ref => {
          this.projects = ref;
        }}
      >
        <div className="projects-text">ILYA'S PROJECTS</div>
        <div className="projects-list">
          <a href="https://github.com/IlyaAgarishev/qiqi" target="_blank" className="project">
            qiqi
          </a>
          <a
            href="https://github.com/IlyaAgarishev/react-random-quiz"
            target="_blank"
            className="project"
          >
            react-random-quiz
          </a>
          <a
            href="https://github.com/IlyaAgarishev/hacker-portfolio"
            target="_blank"
            className="project"
          >
            hacker-portfolio
          </a>
          <a href="https://github.com/IlyaAgarishev/twithor" target="_blank" className="project">
            twithor
          </a>
        </div>
      </div>
    );
  }
}

export default Projects;
