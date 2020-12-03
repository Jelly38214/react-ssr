import React from 'react'
// 同构： 一套在服务端执行一次(生成内容)，客户端执行一次(绑定事件)
const Home = () => {
  return (
    <div>
      <div>This is DEll Lell1</div>
      <button onClick={() => alert('click')}>Click</button>
    </div>
  )

} 

export default Home