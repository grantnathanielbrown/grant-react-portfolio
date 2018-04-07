import React, { Component } from 'react';
import './ProjectLink.css'
class ProjectLink extends Component {
    render(props) {
        return (
            <div className="project-link-container">
                <a href={this.props.link}><img className="img-circle" src={this.props.image} /></a>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default ProjectLink;