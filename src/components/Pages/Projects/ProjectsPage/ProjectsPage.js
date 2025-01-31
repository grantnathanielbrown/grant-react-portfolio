import React, { Component } from "react";
import { Helmet } from "react-helmet";

import ProjectLink from "../ProjectLink/ProjectLink";
import Header from "../../../Global/Header/Header";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var projectImages = document.querySelectorAll(".img-circle");
    function addReveal() {
      projectImages[i].className += " expand";
    }
    var i = 0;
    function f() {
      console.log("images are expanding now");
      addReveal();
      i++;
      if (i < projectImages.length) {
        setTimeout(f, 200);
      }
    }
    f();
  }
  render() {
    return (
      <div className="projects-page">
        <Header
          header={["P", "r", "o", "j", "e", "c", "t", "s"]}
          footnote={
            "Made with a wide variety of technologies, including (but not limited to) Python, Bash Scripting, TypeScript Javascript, React, Node.js, HTML, CSS,"
          }
        />
        <main className="project-container">
          <ProjectLink
            title="Scrappy"
            description="A fully automated collection of scripts that downloads, combines, and uploads popular Reddit GIFs as YouTube videos."
            link="https://www.youtube.com/@scrappy5122/videos"
            image="/images/cat.gif"
            githubLink="https://github.com/grantnathanielbrown/YVU"
          />

          <ProjectLink
            title="ScribeImage"
            description="Bash script that normalizes then runs OCR on an arbitrary number of images, detecting text and adding it to the metadata so the images can be searched by text."
            link="https://github.com/thegoblingame/ScribeImage"
            image="/images/ScribeImage.png"
            githubLink="https://github.com/thegoblingame/ScribeImage"
          />

          <ProjectLink
            title="gladAItor"
            description="Web game where the user plays a simplified version of Cards Against Humanity VS an AI. Game works on mobile/desktop and has a leaderboard for high scores."
            link="https://gladaitor.com/"
            image="/images/gladaitor.png"
            githubLink="https://github.com/thegoblingame/gladaitor"
          />

          <ProjectLink
            title="Draft"
            description="Game demo where player can select cards to add to a deck, written without premade assets."
            link="https://youtu.be/uJ94OOhasA0"
            image="/images/draft.png"
            githubLink="https://github.com/thegoblingame/draft"
          />
        </main>
      </div>
    );
  }
}

export default ProjectsPage;
