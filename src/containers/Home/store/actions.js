import axios from 'axios'
import {CHANGE_LIST} from './constants'

export const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('https://cz.droomo.top/mock/5dbfda1488b2265d7e2525b2/common/api/menus').then((res) => {
      console.log('axios:', res)
      const list = res.data
      dispatch(changeList(list))
    })
  }
}