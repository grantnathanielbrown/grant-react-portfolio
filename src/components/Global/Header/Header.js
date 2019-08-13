import React, { Component } from 'react';
import anime from 'animejs';

class Header extends Component {
    componentDidMount() {
        var animatable = document.createElement('div');
        var element = document.getElementById("page-header");
        element.appendChild(animatable);
        anime({
            targets: '.page-title',
            translateY: [100,0],
            opacity: [0,1],
            delay: anime.stagger(100, {start: 500}),
            backgroundColor: '#00FFFFFF',
            duration: 1600,
          })
    }
    render(props) {
        let nameArray = this.props.header.map((i) => {
            return <span className="page-title">{i}</span>
        });
        return (
                <header id="page-header">
                    <img src={this.props.img} />
                    <div className="page-title-container">
                        {nameArray}                    
                    </div>
                    <p>{this.props.footnote}</p>
                </header>
        );
    }
}

export default Header;