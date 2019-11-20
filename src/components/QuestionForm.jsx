import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export default class QuestionForm extends Component {
    state = {
        id: '',
        title: '',
        details: '',
        optionA: '',
        optionB: '',
        username: '',

    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitQForm = e => {
        e.preventDefault()
        fetch('http://localhost:3000/', { //tähän jotain järkevää
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                details: this.state.details,
                optionA: this.state.optionA,
                optionB: this.state.optionB,
                username: this.state.username
            })
        })
            .then(response => response.json())
            .then(item => {
                if (Array.isArray(item)) {
                    this.props.addItemToState(item[0])
                    this.props.toggle()
                } else {
                    console.log('failure')
                }
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        // jos item löytyy, laita data stateen
        if (this.props.item) {
            const { id, title, details, optionA, optionB, username } = this.props.item
            this.setState({ id, title, details, optionA, optionB, username })
        }
    }

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
                            <Form.Control type="text" name='title' onChange={this.onChange} value={this.state.title} placeholder="Enter question title" required='required' />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridNotes">
                            <Form.Label>Question Details</Form.Label>
                            <Form.Control name='details' as="textarea" rows="4" onChange={this.onChange} value={this.state.details} placeholder="Your question" required='required' />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridOption">
                            <Form.Label>Option A</Form.Label>
                            <Form.Control name='optionA' onChange={this.onChange} value={this.state.optionA} type="text" placeholder="Enter option A" required='required' />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridOption">
                            <Form.Label>Option B</Form.Label>
                            <Form.Control name='optionB' onChange={this.onChange} value={this.state.optionB} type="text" placeholder="Enter option B" required='required' />
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
