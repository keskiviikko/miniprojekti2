import React, { Component } from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
import QuestionList from './QuestionList'
import { getSingleQuestion } from '../service/apiclient'
import Poll from 'react-polls'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const pollAnswers = [];

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
        const { title, details, username } = this.state.question;
        const pollAnswers = [
            { option: this.state.question.optiona, votes: this.state.question.optionacounter },
            { option: this.state.question.optionb, votes: this.state.question.optionbcounter }
        ]
        return (
            // <div className="Question">
            //     <span className="title">{title}</span>
            //     <p className="username">{username}</p>
            //     <p className="details">{details}</p>
            //     <Poll question={title} answers={pollAnswers} onVote={this.handleVote} />
            //     <CommentForm />

            // </div>
            <Container>

            <Row>
                <Col sm={8}>
                <h2>Question Details</h2>
                    <Poll question={title} answers={pollAnswers} onVote={this.handleVote} />
                    <CommentForm />
                </Col>
                <Col sm={4}><QuestionList /></Col>
            </Row>
        </Container>
        )
    }
}
