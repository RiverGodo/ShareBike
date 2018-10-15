import React, { Component } from 'react'
import {Card} from 'antd'

import echarts from 'echarts/lib/echarts'//引入echarts核心包
import 'echarts/lib/chart/pie'//引入饼图组件
import 'echarts/lib/component/legend'//引入legend组件
import EchartsReact from 'echarts-for-react'//引入第三方封装好的针对react的库
import echartsTheme from '../echartTheme'

 class PieDemo extends Component {
   componentWillMount(){
     echarts.registerTheme('xiaoxiao',echartsTheme)
   }
   pie1 =()=>{
     return{
      title : {
        text: '用户骑行订单',
        x:'center'
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        right:'20',
        top:'20',
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    series : [
        {
            name: '骑行订单',
            type: 'pie',
            radius : ["60%","80%"],
            center: ['50%', '60%'],
            data:[
                {value:3350, name:'周一'},
                {value:3100, name:'周二'},
                {value:2340, name:'周三'},
                {value:1350, name:'周四'},
                {value:15480, name:'周五'},
                {value:5480, name:'周六'},
                {value:1500, name:'周日'},
            ],
        }
    ]
     }
   }
   pie2 =()=>{
    return{
     title : {
       text: '用户骑行订单',
       x:'center'
   },
   tooltip : {
       trigger: 'item'
   },
   legend: {
       orient: 'vertical',
       right:'20',
       top:'20',
       data: ['周一','周二','周三','周四','周五','周六','周日']
   },
   series : [
       {
           name: '骑行订单',
           type: 'pie',
           radius : '80%',
           center: ['50%', '60%'],
           data:[
               {value:3350, name:'周一'},
               {value:3100, name:'周二'},
               {value:2340, name:'周三'},
               {value:1350, name:'周四'},
               {value:15480, name:'周五'},
               {value:5480, name:'周六'},
               {value:1500, name:'周日'},
           ],
       }
   ]
    }
  }
  render() {
    return (
      <div>
        <Card>
          <EchartsReact option={this.pie1()} theme="xiaoxiao"></EchartsReact>
        </Card>
        <Card>
          <EchartsReact option={this.pie2()} theme="xiaoxiao"></EchartsReact>
        </Card>
      </div>
    )
  }
}

export default PieDemo