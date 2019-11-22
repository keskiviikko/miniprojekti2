import React, { Component } from 'react'

export default class Question extends Component {
    render() {
        const { title, username } = this.props.question;
        return (
            <div className="Question">
                <span onClick={()=>this.props.history.push(`/questions/${this.props.question.id}`)} className="title">{title}</span>
                <p className="username">{username}</p>
            </div>
        )
    }
}
