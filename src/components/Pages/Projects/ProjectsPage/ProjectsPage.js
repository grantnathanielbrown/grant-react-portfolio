import React, { Component } from 'react';
import {Helmet} from "react-helmet";


import ProjectLink from '../ProjectLink/ProjectLink';
import Header from '../../../Global/Header/Header';

import CMK from '/Users/grant/Desktop/grant-react-portfolio/src/components/Images/Screen Shot 2019-03-27 at 5.31.44 PM.png';
import sli from '/Users/grant/Desktop/grant-react-portfolio/src/components/Images/Screen Shot 2019-03-11 at 4.43.31 PM.png';
import kiz from '/Users/grant/Desktop/grant-react-portfolio/src/components/Images/Screen Shot 2019-03-27 at 4.59.29 PM.png';
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
                <Header header={"Projects"} footnote={"Made with a wide variety of technologies, including (but not limited to) HTML, CSS, Javascript, React, Node.js, Express.js, Socket.io, and MongoDB"}  />
                <main className="project-container">
                    <ProjectLink title="MANGAD" description="An image sharing site for manga enthusiasts."
                     link="https://mangad.herokuapp.com/" image={kiz}
                     githubLink="https://github.com/grantnathanielbrown/Mangad" />
                    <ProjectLink title="Slithereen" description="Multiplayer trivia game." link="https://grantnathanielbrown.github.io/slithereen/"
                    image={sli}
                    githubLink="https://github.com/grantnathanielbrown/slithereen/tree/master/slithereen-frontend" />
                    <ProjectLink title="Christen M. Kerr" description="Business website made for a professional psychiatrist." link="http://christenkerrmd.com/#/"
                    image={CMK}
                    githubLink="https://github.com/grantnathanielbrown/cmk_react_site" />
                    {/* <ProjectLink title="Bear Attacks!" description="Choose your own adventure style text games."
                     link="https://github.com/grantnathanielbrown/snakestuff" image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/European_Brown_Bear.jpg/1200px-European_Brown_Bear.jpg"/> */}
                    {/* <ProjectLink title="Hangman" description="Replayable hangman game." link="https://grantnathanielbrown.github.io/wdi-project-one/"
                     image="https://images-na.ssl-images-amazon.com/images/I/81xt2%2BPD0IL.png" githubLink="https://github.com/grantnathanielbrown/wdi-project-one" />
                     <ProjectLink title="esGApe" description="A site to share details on local restaurants and bars."
                      link="https://disillusioned-pet.surge.sh" image="https://cdn.shopify.com/s/files/1/0917/5854/products/CabSauv_WEB.jpg?v=1520424563"
                      githubLink="https://github.com/grantnathanielbrown/esGApe-front-end"/> */}
                </main>
            </div>
        );
    }
}

export default ProjectsPage;