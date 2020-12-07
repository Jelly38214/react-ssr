import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { headerComponentActions } from './store'
import styles from './index.css'
console.log('xxxxxxxxxxx',styles)

const Header = (props) => {
  console.log('props', props, styles)
  return (
    <div className={styles.test}>
      <Link to="/">Home</Link>
      <br />
      {
        props.login ? <Fragment>
          <Link to="/login">翻译列表</Link>
          <br />
          <button onClick={props.handleLogout}>退出</button>
        </Fragment> : <button onClick={props.handleLogin}>登录</button>
      }
    </div>
  )
}

const mapState = (state) => ({ login: state.header.login })
const mapDispatch = (dispatch) => ({
  handleLogin() {
    dispatch(headerComponentActions.login())
  },
  handleLogout() {
    dispatch(headerComponentActions.logout())
  }
})

export default connect(mapState, mapDispatch)(Header) 