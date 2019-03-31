import React, { Component } from 'react';
// dependencies
import { Route, Link, Redirect, Switch } from 'react-router-dom';
// import Anime from 'react-anime';
import anime from 'animejs';
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
        
        return (
            <div>
                <nav className="navbar" id="navbar-main">                
                    <h1>GRANT BROWN</h1>
                    {/* <Anime> */}
                        
                        <Link className="nav-anchor" 
                        onMouseEnter={(e) => {anime({targets: e.target,color: "#1DA1F2", duration: 3000,}), console.log(e.target)}}
                        onMouseLeave={(e) => {anime({targets: e.target,color: "#000000", duration: 3000,}), console.log(e.target)}}
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