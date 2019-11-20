import React, { Component } from 'react'
import QuestionDetails from './QuestionDetails'


export default class QuestionList extends Component {
    state = { items: [] };
    render() {
        const qitems = this.state.items
            .map(item => {
                return (
                    <QuestionDetails question={item} key={item.id} />
                )
            })
        return (
            <div>
                <h2>QuestionList</h2>
                {qitems}
            </div>
        )
    }
}
