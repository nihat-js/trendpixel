import axios from "axios"

export const baseURL = "https://instagram.brightly-shining.cloud/"
export const apiURL =  baseURL +  'api/v1/'
const client = axios.create({
  baseURL : apiURL,
  headers : {
    'Authorization' : 'Bearer ' +  (localStorage.token || sessionStorage.token )
  }
})

client.interceptors.response.use(null,error=>{
})



export  {client}