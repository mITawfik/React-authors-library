import {BASE_URL} from './base'

const getAuthor = (props) => {
    return fetch(`${BASE_URL}/${props}.json`)
    .then((response) => {
    return response.json()
    }).then((data)=> {
    
    return data
    })
}

const getBooks = (props)=> {
    return fetch(`${BASE_URL}/${props}/works.json`)
    .then((response) => {
    return response.json()
    }).then((data)=> {
    
    return data
    })
}

export {getAuthor, getBooks}