import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        const { username, comment } = this.props.comment;
        return (
            <div className="Question">
                <p className="username">{username}</p>
                <p className="comment">{comment}</p>
            </div>
        )
    }
}
