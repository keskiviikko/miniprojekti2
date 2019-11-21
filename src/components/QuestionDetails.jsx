import React, { Component } from 'react'
import { getSingleQuestion } from '../service/apiclient'
import Poll from 'react-polls'

// Declaring poll question and answers
// const { optiona, optionb } = this.props.question;

const pollQuestion = 'Toimiiko tämä testi' //tää on title
const pollAnswers = [
    { option: "A", votes: 5 }, // tää on optionacounter
    { option: "B", votes: 1 } // tää on optionbcounter
]


export default class QuestionDetails extends Component {
    state = {
        pollAnswers: [...pollAnswers],
        question: ''
    }
    componentDidMount(){
        const id = this.props.match.params.id
        getSingleQuestion(id).then(question => {
            this.setState({question})
        })
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
        const { pollAnswers } = this.state;
        const { title, details, username } = this.state.question;
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
