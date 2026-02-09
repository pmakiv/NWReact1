import axios from 'axios'
const baseUrl = "https://northwindrestapi120260209134825-gaczgmcwd6h7cwdw.swedencentral-01.azurewebsites.net/api/Products"

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