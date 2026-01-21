import axios from 'axios'
const baseUrl = "https://localhost:7167/api/Users"

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = () => {
    const request = axios.get(baseUrl, config)
    return request.then(response => response.data)
}

const create = newUser => {
return axios.post(baseUrl, newUser, config)
}

const remove = id => {
return axios.delete(`${baseUrl}/${id}`, config)
}

const update = (object) => {
    return axios.put(`${baseUrl}/${object.UserId}`, object, config)
}

export default {getAll, create, remove, update, setToken}