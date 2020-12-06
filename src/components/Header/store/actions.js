const https = require('https');
import { CHANGE_LOGIN } from './constants'

const changeLogin = (value) => ({ type: CHANGE_LOGIN, value })

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/login', { httpsAgent: new https.Agent({ rejectUnauthorized: false }) }).then(res => {
      dispatch(changeLogin(true))  
    })
  }
}

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/logout', { httpsAgent: new https.Agent({ rejectUnauthorized: false }) }).then(res => {
      dispatch(changeLogin(false))  
    })
  }
}

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/islogin', { httpsAgent: new https.Agent({ rejectUnauthorized: false }) }).then(res => {
      dispatch(changeLogin(res.data.data.isLogin))
    })
  }
}