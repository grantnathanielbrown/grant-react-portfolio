import React, { Component } from 'react'
import marked from "marked";

import SubHeader from '../../../Global/SubHeader/SubHeader'
import BlogPost from '../BlogPost/BlogPost'
class BlogPage extends Component {
    constructor(props) {
        super(props)
        this.state= {}
    }
    componentWillMount() {
        const readmePath = require("../BlogPost/ReactRouters.md")

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
                    <BlogPost content={this.state.markdown}  />
                </div>
            </div>
        )
    }
}

export default BlogPage