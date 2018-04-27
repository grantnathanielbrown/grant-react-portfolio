import React, { Component } from 'react';

class SubHeader extends Component {
    render(props) {
        return (
            <div className="sub-header">
                <img src={this.props.img} />
                <h1>{this.props.header}</h1>
                <h3>{this.props.footnote}</h3>
            </div>
        );
    }
}

export default SubHeader;