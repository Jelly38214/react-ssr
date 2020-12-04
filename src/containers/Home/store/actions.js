import axios from 'axios'
const https = require('https');
import { CHANGE_LIST } from './constants'

export const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch) => {
    return axios.get('https://cz.droomo.top/mock/5dbfda1488b2265d7e2525b2/common/api/menus', { httpsAgent: new https.Agent({ rejectUnauthorized: false }) }).then((res) => {
      console.log('axios:', res.data)
      const list = res.data
      dispatch(changeList(list))
    })
  }
}