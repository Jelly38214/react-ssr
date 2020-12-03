import React from 'react'
import Header from '../../components/Header'
// 同构： 一套在服务端执行一次(生成内容)，客户端执行一次(绑定事件)
const Home = () => {
  return (
    <div>
      <Header/>
      <button onClick={() => alert('click')}>Click</button>
    </div>
  )

} 

export default Home