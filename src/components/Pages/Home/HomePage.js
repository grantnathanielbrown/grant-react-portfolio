import React, { Component } from 'react';
import SubHeader from '../../Global/SubHeader/SubHeader'
class HomePage extends Component {
    render() {
        var about = `Web developer with a passion for manga, politics, and of course, coding.
        I enjoy building websites and applications that give users a tighly curated experience,
        focusing on functionality over fluff. Regardless of whether I'm the student or teacher,
        I'm learning, and loving it.`
        let test = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 100 125"><defs><g id="a"><path class="path" fill="#ffffff" stroke="#000000" stroke-width="4" d=" M 51.3 22.9 Q 53 21.55 57.75 21.55 L 57.75 18.85 Q 54.35 18.85 52.3 19.5 49.95 20.2 48.6 21.9 47.25 23.9 47.25 28.3 L 47.25 42.9 Q 46.95 46 42 50 42.45 50.05 44.95 52.95 47.45 55.85 47.25 57.1 L 47.25 72 Q 47.25 76.4 48.6 78.45 51.3 81.15 58.05 81.15 L 58.05 78.45 Q 53.3 78.45 51.65 77.1 50.3 75.75 50.3 72 L 50.3 57.1 Q 50.3 53.4 46.25 50.05 46.5 49.95 48.25 47.95 50.3 45.6 50.3 42.9 L 50.3 28.3 Q 50.3 24.25 51.3 22.9 Z"/></g></defs><g transform="matrix( 1, 0, 0, 1, 0,0) "><use xlinkHref="#a"/></g></svg>
        
        return (
            <div className="home-page">
                {/* <div className="test-svg">
                    {test}
                </div> */}
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
                        <a href="https://github.com/grantnathanielbrown/grant-brown-resume/blob/master/Grant%20Brown%20Resume%204.10.2019.pdf"><i class="fas fa-file-alt fa-2x"></i> Resume</a>
                        <a href="tel:571-249-8475" ><i class="fas fa-phone-square fa-2x"></i> 571-249-8475</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;

