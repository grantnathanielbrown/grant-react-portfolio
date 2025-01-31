import React, { Component } from "react";
import "../../../../../src/App.css";
class ProjectLink extends Component {
  render(props) {
    return (
      <div className="project-link-container">
        <a rel="noopener noreferrer" target="_blank" href={this.props.link}>
          <img className="img-circle" src={this.props.image} />
        </a>
        <h1>{this.props.title}</h1>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={this.props.githubLink}
        >
          <i class="fab fa-github fa-4x" />
        </a>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default ProjectLink;
