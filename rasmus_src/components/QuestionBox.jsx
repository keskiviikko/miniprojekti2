import React, { Component } from 'react'
import QuestionList from './QuestionList'
import { getSingleQuestion } from '../service/apiclient'

export default class QuestionBox extends Component {
    state = { items: [] };

    componentDidMount() {
        this.fetchQuestionList();
    }

    fetchQuestion = id => {
        getSingleQuestion(id).then(response => {
            this.fetchQuestionList();
        })
    }

    render() {
        return (
            <div>
                <QuestionList items={this.state.items} />
            </div>
        )
    }
}
