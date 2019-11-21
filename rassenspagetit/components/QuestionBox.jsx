import React, { Component } from 'react'
import QuestionList from './QuestionList'
import QuestionForm from './QuestionForm'
import { getAllQuestions, getSingleQuestion, createQuestion } from '../service/apiclient'

export default class QuestionBox extends Component {
    state = { items: [] };

    componentDidMount() {
        this.fetchQuestionList();
    }

    fetchQuestionList = () => {
        getAllQuestions().then(items => {
            this.setState({ items });
        })
    }

    fetchQuestion = id => {
        getSingleQuestion(id).then(response => {
            this.fetchQuestionList();
        })
    }

    addQuestion = question => {
        createQuestion(question).then(response => {
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
