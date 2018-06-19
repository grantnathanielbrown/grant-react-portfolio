import React, { Component } from 'react';


import ProjectLink from '../ProjectLink/ProjectLink'
import SubHeader from '../../../Global/SubHeader/SubHeader'
class ProjectsPage extends Component {
    render() {
        return (
            <div className="projects-page">
                <SubHeader header={"Projects"} footnote={"Made with a wide variety of technologies, including (but not limited to) HTML, CSS, Javascript, React, Node.js, Express.js, Socket.io, and MongoDB"}  />
                <main className="project-container">
                    <ProjectLink title="MANGAD" description="An image sharing site for manga enthusiasts."
                     link="https://mangad.herokuapp.com/" image="https://ih1.redbubble.net/image.491015001.2844/flat,1000x1000,075,f.u1.jpg"/>
                    <ProjectLink title="Slithereen" description="Multiplayer trivia game." link="https://grantnathanielbrown.github.io/slithereen/"
                    image="https://i.imgur.com/lS0M6kP.png" />
                    {/* <ProjectLink title="Bear Attacks!" description="Choose your own adventure style text games."
                     link="https://github.com/grantnathanielbrown/snakestuff" image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/European_Brown_Bear.jpg/1200px-European_Brown_Bear.jpg"/> */}
                    <ProjectLink title="Hangman" description="Replayable hangman game." link="https://grantnathanielbrown.github.io/wdi-project-one/"
                     image="https://images-na.ssl-images-amazon.com/images/I/81xt2%2BPD0IL.png" />
                     <ProjectLink title="esGApe" description="A site to share details on local restaurants and bars."
                      link="https://disillusioned-pet.surge.sh" image="https://cdn.shopify.com/s/files/1/0917/5854/products/CabSauv_WEB.jpg?v=1520424563"/>
                </main>
            </div>
        );
    }
}

export default ProjectsPage;