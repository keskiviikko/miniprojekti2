const url = 'http://localhost:3000/api/questions';
const url2 = 'http://localhost:3000/api/comments';
// tuleeko kaikki url:it ja jos tulee, onko sijainnilla väliä? Voi olla samassa
// const url = 'api/comments';
// const url = '/';

export const getAllQuestions = () => {
    return fetch(url)
        .then(resp => resp.json());
}

export const getSingleQuestion = (id) => {
    return fetch(`${url}/${id}`)
        .then(response => response.json());
}

export const createQuestion = (question) => {
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(question)
    })
}

export const deleteQuestion = (id) => {
    return fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
}

export const getAllComments = () => {
    return fetch(url2)
        .then(resp => resp.json());
}

export const createComment = (comment) => {
    return fetch(url2, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    })
}