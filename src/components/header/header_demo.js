import React, { Component } from 'react'
import './header_demo.scss'
import {Link} from 'react-router-dom'

 class HeaderDemo extends Component {
  render() {
    return (
      <div className='header-demo-wrap'>
            <div className="header-left fll">
                <h1>共享单车后台系统</h1>
            </div>
            <div className="header-right flr">
                <span className="username">
                    欢迎，王韶祺
                </span>
                <span className="logout">
                    <Link to='/common/login'>退出</Link>
                </span>
            </div>
      </div>
    )
  }
}

export default HeaderDemo