import React, { Component } from 'react';
// dependencies
import { Route, Link, Redirect, Switch } from 'react-router-dom';
// import Anime from 'react-anime';
import anime from 'animejs';

class Navbar extends Component {
    constructor(props) {
        super(props) 


        this.buttonAnimation = this.buttonAnimation.bind(this);
        this.navHover = this.navHover.bind(this);
        this.navAway = this.navAway.bind(this);
    }
    buttonAnimation(element, color, direction){
        anime({
            
            targets: element,
            // background: rgb(0, 0, 150),
            color: color,
            duration: 2000,
            direction: direction
        })
    } 

    // test(){
    //     anime({
    //         translateX: 250
    //     })
    // }

    navHover(e) {
        var x = e.target;
        console.log(x);
        // this.buttonAnimation(x, '#1DA1F2','forwards');
    }
    navAway(e) {
        var x = e.target;
        console.log(x);
        this.buttonAnimation(x, '#1DA1F2', 'reverse');
    }

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
        return (
            <div>
                <nav className="navbar" id="navbar-main">                
                    <h1>GRANT BROWN</h1>
                    {/* <Anime> */}

                        <Link className="nav-anchor" onMouseOver={this.navHover} onMouseLeave={this.navAway}  to='/'>HOME</Link>
                        <Link className="nav-anchor" onMouseOver={this.navHover} onMouseLeave={this.navAway}  to='/projects'>PROJECTS</Link>
                        <Link className="nav-anchor" onMouseOver={this.navHover} onMouseLeave={this.navAway}  to='/blog'>BLOG</Link>
                    {/* </Anime> */}
                </nav>
            </div>
        )
    }
}

export default Navbar;