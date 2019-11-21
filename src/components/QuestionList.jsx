import React, { Component } from 'react'
import QuestionDetails from './QuestionDetails'
import { getAllQuestions} from '../service/apiclient'



export default class QuestionList extends Component {
    state = { items: [] };

    componentDidMount(){
        this.fetchQuestionList();
    }

    fetchQuestionList = () => {
        getAllQuestions().then(items => {
            this.setState({ items });
        })
    }

    render() {
        const questionitems = this.state.items
        .map(item => {
            return (
                <QuestionDetails question={item} key={item.id} />
            )
        })
        return (
            <div className="QuestionList AppComponent">
                <h2>QuestionList</h2>
                {questionitems}
            </div>
        )
    }
}