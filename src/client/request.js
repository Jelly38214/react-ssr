import axios from 'axios'

export const clientRequest = axios.create({
  baseURL: '/nodeapi'
})