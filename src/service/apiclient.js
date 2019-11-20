const url = 'api/questions';
const url2 = 'api/comments';
// tuleeko kaikki url:it ja jos tulee, onko sijainnilla väliä? Voi olla samassa
// const url = 'api/comments';
// const url = '/';

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

export const fetchAllComments = () => {
    return fetch(url2)
        .then(resp => resp.json());
}

export const postComment = (comment) => {
    return fetch(url2, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    })
}