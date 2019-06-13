import React, { Component } from 'react';
import Anime from 'react-anime';

class Header extends Component {
    render(props) {
        return (
            <Anime opacity={0}>
                <header>
                    <img src={this.props.img} />
                    <h1>{this.props.header}</h1>
                    <h3>{this.props.footnote}</h3>
                </header>
            </Anime>
        );
    }
}

export default Header;