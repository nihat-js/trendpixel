import axios from "axios"

export const baseURL = "https://instagram.brightly-shining.cloud/"
export const apiURL =  baseURL +  'api/v1/'
export const client = axios.create({
  baseURL : apiURL,
  headers : {
    'Authorization' : 'Bearer ' + localStorage.token
  }
})

