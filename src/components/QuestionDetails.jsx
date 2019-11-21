import React, { Component } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import { getSingleQuestion } from '../service/apiclient'
import Poll from 'react-polls'

const pollAnswers = [];

const pollStyles2 = {
    questionSeparator: false,
    questionSeparatorWidth: 'question',
    questionBold: false,
    questionColor: '#000000',
    align: 'center',
    theme: 'cyan',
}

export default class QuestionDetails extends Component {
    state = {
        pollAnswers: [...pollAnswers],
        question: ''
    }
    componentDidMount() {
        const id = this.props.match.params.id
        getSingleQuestion(id).then(question => {
            this.setState({ question: question[0] })
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
            { option: this.state.question.optiona, votes: 13 }, // this.state.question.optionacounter
            { option: this.state.question.optionb, votes: 1 } //this.state.question.optionbcounter
        ]
        return (
            <div className="QuestionDetail">
                <p className="topic">{topic}</p>
                <p className="username">{username}</p>
                <div className='PollDiv'>
                    <Poll question={title} answers={pollAnswers} customStyles={pollStyles2} onVote={this.handleVote} />
                </div>
                <CommentForm />
                <CommentList />
            </div>
        )
    }
}
