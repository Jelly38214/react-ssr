import React, { useEffect, useState, useRef } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header'
import { getHomeList } from './store/actions'
// 同构： 一套在服务端执行一次(生成内容)，客户端执行一次(绑定事件)

const Home = () => {
  const homeState = useSelector(state => state.home)
  const dispatch = useDispatch();

  // This hook will not execute on server side.
  useEffect(() => {
    if (!homeState.newsList.length) {
      dispatch(getHomeList())
    }
  }, [])

  function a() {
    return homeState.newsList.map(item => <div key={item.menuUrl}>{item.menuName}</div>)
  }

  return (
    <div>
      <Header />
      {a()}
      {/* <button onClick={() => alert('click')}>Click</button> */}
    </div>
  )
}

// This function uses to get route dependency data before server render
Home.loadData = (store) => {
  return store.dispatch(getHomeList())
}


export default Home