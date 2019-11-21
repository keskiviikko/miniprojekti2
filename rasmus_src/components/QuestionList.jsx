import React, { Component } from 'react'
import Question from './Question'
import { getAllQuestions} from '../service/apiclient'



export default class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }
    

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
                <Question {...this.props} question={item} key={item.id} />
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