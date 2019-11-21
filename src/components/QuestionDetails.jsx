import React, { Component } from 'react'
import Poll from 'react-polls'

// Declaring poll question and answers
const { optionA, optionB } = this.props.question; //????

const pollQuestion = 'Toimiiko tämä testi'
const pollAnswers = [
    { option: {optionA}, votes: 5 }, // {optionAcounter}
    { option: {optionB}, votes: 1 } // {optionBcounter}
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
