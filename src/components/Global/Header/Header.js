import React, { Component } from 'react';

class Header extends Component {
    render(props) {
        return (
            <header>
                <img alt="Grant, the creator of the site" src={this.props.img} />
                <h1>{this.props.header}</h1>
                <h3>{this.props.footnote}</h3>
            </header>
        );
    }
}

export default Header;