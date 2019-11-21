// import React, { Component } from 'react'
// import REST from './REST';

// export default class Lista extends Component {
//     state = { data: [] }
//     componentDidMount = () => {
//         this.xhr = new XMLHttpRequest();
//         this.xhr.onreadystatechange = this.onReadyStateChanged;
//         this.xhr.open('GET', '/api/questions', true);
//         this.xhr.send();
//     }
//     onReadyStateChanged = () => {
//         if (this.xhr.readyState == 4 && this.xhr.status == 200) {
//             this.setState({ data: JSON.parse(this.xhr.responseText) });
//         }
//     }
//     render() {
//         return (
//             <REST rest={this.state.data} />
//         )
//     }
// }
