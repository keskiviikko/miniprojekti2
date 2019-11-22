const url = '/api/questions';
const url2 = '/api/comments';

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

export const updateQuestion = (question) => {
    return fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(question)
    })
}
export const deleteSingleQuestion = (id) => {
    return fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
}

//Comments-osio alkaa tästä:

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

export const getSingleComment = (id) => {
    return fetch(`${url2}/${id}`)
        .then(response => response.json());
}

export const updateComment = (comment) => {
    return fetch(url2, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    })
}
export const deleteSingleComment = (id) => {
    return fetch(`${url2}/${id}`, {
        method: 'DELETE'
    })
}

// Votes osio alkaa tästä

export const createVote = (comment) => {
    return fetch(url3, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
    })
}

export const getVoteCount = (id) => {
    return fetch(`${url3}/${id}`)
        .then(response => response.json());
}
