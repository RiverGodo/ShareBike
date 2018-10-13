import React, { Component } from 'react'
import notMatchImg from './daidai.jpg'
import {Link} from 'react-router-dom'
import "./index.less"

class NotMatch extends Component {
  render() {
    return (
      <div className='notmatch clearfix'>
      <div className="notmatch-left fll">
      <div className="title">
          司 马 脸 ！
        </div>
        <div className="desc">
          404 没有找到你要的页面!
        </div>
        <strong>那你去找物管啊</strong>
        <ul>
          <li>或者你可以去</li>
          <li>
            <Link to="/admin/home">回首页</Link>
          </li>
        </ul>
      </div>
        <div className="img-wrap fll">
          <img src={notMatchImg} alt=""/>
        </div>
      </div>
    )
  }
}

export default  NotMatch