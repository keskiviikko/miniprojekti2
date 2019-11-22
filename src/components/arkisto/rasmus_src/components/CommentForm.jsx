import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { createComment } from '../service/apiclient'

export default class CommentForm extends Component {
    state = { comment: '', username: '' }
    handleCommentChange = (e) => {
        this.setState({ comment: e.target.value })
    }
    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }
    submitCForm = e => {
        e.preventDefault();
        createComment(this.state);
        this.setState({ comment: '', username: '' });
    }

    render() {
        return (
            <div className="CommentForm AppComponent">
                <Form>
                    <Form.Group as={Col} controlId="formGridComment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows="4" placeholder="Your comment" value={this.state.comment}
                            onChange={this.handleCommentChange} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={this.state.username}
                            onChange={this.handleUsernameChange} placeholder="Enter username" />
                    </Form.Group>
                    <Button variant="info" type="submit" onClick={this.submitCForm}>Vote</Button>
                </Form>

            </div>
        )
    }
}
