import axios from 'axios'
const baseUrl = "https://localhost:7167/api/Products"

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = () => {
           const config = {
        headers: {Authorization: token}
    }
    const request = axios.get(baseUrl, config)
    return request.then(response => response.data)
}

const create = newProd => {
           const config = {
        headers: {Authorization: token}
    }
return axios.post(baseUrl, newProd, config)
}

const remove = id => {
           const config = {
        headers: {Authorization: token}
    }
return axios.delete(`${baseUrl}/${id}`, config)
}

const update = (object) => {
        const config = {
        headers: {Authorization: token}
    }
    return axios.put(`${baseUrl}/${object.ProductId}`, object, config)
}

export default {getAll, create, remove, update, setToken}