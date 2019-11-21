import React, { Component } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { getSingleQuestion } from '../service/apiclient'
import Poll from 'react-polls'

const pollAnswers = [];

export default class QuestionDetails extends Component {
    state = {
        pollAnswers: [...pollAnswers],
        question: ''
    }
    componentDidMount(){
        const id = this.props.match.params.id
        getSingleQuestion(id).then(question => {
            this.setState({question: question[0]})
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
        const { title, topic, username } = this.state.question;
        const pollAnswers = [
            { option: this.state.question.optiona, votes: this.state.question.optionacounter }, 
            { option: this.state.question.optionb, votes: this.state.question.optionbcounter }
        ]
        return (
            <div className="Question">
                <span className="title">{title}</span>
                <p className="username">{username}</p>
                <p className="topic">{topic}</p>
                <Poll question={title} answers={pollAnswers} onVote={this.handleVote} />
                <CommentForm/>
                <CommentList/>
            </div>
        )
    }
}
