import React, { Component } from 'react'

export default class Question extends Component {
    render() {
        const { title, details, username } = this.props.question;
        return (
            <div className="Question">
                <span className="title">{title}</span>
                <p className="username">{username}</p>
                <p className="details">{details}</p>
            </div>
        )
    }
}
