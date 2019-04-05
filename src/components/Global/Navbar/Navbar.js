import React, { Component } from 'react';
// dependencies
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import anime from 'animejs';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_time: false
        }
    }



    render() {
        
        

        let left_bracket = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 100 125"><defs><g id="first_left"><path class="first_left" fill="#ffffff" stroke="#01B9FF" stroke-width="4" d=" M 51.3 22.9 Q 53 21.55 57.75 21.55 L 57.75 18.85 Q 54.35 18.85 52.3 19.5 49.95 20.2 48.6 21.9 47.25 23.9 47.25 28.3 L 47.25 42.9 Q 46.95 46 42 50 42.45 50.05 44.95 52.95 47.45 55.85 47.25 57.1 L 47.25 72 Q 47.25 76.4 48.6 78.45 51.3 81.15 58.05 81.15 L 58.05 78.45 Q 53.3 78.45 51.65 77.1 50.3 75.75 50.3 72 L 50.3 57.1 Q 50.3 53.4 46.25 50.05 46.5 49.95 48.25 47.95 50.3 45.6 50.3 42.9 L 50.3 28.3 Q 50.3 24.25 51.3 22.9 Z"/></g></defs><g transform="matrix( 1, 0, 0, 1, 0,0) "><use xlinkHref="#first_left"/></g></svg>
        let right_bracket = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 100 125"><defs><g id="first_right"><path class="first_right" fill="#ffffff" stroke="#01B9FF" stroke-width="4" d=" M 51.45 21.9 Q 50.1 20.2 47.75 19.5 45.7 18.85 42.3 18.85 L 42.3 21.55 Q 47.05 21.55 48.75 22.9 49.75 24.25 49.75 28.3 L 49.75 42.9 Q 49.75 45.6 51.8 47.95 53.55 49.95 53.8 50.05 49.75 53.4 49.75 57.1 L 49.75 72 Q 49.75 75.75 48.4 77.1 46.75 78.45 42 78.45 L 42 81.15 Q 48.75 81.15 51.45 78.45 52.8 76.4 52.8 72 L 52.8 57.1 Q 52.6 55.85 55.1 52.95 57.6 50.05 58.05 50 53.1 46 52.8 42.9 L 52.8 28.3 Q 52.8 23.9 51.45 21.9 Z"/></g></defs><g transform="matrix( 1, 0, 0, 1, 0,0) "><use xlinkHref="#first_right"/></g></svg>
        
        let left_bracket_two = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 100 125"><defs><g id="second_left"><path class="second_left" fill="#ffffff" stroke="#01B9FF" stroke-width="4" d=" M 51.3 22.9 Q 53 21.55 57.75 21.55 L 57.75 18.85 Q 54.35 18.85 52.3 19.5 49.95 20.2 48.6 21.9 47.25 23.9 47.25 28.3 L 47.25 42.9 Q 46.95 46 42 50 42.45 50.05 44.95 52.95 47.45 55.85 47.25 57.1 L 47.25 72 Q 47.25 76.4 48.6 78.45 51.3 81.15 58.05 81.15 L 58.05 78.45 Q 53.3 78.45 51.65 77.1 50.3 75.75 50.3 72 L 50.3 57.1 Q 50.3 53.4 46.25 50.05 46.5 49.95 48.25 47.95 50.3 45.6 50.3 42.9 L 50.3 28.3 Q 50.3 24.25 51.3 22.9 Z"/></g></defs><g transform="matrix( 1, 0, 0, 1, 0,0) "><use xlinkHref="#second_left"/></g></svg>
        let right_bracket_two = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 100 125"><defs><g id="second_right"><path class="second_right" fill="#ffffff" stroke="#01B9FF" stroke-width="4" d=" M 51.45 21.9 Q 50.1 20.2 47.75 19.5 45.7 18.85 42.3 18.85 L 42.3 21.55 Q 47.05 21.55 48.75 22.9 49.75 24.25 49.75 28.3 L 49.75 42.9 Q 49.75 45.6 51.8 47.95 53.55 49.95 53.8 50.05 49.75 53.4 49.75 57.1 L 49.75 72 Q 49.75 75.75 48.4 77.1 46.75 78.45 42 78.45 L 42 81.15 Q 48.75 81.15 51.45 78.45 52.8 76.4 52.8 72 L 52.8 57.1 Q 52.6 55.85 55.1 52.95 57.6 50.05 58.05 50 53.1 46 52.8 42.9 L 52.8 28.3 Q 52.8 23.9 51.45 21.9 Z"/></g></defs><g transform="matrix( 1, 0, 0, 1, 0,0) "><use xlinkHref="#second_right"/></g></svg>
        
        let left_bracket_three = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 100 125"><defs><g id="third_left"><path class="third_left" fill="#ffffff" stroke="#01B9FF" stroke-width="4" d=" M 51.3 22.9 Q 53 21.55 57.75 21.55 L 57.75 18.85 Q 54.35 18.85 52.3 19.5 49.95 20.2 48.6 21.9 47.25 23.9 47.25 28.3 L 47.25 42.9 Q 46.95 46 42 50 42.45 50.05 44.95 52.95 47.45 55.85 47.25 57.1 L 47.25 72 Q 47.25 76.4 48.6 78.45 51.3 81.15 58.05 81.15 L 58.05 78.45 Q 53.3 78.45 51.65 77.1 50.3 75.75 50.3 72 L 50.3 57.1 Q 50.3 53.4 46.25 50.05 46.5 49.95 48.25 47.95 50.3 45.6 50.3 42.9 L 50.3 28.3 Q 50.3 24.25 51.3 22.9 Z"/></g></defs><g transform="matrix( 1, 0, 0, 1, 0,0) "><use xlinkHref="#third_left"/></g></svg>
        let right_bracket_three = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 100 125"><defs><g id="third_right"><path class="third_right" fill="#ffffff" stroke="#01B9FF" stroke-width="4" d=" M 51.45 21.9 Q 50.1 20.2 47.75 19.5 45.7 18.85 42.3 18.85 L 42.3 21.55 Q 47.05 21.55 48.75 22.9 49.75 24.25 49.75 28.3 L 49.75 42.9 Q 49.75 45.6 51.8 47.95 53.55 49.95 53.8 50.05 49.75 53.4 49.75 57.1 L 49.75 72 Q 49.75 75.75 48.4 77.1 46.75 78.45 42 78.45 L 42 81.15 Q 48.75 81.15 51.45 78.45 52.8 76.4 52.8 72 L 52.8 57.1 Q 52.6 55.85 55.1 52.95 57.6 50.05 58.05 50 53.1 46 52.8 42.9 L 52.8 28.3 Q 52.8 23.9 51.45 21.9 Z"/></g></defs><g transform="matrix( 1, 0, 0, 1, 0,0) "><use xlinkHref="#third_right"/></g></svg>
        
        // Setting them up to be rendered

        let left_bracket_render = 
            <div className="left bracket_container">
                {left_bracket}
            </div>

        let right_bracket_render = 
        <div className="right bracket_container">
            {right_bracket}
        </div>

        let left_bracket_render_two = 
        <div className="left_two bracket_container">
            {left_bracket_two}
        </div>

        let right_bracket_render_two = 
        <div className="right_two bracket_container">
            {right_bracket_two}
        </div>  

        let left_bracket_render_three = 
        <div className="left_three bracket_container">
            {left_bracket_three}
        </div>

        let right_bracket_render_three = 
        <div className="right_three bracket_container">
            {right_bracket_three}
        </div> 

        return (
            <div>
                <nav className="navbar" id="navbar-main">                
                    <h1>GRANT BROWN</h1>

                    {/* home */}

                    {left_bracket_render}
                    <Link className="nav-anchor" 
                    onMouseEnter={(e) => {
                        anime({targets: e.target, color: "#01B9FF", easing: "linear", duration: 1000});
                        // anime({targets: ".first_left, .first_right", opacity: 1, duration: 1000});
                        // anime({targets: ".first_left, .first_right", strokeDashoffset: [anime.setDashoffset, 1000, 0], easing: "linear", loop: true, direction: "forwards", duration: 10000, });                        
                    }
                }
                    onMouseLeave={(e) => {                               
                    // anime({targets: ".first_left, .first_right", opacity: 0});                   
                    anime({targets: e.target, color: "#000000",}), console.log(e.target)}}                    
                    to='/'>HOME</Link>
                    {right_bracket_render}

                    {/* end home */}

                    {/* projects */}

                    {left_bracket_render_two}
                    <Link className="nav-anchor" 
                    onMouseEnter={(e) => {
                        anime({targets: e.target, color: "#01B9FF", easing: "linear", duration: 1000});
                        // anime({targets: ".second_left, .second_right", opacity: 1, duration: 1000});
                        // anime({targets: ".second_left, .second_right", strokeDashoffset: [anime.setDashoffset, 1000, 0], easing: "linear", loop: true, direction: "forwards", duration: 10000, });                        
                    }
                }
                    onMouseLeave={(e) => {                               
                    // anime({targets: ".second_left, .second_right", opacity: 0});                   
                    anime({targets: e.target, color: "#000000",}), console.log(e.target)}}                    
                    to='/projects'>PROJECTS</Link>
                    {right_bracket_render_two}

                    {/* end projects */}                    

                    {/* blogs */}

                    {left_bracket_render_three}
                    <Link className="nav-anchor" 
                    onMouseEnter={(e) => {
                        anime({targets: e.target, color: "#01B9FF", easing: "linear", duration: 1000});
                        // anime({targets: ".third_left, .third_right", opacity: 1, duration: 1000});
                        // anime({targets: ".third_left, .third_right", strokeDashoffset: [anime.setDashoffset, 1000, 0], easing: "linear", loop: true, direction: "forwards", duration: 10000, });                        
                    }
                }
                    onMouseLeave={(e) => {                               
                    // anime({targets: ".third_left, .third_right", opacity: 0});                   
                    anime({targets: e.target, color: "#000000",}), console.log(e.target)}}                    
                    to='/blog'>BLOG</Link>
                    {right_bracket_render_three}

                    {/* end blogs */}  
                </nav>
            </div>
        )
    }
} 

export default Navbar;