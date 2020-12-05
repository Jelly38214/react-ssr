import axios from 'axios'

export const serverRequest = axios.create({
  baseURL: 'https://cz.droomo.top/mock/5dbfda1488b2265d7e2525b2'
})