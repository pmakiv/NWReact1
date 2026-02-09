import axios from "axios"

const baseUrl = "https://northwindrestapi120260209134825-gaczgmcwd6h7cwdw.swedencentral-01.azurewebsites.net/api/authentication"

const authenticate = (userForAuth) => {
const request = axios.post(baseUrl, userForAuth)
return request.then(response => response)
}

export default {authenticate}