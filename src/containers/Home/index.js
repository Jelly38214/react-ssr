import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'
// 同构： 一套在服务端执行一次(生成内容)，客户端执行一次(绑定事件)
const Home = (props) => {
  return (
    <div>
      <Header />
      {props.name}
      <button onClick={() => alert('click')}>Click</button>
    </div>
  )

}

const mapStateToProps = (state) => ({ name: state.name })


export default connect(mapStateToProps, null)(Home)