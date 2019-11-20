import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Poll from 'react-polls'

// Declaring poll question and answers
const pollQuestion = 'Kumpi menee päälle, kinkku vai juusto?'
const pollAnswers = [
    { option: 'Kinkku', votes: 8 },
    { option: 'Juusto', votes: 2 }
]

export default class CommentForm extends Component {
    // Setting answers to state to reload the component with each vote
    state = {
        pollAnswers: [...pollAnswers]
    }

    // Handling user vote
    // Increments the votes count of answer when the user votes
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
    // ALLA OLEVA KUULUU FORM:IIN, mutta kesken
    // postQuestion(this.state).then(response => {
    //     this.props.history.push('/questions');
    // })
    render() {
        const { pollAnswers } = this.state
        return (
            <div className="CommentForm AppComponent">
                <Poll question={pollQuestion} answers={pollAnswers} onVote={this.handleVote} />
                <Form>
                    {/* {['radio'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Option A" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="Option B" type={type} id={`inline-${type}-2`} />
                        </div>
                    ))} */}
                    <Form.Group as={Col} controlId="formGridComment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows="4" placeholder="Your comment" required='required' />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Button variant="info" type="submit" onClick={this.handleClick}>Vote</Button>
                </Form>

            </div>
        )
    }
}
