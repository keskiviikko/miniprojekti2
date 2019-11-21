import React, { Component } from 'react'
import QuestionList from './QuestionList'
import QuestionForm from './QuestionForm'
import { fetchAllQuestions, fetchSingleQuestion, postQuestion } from '../service/apiclient'

export default class QuestionBox extends Component {
    state = { items: [] };

    componentDidMount() {
        this.fetchQuestionList();
    }

    fetchQuestionList = () => {
        fetchAllQuestions().then(items => {
            this.setState({ items });
        })
    }

    fetchQuestion = id => {
        fetchSingleQuestion(id).then(response => {
            this.fetchQuestionList();
        })
    }

    addQuestion = question => {
        postQuestion(question).then(response => {
            this.fetchQuestionList();
        })
    }
    render() {
        return (
            <div>
                <QuestionForm addCallback={this.addQuestion} />
                <QuestionList items={this.state.items} />
            </div>
        )
    }
}
