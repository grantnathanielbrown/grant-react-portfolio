import React, { Component } from 'react';
// dependencies
import { Route, Link, Redirect, Switch } from 'react-router-dom';
class Navbar extends Component {
    // componentWillMount() {
    //     function mobileCompressor(x) {
    //         if (x.matches) { // If media query matches
    //             // var element = document.getElementById("navbar-main");
    //             // element.className.add('mobile');
    //             var navClass = 'navbar mobile';
    //             console.log(navClass);

    //         } else {
    //             var navClass = 'navbar';
    //             console.log(navClass);
    //         }
    //     }
        
    //     var x = window.matchMedia("(max-width: 700px)");
    //     mobileCompressor(x);
    // }
    render() {
        return (
            <div>
                <nav className="navbar" id="navbar-main">
                    <h1>GRANT BROWN</h1>
                    <Link to='/'>HOME</Link>
                    <Link to='/projects'>PROJECTS</Link>
                    <Link to='/blog'>BLOG</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar;