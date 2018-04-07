import React, { Component } from 'react';
// dependencies
import { Route, Link, Redirect, Switch } from 'react-router-dom'
class Navbar extends Component {
    linkVisit() {
        var link = document.nav.childNodes
        link.classList.toggle('highlight-link')
    }
    render() {
        return (
            <div>
                <nav className="navbar">
                    <h1>GRANT BROWN</h1>
                    <Link to='/home'>HOME</Link>
                    <Link to='/projects'>PROJECTS</Link>
                </nav>
            </div>
        );
    }
}

export default Navbar;