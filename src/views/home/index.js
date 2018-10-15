import React, { Component } from 'react'
import './index.less'
import notMatchImg from '../notMatch/daidai.jpg'

class Home extends Component {
  render() {
    return (
    <div>
      <h1 className="dian">有丶东西</h1>
          <div className='home' >
     
     <div className="img-wrap ">
       <img src={notMatchImg} alt=""/>
     </div>
   </div>
    </div>
  
    )
  }
}

export default  Home