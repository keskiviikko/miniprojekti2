import React, { Component } from 'react'
import QuestionDetails from './QuestionDetails'


export default class QuestionList extends Component {
    
    render() {
        const questionitems = this.props.items.map(item => {
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