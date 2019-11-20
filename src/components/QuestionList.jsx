import React, { Component } from 'react'


export default class QuestionList extends Component {
    state = {
        items: []
    }

    getItems() {
        fetch('http://localhost:3000/') // tähän jotain järkevää
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log(err))
    }

    addItemToState = (item) => {
        this.setState(prevState => ({
            items: [...prevState.items, item]
        }))
    }

    componentDidMount() {
        this.getItems()
    }

    render() {
        const items = this.items.map(item => {
            return (
                <ul key={item.id}>
                    <li>{item.title}</li>
                </ul>
            )
        })
        return (
            <div>
                <ul>
                    <li>{{ items }}</li>
                </ul>
            </div>
        )
    }
}
