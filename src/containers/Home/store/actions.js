const https = require('https');
import { CHANGE_LIST } from './constants'

export const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = (server = true) => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/common/api/menus', { httpsAgent: new https.Agent({ rejectUnauthorized: false }) }).then((res) => {
      const list = res.data
      dispatch(changeList(list))
    })
  }
}