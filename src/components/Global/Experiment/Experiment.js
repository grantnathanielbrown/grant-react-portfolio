import React, { Component } from 'react';
import anime from 'animejs';

export default class Experiment extends Component {
    // sampleFunction() {
    //     console.log("it is moving");
    //     anime({
    //         targets: ".experiment",
    //         translateX: [0, 500]
    //     })
    // }
  render() {
    let experiment = 
    console.log("it is moving");
    anime({
        targets: ".experiment",
        translateX: [0, 500],
        autoplay: false
    })

    return (
      <div>
        <div className="experiment" onClick={experiment.autoplay()}>

        </div>
      </div>
    )
  }
}
