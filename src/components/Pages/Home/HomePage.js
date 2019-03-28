import React, { Component } from 'react';
import SubHeader from '../../Global/SubHeader/SubHeader'
class HomePage extends Component {
    render() {
        var about = `Web developer with a passion for manga, politics, and of course, coding.
        I enjoy building websites and applications that give users a tighly curated experience,
        focusing on functionality over fluff. Regardless of whether I'm the student or teacher,
        I'm learning, and loving it.`
        return (
            <div className="home-page">
                <SubHeader img={"https://i.imgur.com/1Ox1DcB.jpg"} header={"Grant Brown"} />
                <div className="about-contact-columns">
                    <div className="about-me">
                        <h3>About Me</h3>
                        <p>{about}</p>
                    </div>
                    <div className="contact-me">
                        <h3>Contact</h3>
                        <a href="https://github.com/grantnathanielbrown" ><i class="fab fa-github fa-2x"></i> GitHub</a>
                        <a href="https://www.linkedin.com/in/grant-brown-a6b87a92/"><i class="fab fa-linkedin fa-2x"></i> LinkedIn</a>
                        <a href="mailto:gnb225@nyu.edu" ><i class="fas fa-envelope-square fa-2x"></i> Email (gnb225@nyu.edu)</a>
                        <a href="https://github.com/grantnathanielbrown/grant-brown-resume/blob/master/Grant%20Brown%20Resume%207.30.2018.pdf"><i class="fas fa-file-alt fa-2x"></i> Resume</a>
                        <a href="tel:571-249-8475" ><i class="fas fa-phone-square fa-2x"></i> 571-249-8475</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;

