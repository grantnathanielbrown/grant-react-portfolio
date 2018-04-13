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
                <SubHeader img={"https://i.imgur.com/1Ox1DcB.jpg"} header={"Grant Brown"}  />
                <div className="about-contact-columns">
                    <div className="about-me">
                        <h3>About Me</h3>
                        <p>{about}</p>
                    </div>
                    <div className="contact-me">
                        <h3>Contact</h3>
                        <a href="https://github.com/grantnathanielbrown" >GitHub</a>
                        <a href="https://www.linkedin.com/in/grant-brown-a6b87a92/" >LinkedIn</a>
                        <a href="mailto:gnb225@nyu.edu" >Email (gnb225@nyu.edu)</a>
                        <a href="https://twitter.com/gnb225?lang=en" >Twitter</a>
                        <p>571-249-8475 (cell)</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;