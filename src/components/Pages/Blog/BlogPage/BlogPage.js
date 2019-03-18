import React, { Component } from 'react';
import marked from "marked";

import SubHeader from '../../../Global/SubHeader/SubHeader';
import BlogPost from '../BlogPost/BlogPost';
class BlogPage extends Component {
    constructor(props) {
        super(props)
        this.state= {}
        this.showNewPost = this.showNewPost.bind(this);
    }

    showNewPost(e) {
        const readmePath = require(`../BlogPost/${e.target.className}`);
        e.preventDefault;
        fetch(readmePath)
    .then(response => {
      return response.text()
    })
    .then(text => {
      this.setState({
        markdown: marked(text)
      })
      console.log(this.state)
    })
    }

    componentWillMount() {
        const readmePath = require("../BlogPost/test.md")

        fetch(readmePath)
    .then(response => {
      return response.text()
    })
    .then(text => {
      this.setState({
        markdown: marked(text)
      })
      console.log(this.state)
    })
    }
    render () {
        // const { markdown } = this.state.markdown
        return (
            <div className="blog-page">
                <SubHeader header={"Blog"} footnote={"This is where I jot down my thoughts about my recent projects and new discoveries, among other things."} />
                <div className="blog-container">
                  <div className="side-flex">
                  
                    <ul className="side-navigation">                                    
                      <li className="test.md" onClick={this.showNewPost} href="#">Test - March 21st, 2019</li>
                      <li className="dodgingTrap.md"onClick={this.showNewPost} href="#">Dodging The Trap - July 11th, 2018</li>
                    </ul> 
                        <BlogPost content={this.state.markdown}  />
                  </div>
                </div>
            </div>
        )
    }
}

export default BlogPage