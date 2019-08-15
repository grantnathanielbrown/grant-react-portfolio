import React, { Component } from 'react';
import {Helmet} from "react-helmet";


import ProjectLink from '../ProjectLink/ProjectLink';
import Header from '../../../Global/Header/Header';

import CMK from '/Users/grant/Desktop/grant-react-portfolio/src/components/Images/Screen Shot 2019-03-27 at 5.31.44 PM.png';
import sli from '/Users/grant/Desktop/grant-react-portfolio/src/components/Images/Screen Shot 2019-03-11 at 4.43.31 PM.png';
import kiz from '/Users/grant/Desktop/grant-react-portfolio/src/components/Images/Screen Shot 2019-03-27 at 4.59.29 PM.png';
import scr from '/Users/grant/Desktop/grant-react-portfolio/src/components/Images/Screen Shot 2019-08-13 at 3.11.22 PM.png';
class ProjectsPage extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        var projectImages = document.querySelectorAll('.img-circle');
        function addReveal() {
            projectImages[i].className += ' expand';
        }
        var i = 0;
        function f () {
            console.log('images are expanding now')
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
                <Header header={['P','r','o','j','e','c','t','s']} footnote={"Made with a wide variety of technologies, including (but not limited to) HTML, CSS, Javascript, React, Node.js, Express.js, Socket.io, and MongoDB"}  />
                <main className="project-container">
                    <ProjectLink title="Christen M. Kerr" description="Business website made for a professional psychiatrist." link="http://christenkerrmd.com/#/"
                    image={CMK}
                    githubLink="https://github.com/grantnathanielbrown/cmk_react_site" />
                    <ProjectLink title="Slithereen" description="Multiplayer trivia game." link="https://grantnathanielbrown.github.io/slithereen/"
                    image={sli}
                    githubLink="https://github.com/grantnathanielbrown/slithereen/tree/master/slithereen-frontend" />
                    <ProjectLink className="testing" title="Scrappy" description="Scrape Reddit posts and automatically upload them to websites." link="https://grantnathanielbrown.github.io/scraper_project/"
                    image={scr}
                    githubLink="https://github.com/grantnathanielbrown/scraper_project" />
                    <ProjectLink title="MANGAD" description="An image sharing site for manga enthusiasts."
                     link="https://mangad.herokuapp.com/" image={kiz}
                     githubLink="https://github.com/grantnathanielbrown/Mangad" />
                </main>
            </div>
        );
    }
}

export default ProjectsPage;