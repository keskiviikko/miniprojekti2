import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { createQuestion } from '../service/apiclient'

export default class QuestionForm extends Component {
    state = {
        title: '',
        topic: '',
        optiona: '',
        optionb: '',
        username: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitQForm = e => {
        e.preventDefault()
        createQuestion(this.state);
        this.setState({ title: '', topic: '', optiona: '', optionb: '', username: '' });

        console.log('Click happened');
        alert('Question submitted!')
    }

    render() {
        return (
            <div className="QuestionForm AppComponent">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridTitle">
                            <Form.Label>Question Title</Form.Label>
                            <Form.Control type="text" name='title' onChange={this.onChange} value={this.state.title} placeholder="Enter question title" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNotes">
                            <Form.Label>Question Details</Form.Label>
                            <Form.Control name='topic' as="textarea" rows="4" onChange={this.onChange} value={this.state.topic} placeholder="Your question" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridOption">
                            <Form.Label>Option A</Form.Label>
                            <Form.Control name='optiona' onChange={this.onChange} value={this.state.optiona} type="text" placeholder="Enter option A" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridOption">
                            <Form.Label>Option B</Form.Label>
                            <Form.Control name='optionb' onChange={this.onChange} value={this.state.optionb} type="text" placeholder="Enter option B" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name='username' onChange={this.onChange} value={this.state.username} type="text" placeholder="Enter username" />
                    </Form.Group>

                    <Button variant="info" type="submit" onClick={this.submitQForm}>Post</Button>

                </Form>
            </div>
        )
    }
}
