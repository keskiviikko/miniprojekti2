import React, { Component } from 'react'
import Poll from 'react-polls'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default class QuestionForm extends Component {
    handleClick = () => {
        console.log('Click happened');
    }
    render() {
        return (
            <div className="QuestionForm AppComponent">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridTitle">
                            <Form.Label>Question Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter question title" required='required' />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNotes">
                            <Form.Label>Question Details</Form.Label>
                            <Form.Control as="textarea" rows="4" placeholder="Your question" required='required' />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridOption">
                            <Form.Label>Option A</Form.Label>
                            <Form.Control type="text" placeholder="Enter option A" required='required' />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridOption">
                            <Form.Label>Option B</Form.Label>
                            <Form.Control type="text" placeholder="Enter option B" required='required' />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>

                    <Button variant="info" type="submit" onClick={this.handleClick}>Post</Button>

                </Form>
            </div>
        )
    }
}
