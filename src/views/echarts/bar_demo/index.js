import React,{Component} from 'react'
import {Card} from 'antd'

import echarts from 'echarts/lib/echarts'//引入echarts核心包
import 'echarts/lib/chart/bar'//引入条形图组件
import 'echarts/lib/component/legend'//引入legend组件
import EchartsReact from 'echarts-for-react'//引入第三方封装好的针对react的库
import echartsTheme from '../echartTheme'


 class BarDemo extends Component{


    componentWillMount() {
        echarts.registerTheme('wsq', echartsTheme)
    }

   bar1 = () => {
        return{
            title: {
                text: 'OFO周骑行订单',
                x:'center'
            },
            tooltip : {
                trigger: 'axis'
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'ofo订单量',
                    type:'bar',
                    data:[500, 1000, 1600, 3000, 2800, 2600, 2870]
                }
            ]
        }
    }

    bar2 = ()=> {
        return {
            title: {
                text: '用户骑行订单',
                x:'left'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
              data: ['OFO','摩拜', '小蓝单车']
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'OFO',
                    type:'bar',
                    data:[500, 1000, 1600, 3000, 2800, 2600, 2870]
                },
                {
                    name: '摩拜',
                    type: 'bar',
                    data: [600, 1200, 1800, 5000, 6000, 8000, 10000]
                },
                {
                    name: '小蓝单车',
                    type: 'bar',
                    data: [300, 600, 800, 1800, 2000, 1500, 1000]
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Card>
                    <EchartsReact option={this.bar1()} theme='wsq'></EchartsReact>
                </Card>
                <Card  style={{marginTop: 20}}>
                    <EchartsReact option={this.bar2()} theme='wsq'></EchartsReact>
                </Card>
            </div>
        )
    }
}

export default BarDemo