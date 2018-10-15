import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Menu} from 'antd'
import './index.less'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../redux/actionCreator'


const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

 class NavLeft extends Component {

    clickMenuItem = ({ item, key, keyPath }) =>{ 
        const text = item.props.children.props.children 
        this.props.action.changeMenuItem(text)
    }
   
  render() {
    return (
        <div className='nav-left'>
            <Menu mode="vertical" theme='dark' onClick={this.clickMenuItem}>
                <MenuItem key='/首页'>
                    <Link to='/admin/home'>首页</Link>
                </MenuItem>
                <MenuItem key='/admin/order_demo'>
                        <Link to='/admin/order_demo'>订单管理</Link>
                    </MenuItem>
                <SubMenu title='图例'>
                    <MenuItem key='/admin/echarts/bar_demo'>
                        <Link to='/admin/echarts/bar_demo'>柱状图</Link>
                    </MenuItem>
                    <MenuItem key='/admin/echarts/pie_demo'>
                        <Link to='/admin/echarts/pie_demo'>饼状图</Link>
                    </MenuItem>
                </SubMenu>
                
            </Menu>
        </div>
    )
  }
}

//传第二个参数 mapActionToProps
export default connect(
    null,
    (dispatch) => ({
        action: bindActionCreators(actionCreator,dispatch)
    })
)(NavLeft)