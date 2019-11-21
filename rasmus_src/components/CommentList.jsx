import React, { Component } from 'react'
import Comment from './Comment'
import { getAllComments } from '../service/apiclient'

export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        this.fetchCommentList();
    }

    fetchCommentList = () => {
        getAllComments().then(items => {
            this.setState({ items });
        })
    }
    render() {
        const commentitems = this.state.items
        .map(item => {
            return (
                <Comment {...this.props} comment={item} key={item.id} />
            )
        })
        return (
            <div>
                <h2>Comment List</h2>
                <p>{commentitems}</p>
            </div>
        )
    }
}
