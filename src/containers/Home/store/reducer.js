import { CHANGE_LIST } from './constants'

const defaultState = { name: 'jelly', newsList: [] }

export const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        newsList: action.list
      }
    default:
      return state;
  }
}