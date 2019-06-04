import React, { Component } from 'react';
import anime from 'animejs';

export default class Experiment extends Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
  }
  render() {
    var experiment = anime({
        targets: ".experiment",
        translateX: [0, 500],
        duration: 2000,
        direction: "reverse",
        autoplay: false,
    })
    console.log(experiment);

    return (
      <div>
        <div className="experiment" onClick={experiment.reverse} 

        >

        </div>
      </div>
    )
  }
}
