import React, { Component } from 'react';
// dependencies
import { Route, Link, Redirect, Switch } from 'react-router-dom';
// import Anime from 'react-anime';
import anime from 'animejs';
import lbracket from '../../Images/test';

import leftbracket from '../../Images/leftbracket.svg';
// 1 event listener on mouse enter and mouse leave
// 2 variable= anime()
// 3 mouse enter {function } and mouse leavefunction 
// 4
class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "black" ,
        }


        // this.buttonAnimation = this.buttonAnimation.bind(this);
        // this.navHover = this.navHover.bind(this);
        // this.navAway = this.navAway.bind(this);
    }
    test(){
       
    }

    colorChangerAnimation(e) {
        var x = e.target;
        console.log(x);
        let colorChanger = anime({
            
            targets: x,
            // background: rgb(0, 0, 150),
            color: "#1DA1F2",
            duration: 2000,
            // 
            
        })
        
        // colorChanger.play
        
    }
    // navAway(e) {
    //     var x = e.target;
    //     console.log(x);
    //     this.buttonAnimation(x, '#1DA1F2', 'reverse');
    // }

    // navAway(e) {
    //     var element = e.target;
    //     console.log(element);
    //     anime({
            
    //         targets: element,
    //         // background: rgb(0, 0, 150),
    //         color: "#000000",
    //         duration: 1000,
    //     })
    // }

    render() {
        // let colorChanger = anime({
        //     targets: ".nav-anchor",    
        //     color: "#1DA1F2",
        //     duration: 2000,
        //     autoplay: false,
            
        // })
        let test = <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 100 125"><defs><g id="a"><path class="path" fill="#ffffff" stroke="#000000" stroke-width="4" d=" M 51.3 22.9 Q 53 21.55 57.75 21.55 L 57.75 18.85 Q 54.35 18.85 52.3 19.5 49.95 20.2 48.6 21.9 47.25 23.9 47.25 28.3 L 47.25 42.9 Q 46.95 46 42 50 42.45 50.05 44.95 52.95 47.45 55.85 47.25 57.1 L 47.25 72 Q 47.25 76.4 48.6 78.45 51.3 81.15 58.05 81.15 L 58.05 78.45 Q 53.3 78.45 51.65 77.1 50.3 75.75 50.3 72 L 50.3 57.1 Q 50.3 53.4 46.25 50.05 46.5 49.95 48.25 47.95 50.3 45.6 50.3 42.9 L 50.3 28.3 Q 50.3 24.25 51.3 22.9 Z"/></g></defs><g transform="matrix( 1, 0, 0, 1, 0,0) "><use xlinkHref="#a"/></g></svg>
        return (
            <div>
                <nav className="navbar" id="navbar-main">                
                    <h1>GRANT BROWN</h1>
                    {/* <Anime> */}
                    <div className="test-svg">
                        {test}
                    </div>
                    {/* anime({targets: e.target,color: "#1DA1F2", duration: 3000,}), */}
                    <Link className="nav-anchor" 
                    onMouseEnter={(e) => { 
                    anime({targets: ".test-svg", strokeDashoffset: [anime.setDashoffset, 1000], duration: 3000, }), console.log(e.target)}}
                    onMouseLeave={(e) => {anime({targets: e.target,color: "#000000", duration: 3000, easing: "linear"}), console.log(e.target)}}
                    to='/'>HOME</Link>
                    <Link className="nav-anchor"    to='/projects'>PROJECTS</Link>
                    <Link className="nav-anchor"    to='/blog'>BLOG</Link>
                    {/* </Anime> */}
                </nav>
            </div>
        )
    }
} 

export default Navbar;