import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Poll from 'react-polls'

export default class CommentForm extends Component {
    render() {
        return (
            <div className="CommentForm AppComponent">
                <Form>
                    {['radio'].map(type => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Option A" type={type} id={`inline-${type}-1`} />
                            <Form.Check inline label="Option B" type={type} id={`inline-${type}-2`} />
                        </div>
                    ))}
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
