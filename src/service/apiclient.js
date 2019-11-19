const url = 'api/questions';
// tuleeko kaikki url:it ja jos tulee, onko sijainnilla väliä?
// const url = 'api/comments';
// const url = '/';

// ALLA OLEVA KUULUU FORM:IIN:
// postQuestion(this.state).then(response => {
//     this.PaymentResponse.history.push('/questions');
// })

export const fetchAllQuestions = () => {
    return fetch(url)
        .then(resp => resp.json());
}

export const fetchSingleQuestion = (id) => {
    return fetch(`${url}/${id}`)
        .then(response => response.json());
}

export const postQuestion = (question) => {
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(question)
    })
}

export const deleteSingleQuestion = (id) => {
    return fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
}