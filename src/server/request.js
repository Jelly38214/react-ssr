import axios from 'axios'

export const serverRequest = (req)  => axios.create({
  baseURL: 'https://cz.droomo.top/mock/5bf3aa57bc19540767dd9451/example',
  headers: {
    cookie: req.get('cookie') || ''
  }
})