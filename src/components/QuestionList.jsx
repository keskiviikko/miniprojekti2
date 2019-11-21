import React, { Component } from 'react'
import QuestionDetails from './QuestionDetails'


export default class QuestionList extends Component {
    state = {
        title: '',
        topic: '',
        optionA: '',
        optionB: '',
        username: ''
    }
    addQuestion = question => {
        const { title, topic, optionA, optionB, username } = question;
        this.setState({ Title: title, Topic: topic, Username: username, OptionA: optionA, OptionB: optionB });
    }
    renderData() {
        var obj = JSON.parse(topicsjson);
        return obj.map((item, index) => {
            const { Title, Topic, Username, OptionA, OptionB } = item
            return (
<ul key={index}>
    <li>{Title}</li>
</ul>
            )
        })
    }
    render() {
        // const questionitems = this.props.items.map(item => {
        //     return (
        //         <QuestionDetails question={item} key={item.id} />
        //     )
        // })
        return (
            <div className="QuestionList AppComponent">
                <h2>QuestionList</h2>
                {/* {questionitems} */}
                {this.renderData()}
            </div>
        );
    }
}

const topicsjson = '[{"Title":"Juusto vai kinkku päälle?","Topic":"Tätä vaan mietin","Username":"rasse","OptionA":"juusto","OptionB":"kinkku"}, {"Title":"Auto vai juna?","Topic":"Tätä nyt vaan mietin","Username":"rasse2","OptionA":"auto","OptionB":"juna"}]';