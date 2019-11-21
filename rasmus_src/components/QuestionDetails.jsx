import React, { Component } from 'react'
import Poll from 'react-polls'

// Declaring poll question and answers
// const { optiona, optionb } = this.props.question;

const pollQuestion = 'Toimiiko tämä testi'
const pollAnswers = [
    { option: "A", votes: 5 }, // {optionacounter}
    { option: "B", votes: 1 } // {optionbcounter}
]


export default class QuestionDetails extends Component {
    state = {
        pollAnswers: [...pollAnswers]
    }
    handleVote = voteAnswer => {
        const { pollAnswers } = this.state
        const newPollAnswers = pollAnswers.map(answer => {
            if (answer.option === voteAnswer) answer.votes++
            return answer
        })
        this.setState({
            pollAnswers: newPollAnswers
        })
    }
    render() {
        const { pollAnswers } = this.state
        const { title, details, username } = this.props.question;
        return (
            <div className="Question">
                <span className="title">{title}</span>
                <p className="username">{username}</p>
                <p className="details">{details}</p>
                <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
            </div>
        )
    }
}
