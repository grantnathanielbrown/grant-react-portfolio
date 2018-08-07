import React, { Component } from 'react'

class BlogPost extends Component {
    render () {

        return (
            <div className="blog-post-container">
                <div dangerouslySetInnerHTML={{__html: this.props.content}}>
                </div>
            </div>
        )
    }
}

export default BlogPost