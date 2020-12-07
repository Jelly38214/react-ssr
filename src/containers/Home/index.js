import React, { useEffect, useState, useRef } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getHomeList } from './store/actions'
import styles from './style.css'
import withStyle from '../../withStyle'
// 同构： 一套在服务端执行一次(生成内容)，客户端执行一次(绑定事件)

const Home = (props) => {
  const homeState = useSelector(state => state.home)
  const dispatch = useDispatch();

  // This hook will not execute on server side.
  useEffect(() => {
    if (!homeState.newsList.length) {
      dispatch(getHomeList())
    }
  }, [])

  return (
    <div className={styles.test}>
      {
        homeState.newsList.map(item => <div key={item.menuUrl}>{item.menuName}</div>)
      }
      <button onClick={() => alert('click')}>Click</button>
    </div>
  )
}


const HomeWithStyle = withStyle(Home, styles);
// This function uses to get route dependency data before server render
HomeWithStyle.loadData = (store) => {
  return store.dispatch(getHomeList())
}



export default HomeWithStyle 