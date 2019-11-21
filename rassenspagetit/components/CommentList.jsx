import React, { Component } from 'react'
import { fetchAllComments } from '../service/apiclient'

export default class CommentList extends Component {
    render() {
        return (
            <div>
                <h2>CommentList</h2>
                {commentitems}
            </div>
        )
    }
}
