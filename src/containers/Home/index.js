import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header'
import { getHomeList } from './store/actions'
// 同构： 一套在服务端执行一次(生成内容)，客户端执行一次(绑定事件)

const Home = () => {
  const homeState = useSelector(state => state.home)
  const dispatch = useDispatch();

  // componentDidMount在服务端不执行
  useEffect(() => {
    dispatch(getHomeList())
  }, [])

  return (
    <div>
      <Header />
      {
        homeState.newsList.map(item => <p key={item.menuUrl}>{item.menuName}</p>)
      }
      {homeState.name}
      <button onClick={() => alert('click')}>Click</button>
    </div>
  )
}

// This function uses to get route dependency data before server render
Home.loadData = (store) => {
  return store.dispatch(getHomeList())
}


export default Home